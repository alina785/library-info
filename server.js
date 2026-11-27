const http = require("http");
const fs = require("fs");
const path = require("path");

const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript" };

http.createServer((req, res) => {
  const file = req.url === "/" ? "/index.html" : req.url;
  const full = path.join(__dirname, path.normalize(file));
  if (!full.startsWith(__dirname)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": types[path.extname(full)] || "text/plain" });
    res.end(data);
  });
}).listen(8000, () => console.log("Server: http://localhost:8000"));
