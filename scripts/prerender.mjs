import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.resolve(ROOT, "dist/public");

async function prerender() {
  console.log("\nPre-rendering static HTML…\n");

  const vite = await createServer({
    configFile: path.resolve(ROOT, "vite.config.ts"),
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "warn",
  });

  try {
    const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
    const { ROUTE_META } = await vite.ssrLoadModule("/src/routes.ts");
    const { BASE_URL } = await vite.ssrLoadModule("/src/config.ts");

    const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

    for (const route of ROUTE_META) {
      const appHtml = render(route.path);
      const canonical = `${BASE_URL}${route.path === "/" ? "" : route.path}`;
      const finalHtml = inject(template, appHtml, route, canonical);

      const outPath =
        route.path === "/"
          ? path.join(DIST, "index.html")
          : path.join(DIST, route.path, "index.html");

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, finalHtml);
      console.log(`  ✓ ${route.path}`);
    }

    console.log(`\n${ROUTE_META.length} Seiten pre-rendered.\n`);
  } finally {
    await vite.close();
  }
}

function inject(template, appHtml, route, canonical) {
  let html = template;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escHtml(route.title)}</title>`,
  );

  // Replace static meta tags with route-specific ones
  html = html.replace(/\s*<meta\s+name="description"[^>]*>/g, "");
  html = html.replace(/\s*<meta\s+property="og:title"[^>]*>/g, "");
  html = html.replace(/\s*<meta\s+property="og:description"[^>]*>/g, "");
  html = html.replace(/\s*<meta\s+property="og:url"[^>]*>/g, "");
  html = html.replace(/\s*<meta\s+name="twitter:title"[^>]*>/g, "");
  html = html.replace(/\s*<meta\s+name="twitter:description"[^>]*>/g, "");

  // Inject route-specific head tags
  const headTags = [
    `<meta name="description" content="${escAttr(route.description)}" />`,
    `<link rel="canonical" href="${escAttr(canonical)}" />`,
    `<meta property="og:title" content="${escAttr(route.title)}" />`,
    `<meta property="og:description" content="${escAttr(route.description)}" />`,
    `<meta property="og:url" content="${escAttr(canonical)}" />`,
    `<meta name="twitter:title" content="${escAttr(route.title)}" />`,
    `<meta name="twitter:description" content="${escAttr(route.description)}" />`,
  ].join("\n    ");

  html = html.replace("</head>", `    ${headTags}\n  </head>`);

  // Inject pre-rendered body
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  return html;
}

function escHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escAttr(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
