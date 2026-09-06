const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {

    // console.log(req);

    // res.write("Pulkit sir  ");
    // res.write("apko ");
    // res.write("or sabhi teachers ko ");

    console.log(req.url);

    if (req.url === "/" || req.url === "/home") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(homePage);
    }

    else if (req.url === "/about") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("This is about page");
    }

    else if (req.url === "/contact") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("This is contact page");
    }

    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Page not found");
    }
});

server.listen(8000, () => {
    console.log("Server running on port 8000");
});