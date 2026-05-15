import type { APIRoute } from "astro";

/*
 * Sitemap. Hand-written rather than via @astrojs/sitemap because the
 * site is small enough that the dependency does not earn its weight.
 *
 * TODO before launch: replace SITE_ORIGIN with the production domain.
 * Same placeholder lives in Layout.astro; if either changes, both
 * should be updated together (or extracted to a shared constant).
 */

const SITE_ORIGIN = "https://downtown.example";

const pages = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, changefreq, priority }) =>
      `  <url>\n    <loc>${SITE_ORIGIN}${path}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
