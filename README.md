# Exaltis — AI-Native SaaS for Ground Transportation

> A production-ready Next.js 14 marketing + subscription platform for limousine,
> chauffeur, airport-transfer, executive transportation, black-car, shuttle, and
> fleet-management companies. Provided by **Uion Solutions LLC**.

---

## What's inside

- **Next.js 14 (App Router)** + **TypeScript** + **TailwindCSS** + **ShadCN-style UI primitives**
- **Marketing pages**: Home, Features, Pricing, AI Automation, Dispatching, Reservations,
  Fleet Management, Reporting, Mobile, Developers/API, Integrations, About, Careers,
  Contact, FAQ, Get Started, Sign in / Sign up
- **Legal**: Privacy, Terms, Cookies, Security
- **Blog system**: Markdown-driven with five SEO-optimized starter articles, related-post
  surfaces, RSS-friendly structure
- **Stripe subscriptions**: Checkout, billing portal, signed webhook handler, trial periods,
  monthly + yearly pricing
- **Prisma schema**: Users, Organizations, Subscriptions, Leads, BlogPosts, NextAuth tables
- **SEO infrastructure**: Sitemap, robots, llms.txt, OpenGraph + Twitter cards,
  organization/website/software/FAQ/breadcrumb/article JSON-LD
- **AI search optimization**: llms.txt, machine-readable content structure, AI crawler
  allowances (GPTBot, ChatGPT-User, Perplexity, ClaudeBot, Google-Extended, etc.)
- **Cookie banner**, **accessibility**: skip link, focus styles, semantic structure,
  WCAG-friendly contrast
- **Performance**: Next/Image, route-level metadata, lazy load, font-display swap,
  HTTP security headers
- **Branding**: every legal, footer, pricing, and contact surface references "Provided by
  Uion Solutions LLC" professionally

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# Fill in Stripe keys, DB URL, NEXTAUTH_SECRET, etc.

# 3. (Optional) Generate Prisma client + push schema to your DB
npm run db:push

# 4. Run dev server
npm run dev
# → http://localhost:3000
```

### Build & start

```bash
npm run build
npm run start
```

### Type check & lint

```bash
npm run typecheck
npm run lint
```

## Environment variables

See `.env.example` for the full list. The most important ones:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata, sitemap, schema |
| `DATABASE_URL` | Postgres connection string used by Prisma |
| `NEXTAUTH_SECRET` | Random string for NextAuth/Auth.js session encryption |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` | Stripe billing |
| `STRIPE_PRICE_*` | Price IDs for Starter/Professional/Enterprise (monthly + yearly) |

## Stripe setup

1. Create three products in Stripe: **Starter**, **Professional**, **Enterprise**.
2. Create monthly and yearly prices for each.
3. Copy the price IDs into `.env.local` (`STRIPE_PRICE_STARTER_MONTHLY`, etc.).
4. Install the Stripe CLI and forward webhooks during development:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

5. Use the printed `whsec_...` value as `STRIPE_WEBHOOK_SECRET`.

## Database

The default schema in `prisma/schema.prisma` targets Postgres but works with any
Prisma-supported database. To run locally without a DB, the marketing site renders
fine — only `/api/stripe/webhook` writes (if you uncomment the persistence code).

```bash
npm run db:push       # apply schema
npm run db:studio     # browse data
```

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Set the env vars from `.env.example`.
4. Deploy — Vercel will run `next build` and host with global CDN, image optimization,
   and edge cache out of the box.

`vercel.json` is included with safe defaults.

### Self-hosted / Docker

```bash
docker build -t exaltis-saas .
docker run -p 3000:3000 --env-file .env.local exaltis-saas
```

## SEO + AI search

- `src/app/sitemap.ts` — dynamic XML sitemap, auto-includes blog posts
- `src/app/robots.ts` — explicit allow-list for AI crawlers
- `public/llms.txt` — AI-search optimization, citation-friendly summary
- `src/lib/schema.tsx` — Organization, SoftwareApplication, WebSite, Article, FAQ, Breadcrumb JSON-LD
- `src/lib/seo.ts` — central `buildMetadata()` helper for consistent canonical, OG, Twitter cards

## File layout

```
src/
  app/                  # App router pages and API routes
  components/
    ui/                 # Button, Card, Badge, Container, Logo, etc.
    marketing/          # Header, Footer, Hero, Pricing, FAQ, CTAs, etc.
  content/blog/         # Markdown blog articles
  data/                 # Features, pricing, testimonials, integrations, FAQ
  lib/                  # utils, seo, schema, stripe, prisma, blog
prisma/                 # Prisma schema
public/                 # Static assets, OG images, llms.txt
```

## Authoring blog posts

Drop a Markdown file into `src/content/blog/<slug>.md`:

```yaml
---
title: "Your title"
slug: "your-title"
excerpt: "One-line summary"
category: "Operations"
tags: ["limo", "AI"]
authorName: "Exaltis Editorial"
publishedAt: "2026-05-15"
seoTitle: "SEO title override"
seoDesc: "SEO description override"
coverImage: "/og/blog/your-title.svg"
---

Markdown content here.
```

The post will automatically appear in `/blog`, get a dedicated URL, sitemap entry,
JSON-LD Article schema, and related-post surfaces.

## Branding

This product is **Exaltis**, provided by **Uion Solutions LLC**. The branding
appears in:

- Footer (every page)
- Legal pages (Privacy, Terms, Cookies, Security)
- About page
- Pricing fine print
- Contact form
- `llms.txt`
- JSON-LD `parentOrganization`

## License

This codebase is proprietary to Uion Solutions LLC. All rights reserved.
