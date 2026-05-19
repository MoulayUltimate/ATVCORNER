// GET /api/admin/stats?range=today|7d|30d — protected.
//
// Pulls the raw events from the store for the requested day range,
// then runs `aggregate()` on them. Aggregation is in-memory: cheap up
// to tens of thousands of events per range, which covers this site's
// traffic for a long time.

import type { NextRequest } from "next/server";
import { isAdminAuthed } from "@/lib/admin-auth";
import { activeBackend, getStore } from "@/lib/analytics/store";
import { aggregate, rangeDays } from "@/lib/analytics/aggregate";
import type { Range } from "@/lib/analytics/types";

function parseRange(s: string | null): Range {
  if (s === "7d" || s === "30d") return s;
  return "today";
}

export async function GET(req: NextRequest) {
  if (!(await isAdminAuthed())) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const range = parseRange(req.nextUrl.searchParams.get("range"));
  const days = rangeDays(range);
  const events = await getStore().rangeByDays(days);
  const stats = aggregate(events, range);

  return Response.json({
    ok: true,
    backend: activeBackend(),
    stats,
  });
}
