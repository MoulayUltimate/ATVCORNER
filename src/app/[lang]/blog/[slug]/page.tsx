import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/BlogArticle";
import { blogPosts, blogSlugs, getBlogPost } from "@/data/blog";
import { hasLocale, locales } from "@/i18n";

export async function generateStaticParams() {
  const out: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const slug of blogSlugs) {
      out.push({ lang, slug });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const post = getBlogPost(slug);
  if (!post) return {};
  const loc = post.i18n[lang];
  return {
    title: loc.metaTitle,
    description: loc.metaDesc,
    keywords: post.keywords,
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: {
        "fr-FR": `/fr/blog/${slug}`,
        "en-US": `/en/blog/${slug}`,
        "de-DE": `/de/blog/${slug}`,
      },
    },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDesc,
      url: `/${lang}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: loc.metaTitle,
      description: loc.metaDesc,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const post = getBlogPost(slug);
  if (!post) notFound();

  // 3 newest other posts as related
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return <BlogArticle post={post} lang={lang} related={related} />;
}
