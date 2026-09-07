const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("templates/index.html", "utf-8");
const about = fs.readFileSync("templates/about.html", "utf-8");
const hospitals = fs.readFileSync("templates/hospitals.html", "utf-8");
const services = fs.readFileSync("templates/services.html", "utf-8");
const contact = fs.readFileSync("templates/contact.html", "utf-8");
const hospitalsData = fs.readFileSync("hospital.json", "utf-8");
const css = fs.readFileSync("css/style.css", "utf-8");
const js = fs.readFileSync("js/script.js", "utf-8");

const server = http.createServer((req, res) => {

    // console.log(req);

    // res.write("Pulkit sir  ");
    // res.write("apko ");
    // res.write("or sabhi teachers ko ");

    console.log(req.url);

    if (req.url === "/" || req.url === "/home" || req.url === "/index.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(home);
    }

    else if (req.url === "/about" || req.url === "/about.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(about);
    }

    else if (req.url === "/hospitals" || req.url === "/hospitals.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(hospitals);
    }

    else if (req.url === "/services" || req.url === "/services.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(services);
    }
    else if (req.url === "/contact" || req.url === "/contact.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(contact);
    }
    else if (req.url === "/api/hospitals") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(hospitalsData);
    }
    else if (req.url === "/css/style.css") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        res.end(css);
    }
    else if (req.url === "/js/script.js") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/javascript");
        res.end(js);
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