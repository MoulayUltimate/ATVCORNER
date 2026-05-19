// Tiny single-admin auth: HMAC-signed cookie, env-driven password.
//
// Flow:
//   1. Admin POSTs password to /api/admin/login.
//   2. Server timing-safe-compares with ADMIN_PASSWORD env var.
//   3. On match, server signs `{exp}` with HMAC-SHA256(ADMIN_SESSION_SECRET)
//      and sets it as an HttpOnly, Secure, SameSite=Lax cookie.
//   4. Protected routes call `isAdminAuthed()` which verifies the cookie.
//
// No JWT library, no DB session table — overkill for one user.

import { cookies } from "next/headers";

const COOKIE_NAME = "atv_admin";
const SESSION_DAYS = 7;

function getSecret(): string {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s || s.length < 16) {
    // We intentionally surface this loudly: a missing secret means anyone
    // who knows the cookie format could forge a session.
    throw new Error(
      "ADMIN_SESSION_SECRET env var must be set to a 16+ character random string",
    );
  }
  return s;
}

function b64url(bytes: ArrayBuffer | Uint8Array): string {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let s = "";
  for (const b of arr) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(input: string): Uint8Array {
  const pad = input.length % 4 === 0 ? "" : "=".repeat(4 - (input.length % 4));
  const s = (input + pad).replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmac(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message),
  );
  return b64url(sig);
}

/** Constant-time string compare, since `===` short-circuits and leaks
 *  length-based timing info. Both args are coerced to equal length first. */
export function timingSafeEqual(a: string, b: string): boolean {
  const aBytes = new TextEncoder().encode(a);
  const bBytes = new TextEncoder().encode(b);
  const len = Math.max(aBytes.length, bBytes.length);
  let diff = aBytes.length ^ bBytes.length;
  for (let i = 0; i < len; i++) {
    diff |= (aBytes[i] ?? 0) ^ (bBytes[i] ?? 0);
  }
  return diff === 0;
}

export type AdminToken = { exp: number };

async function signToken(token: AdminToken): Promise<string> {
  const payload = b64url(new TextEncoder().encode(JSON.stringify(token)));
  const sig = await hmac(payload, getSecret());
  return `${payload}.${sig}`;
}

async function verifyToken(raw: string): Promise<AdminToken | null> {
  const parts = raw.split(".");
  if (parts.length !== 2) return null;
  const [payload, sig] = parts;
  const expectedSig = await hmac(payload, getSecret());
  if (!timingSafeEqual(sig, expectedSig)) return null;
  try {
    const json = JSON.parse(new TextDecoder().decode(b64urlDecode(payload)));
    if (typeof json.exp !== "number") return null;
    if (json.exp < Date.now()) return null;
    return json as AdminToken;
  } catch {
    return null;
  }
}

/** Check ADMIN_PASSWORD with timing-safe compare and issue a session cookie. */
export async function tryLogin(password: string): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || expected.length < 4) return false;
  if (!timingSafeEqual(password, expected)) return false;

  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const token = await signToken({ exp });
  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  });
  return true;
}

export async function logout(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

/** Returns true iff the request carries a valid, unexpired admin cookie. */
export async function isAdminAuthed(): Promise<boolean> {
  const jar = await cookies();
  const raw = jar.get(COOKIE_NAME)?.value;
  if (!raw) return false;
  try {
    return (await verifyToken(raw)) !== null;
  } catch {
    return false;
  }
}
