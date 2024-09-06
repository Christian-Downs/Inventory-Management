const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');
const fs = require('fs');

const siteUrl = 'https://www.memorablenights.vip'; // Replace with your actual site URL

// Read your dynamic content from the JSON file
const websiteData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', '../assets/jsons/website.json')));

// Static routes in your app
const staticRoutes = [
  '/Home',
  '/book',
  '/price',
];

// Function to generate dynamic theme routes
const dynamicThemeRoutes = Object.keys(websiteData.themes).map(theme => `/theme/${theme.replace(/\s+/g, '%20')}`);

// Combine static routes with dynamic routes
const allRoutes = [...staticRoutes, ...dynamicThemeRoutes];

function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: siteUrl });

  // Create the sitemap.xml file in the public directory
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);

  // Add all routes (static + dynamic) to the sitemap
  allRoutes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'daily', priority: 0.7 });
  });

  // End the sitemap stream
  sitemap.end();

  // Convert the sitemap stream to a promise and write to file
  streamToPromise(sitemap)
    .then(data => writeStream.write(data.toString()))
    .catch(err => {
      console.error('Error generating sitemap:', err);
    });
}

// Generate robots.txt
function createRobotsTxt() {
  const robotsContent = `
    User-agent: *
    Allow: /
    Sitemap: ${siteUrl}/sitemap.xml
  `;

  // Write robots.txt to public directory
  fs.writeFileSync(path.join(__dirname, 'public', 'robots.txt'), robotsContent);
}

// Run sitemap and robots generation
generateSitemap();
createRobotsTxt();

