const BASE_URL = "https://mi-proyecto-seo-omega.vercel.app";

export default async function handler(req, res) {
  const dynamicPages = await getDynamicPages();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${dynamicPages.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}

async function getDynamicPages() {
  return ["/", "/blog", "/contacto"];
}
