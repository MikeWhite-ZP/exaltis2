import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";
import { getAllPostSlugs } from "@/lib/blog";
import { PRODUCTS } from "@/data/features";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const STATIC: { path: string; freq: MetadataRoute.Sitemap[number]["changeFrequency"]; pr: number }[] = [
    { path: "/", freq: "daily", pr: 1.0 },
    { path: "/pricing", freq: "weekly", pr: 0.95 },
    { path: "/solutions/software-payments", freq: "weekly", pr: 0.9 },
    { path: "/solutions/affiliate-network", freq: "weekly", pr: 0.9 },
    { path: "/about", freq: "monthly", pr: 0.6 },
    { path: "/contact", freq: "monthly", pr: 0.7 },
    { path: "/careers", freq: "weekly", pr: 0.5 },
    { path: "/faq", freq: "weekly", pr: 0.6 },
    { path: "/get-started", freq: "weekly", pr: 0.9 },
    { path: "/blog", freq: "daily", pr: 0.8 },
    { path: "/help", freq: "weekly", pr: 0.5 },
    { path: "/webinars", freq: "weekly", pr: 0.5 },
    { path: "/partners", freq: "monthly", pr: 0.4 },
    { path: "/privacy", freq: "yearly", pr: 0.3 },
    { path: "/terms", freq: "yearly", pr: 0.3 },
    { path: "/cookies", freq: "yearly", pr: 0.3 },
    { path: "/security", freq: "yearly", pr: 0.3 },
  ];

  const staticEntries = STATIC.map((e) => ({
    url: `${base}${e.path}`,
    lastModified: now,
    changeFrequency: e.freq,
    priority: e.pr,
  }));

  const productEntries = PRODUCTS.map((p) => ({
    url: `${base}${p.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogEntries = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...productEntries, ...blogEntries];
}
