import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://freeinjurycalc.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

function generateSitemap() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const statesFilePath = path.join(process.cwd(), 'src', 'data', 'states.ts');
  const specialFilePath = path.join(process.cwd(), 'src', 'data', 'specialCalculators.ts');
  const blogFilePath = path.join(process.cwd(), 'src', 'data', 'blog.ts');

  // Parse state slugs using regex
  const statesFileContent = fs.readFileSync(statesFilePath, 'utf8');
  const stateMatches = [...statesFileContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
  const stateSlugs = [...new Set(stateMatches.map(m => m[1]))];

  // Parse special calculator slugs using regex
  const specialFileContent = fs.readFileSync(specialFilePath, 'utf8');
  const specialMatches = [...specialFileContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
  const specialSlugs = [...new Set(specialMatches.map(m => m[1]))];

  // Parse blog slugs using regex
  const blogFileContent = fs.readFileSync(blogFilePath, 'utf8');
  const blogMatches = [...blogFileContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
  const blogSlugs = [...new Set(blogMatches.map(m => m[1]))];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // 1. Homepage
  xml += `  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;

  // 2. Static pages
  const staticPages = ['blog', 'about-us', 'contact-us', 'privacy-policy', 'terms-conditions'];
  for (const page of staticPages) {
    xml += `  <url>
    <loc>${SITE_URL}/${page}/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>\n`;
  }

  // 3. US State pages
  for (const slug of stateSlugs) {
    if (['ontario', 'british-columbia', 'alberta'].includes(slug)) continue;
    xml += `  <url>
      <loc>${SITE_URL}/${slug}-car-accident-settlement-calculator/</loc>
      <lastmod>${CURRENT_DATE}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>\n`;
  }

  // 3.5 Canada pages
  xml += `  <url>
    <loc>${SITE_URL}/canada/ontario-car-accident-settlement-calculator/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  xml += `  <url>
    <loc>${SITE_URL}/canada/british-columbia-icbc-settlement-calculator/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  xml += `  <url>
    <loc>${SITE_URL}/canada/alberta-car-accident-settlement-calculator/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

  // 3.7 Florida Diminished Value Calculator
  xml += `  <url>
    <loc>${SITE_URL}/florida-diminished-value-calculator/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

  // 4. Special Calculator pages
  for (const slug of specialSlugs) {
    xml += `  <url>
    <loc>${SITE_URL}/${slug}/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  }

  // 5. Blog Posts
  for (const slug of blogSlugs) {
    xml += `  <url>
    <loc>${SITE_URL}/blog/${slug}/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
  }

  xml += '</urlset>\n';

  fs.writeFileSync(sitemapPath, xml, 'utf8');
  const totalUrls = 1 + staticPages.length + (stateSlugs.length - 3) + 3 + 1 + specialSlugs.length + blogSlugs.length;
  console.log(`Successfully generated sitemap.xml at ${sitemapPath} with ${totalUrls} URLs.`);
}

generateSitemap();
