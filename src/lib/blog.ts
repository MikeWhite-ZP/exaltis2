import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  tags?: string[];
  authorName?: string;
  publishedAt?: string;
  updatedAt?: string;
  seoTitle?: string;
  seoDesc?: string;
  coverImage?: string;
  content: string;
  readingTime: number;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function estimateReadingTime(text: string): number {
  const wpm = 220;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wpm));
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const candidates = [`${slug}.md`, `${slug}.mdx`].map((n) => path.join(BLOG_DIR, n));
  const filepath = candidates.find((p) => fs.existsSync(p));
  if (!filepath) return null;
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || "",
    category: data.category,
    tags: data.tags || [],
    authorName: data.authorName,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    seoTitle: data.seoTitle,
    seoDesc: data.seoDesc,
    coverImage: data.coverImage,
    content,
    readingTime: estimateReadingTime(content),
  };
}

export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p))
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

export function renderMarkdown(md: string): string {
  // Minimal markdown -> HTML. For headings, paragraphs, lists, code, bold, italic, links.
  const escapeHtml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const lines = md.split(/\r?\n/);
  const out: string[] = [];
  let inList = false;
  let inOrderedList = false;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      out.push(`<p>${inline(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };
  const closeLists = () => {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
    if (inOrderedList) {
      out.push("</ol>");
      inOrderedList = false;
    }
  };

  function inline(s: string) {
    let str = escapeHtml(s);
    str = str.replace(/`([^`]+)`/g, '<code>$1</code>');
    str = str.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    str = str.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    str = str.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="underline decoration-primary-300 underline-offset-2 hover:text-primary-600">$1</a>',
    );
    return str;
  }

  for (const rawLine of lines) {
    const line = rawLine;
    if (/^\s*$/.test(line)) {
      flushParagraph();
      closeLists();
      continue;
    }
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flushParagraph();
      closeLists();
      const level = h[1].length;
      out.push(`<h${level}>${inline(h[2])}</h${level}>`);
      continue;
    }
    const ul = line.match(/^\s*[-*]\s+(.*)$/);
    if (ul) {
      flushParagraph();
      if (inOrderedList) {
        out.push("</ol>");
        inOrderedList = false;
      }
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${inline(ul[1])}</li>`);
      continue;
    }
    const ol = line.match(/^\s*\d+\.\s+(.*)$/);
    if (ol) {
      flushParagraph();
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      if (!inOrderedList) {
        out.push("<ol>");
        inOrderedList = true;
      }
      out.push(`<li>${inline(ol[1])}</li>`);
      continue;
    }
    paragraph.push(line.trim());
  }
  flushParagraph();
  closeLists();
  return out.join("\n");
}
