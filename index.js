const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let pathName = "./" + req.url;

  fs.readFile(pathName, {}, (err, content) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(content);
  });
});

PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
