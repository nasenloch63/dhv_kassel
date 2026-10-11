import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT || 3000);
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".json": "application/json", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".mp4": "video/mp4", ".ico": "image/x-icon", ".woff2": "font/woff2" };
if (!existsSync(resolve(root, "index.html"))) throw new Error("Run pnpm build before pnpm start.");
createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname); }
  catch { response.writeHead(400); response.end(); return; }
  let file = resolve(root, `.${pathname}`);
  if (file !== root && !file.startsWith(`${root}${sep}`)) { response.writeHead(403); response.end(); return; }
  if (existsSync(file) && statSync(file).isDirectory()) {
    if (!pathname.endsWith("/")) { response.writeHead(308, { Location: `${pathname}/` }); response.end(); return; }
    file = resolve(file, "index.html");
  }
  const found = existsSync(file) && statSync(file).isFile();
  if (!found) file = resolve(root, "404.html");
  response.writeHead(found ? 200 : 404, { "Content-Type": mime[extname(file)] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
  if (request.method === "HEAD") response.end();
  else createReadStream(file).pipe(response);
}).listen(port, "127.0.0.1", () => console.log(`DHV Kassel Demo: http://127.0.0.1:${port}`));
