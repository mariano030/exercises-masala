////////// MY FIRST NODE SERVER ///////////

const http = require("http");

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("error in the request: ", err));
    response.on("error", (err) => console.log("error in the response: ", err));

    console.log("HTTP request was made!");
    console.log("request.method: ", request.method);
    console.log("request.url: ", request.url);
    console.log("request.headers: ", request.headers);

    if (request.method === "GET") {
        if (request.url === "/private") {
            response.setHeader("Location", "/");
            response.statusCode = 302;
            response.end();
        } else if (request.url === "/about") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write("<h1>This is my about page!</h1>");
            response.end();
        } else if (request.url === "/members") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write("<h1>This is my members page!</h1>");
            response.end();
        } else {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write("<h1>Hi!</h1>");
            response.end();
        }
    } else if (request.method === "POST") {
        let body = "";

        request.on("data", (chunk) => (body += chunk));

        request.on("end", () => {
            console.log("body: ", body);
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write("<h1>You made a POST request!</h1>");
            response.end();
        });
    } else if (request.method === "PUT") {
        console.log("You just made a PUT request!");
    } else if (request.method === "HEAD") {
        console.log("You just made a HEAD request!");
    }
});

server.listen(8081, () => console.log("Server listening!"));

/// require "http" module
/// create server
/// handle errors
/// what kind of request???
/// what are they requesting??? URL??
/// awnser
/// listen to requests
