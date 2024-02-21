const http = require("http");
const fs = require("fs");
const path = require("path");
const { ifError } = require("assert");

const server = http.createServer((req, res) => {
  let pathName = "." + req.url;
  if (pathName === "./") {
    pathName += "index.html";
  }
  console.log(pathName);

  fs.readFile(pathName, {}, (err, content) => {
    if (err) {
      fs.readFile("./404.html", {}, (err, content) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("page not found");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content);
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });

      res.end(content);
    }
  });
});

PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
