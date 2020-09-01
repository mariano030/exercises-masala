////////// MY FIRST NODE SERVER ///////////

const http = require("http");

const fs = require("fs");

const stream = fs.ReadStream("requests.txt", "utf-8", (err) =>
    console.log("error on readstream", err)
);

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("error in the request: ", err));
    response.on("error", (err) => console.log("error in the response: ", err));

    console.log("HTTP request was made!");
    console.log("request.method: ", request.method);
    console.log("request.url: ", request.url);
    console.log("request.headers: ", request.headers);

    let logs = "";

    logs =
        Date.now() +
        "\t" +
        request.method +
        "\t" +
        request.url +
        "\t" +
        request.headers["user-agent"];
    console.log(logs);
    fs.appendFile("requests.txt", logs, (err) => {
        if (err) throw err;
        console.log("a log was written");
    });
    if (request.method === "GET" || request.method === "HEAD") {
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;
        console.log("first if GET || HEAD");
        console.log(request.url);
        if (request.method === "GET" && request.url === "/requests.txt") {
            console.log("they want the file!!!");
            response.setHeader("content-type", "text/plain");
            stream.on("data", function (chunk) {
                console.log("chunk received");
                console.log(chunk);
                response.pipe(chunk);
            });
        } else if (request.method === "GET") {
            console.log("GET request confirm - response.write");
            response.write(
                "<!doctype html><html><title>Hello World!</title><p>Hello World!</p></html>"
            );
        }
        response.end();

        // if (request.url === "/private") {
        //     response.setHeader("Location", "/");
        //     response.statusCode = 302;
        //     response.end();
        // } else if (request.url === "/about") {
        //     response.setHeader("content-type", "text/html");
        //     response.statusCode = 200;
        //     response.write("<h1>This is my about page!</h1>");
        //     response.end();
        // } else if (request.url === "/members") {
        //     response.setHeader("content-type", "text/html");
        //     response.statusCode = 200;
        //     response.write("<h1>This is my members page!</h1>");
        //     response.end();
        // } else {
        //     response.setHeader("content-type", "text/html");
        //     response.statusCode = 200;
        //     response.write("<h1>Hi!</h1>");
        //     response.end();
        // }
    } else if (request.method === "POST") {
        let body = "";

        request.on("data", (chunk) => (body += chunk));

        request.on("end", () => {
            console.log("body: ", body);
            response.setHeader("Location", "/");
            response.statusCode = 302;

            response.end();
        });
    } else {
        console.log("request.method not GET, HEAD or POST");
        response.statusCode = 405;
        response.end();
    }
});

// stream.on("readable", () => {
//     let chunk;
//     console.log("stream readable new data received");
//     //stream.
//     // while ((null !== chunk = stream.read())) {
//     //     console.log(`Read ${chunk.length} bytes of data...`);
//     // }
// });

server.listen(8081, () => console.log("Server listening!"));

/// require "http" module
/// create server
/// handle errors
/// what kind of request???
/// what are they requesting??? URL??
/// awnser
/// listen to requests
