const http = require("http");
const fs = require("fs");
const path = require("path");

const headerList = require("./headerList.json");

const folderList = require("./folder_list.js");
console.log(headerList);

//const makeFun = require("/example.js"); // include own modules

function doSomethingLater(cb) {
    const data = "This is some data";
    setTimeout(function () {
        cb(data);
    }, 1000);
}

http.createServer((req, res) => {
    // console.log(__dirname, "/panes/panes.css");
    // const readStream = fs.createReadStream(__dirname + "/projects");
    // readStream.pipe(res);

    // exclude stuff to focus on the real if else
    if (req.method !== "GET") {
        res.statusCode = 405;
        return res.end();
    }
    console.log("get method!");
    const filePath = __dirname + "/projects" + req.url;
    console.log("filePath", filePath);

    console.log("users/pete/../../passwords");
    console.log(
        "normalized path!!",
        path.normalize("users/pete/../../passwords")
    );

    if (!filePath.startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        console.log("intruder!!!!");
        return res.end(); // use return here so the rest will not be excuted
    }

    console.log("time to serve some files");

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("fs.stat error", err);
            console.log("res.statusCode = 404;");
            res.statusCode = 404;
            return res.end(); // if you do not return res.end() here the if(stats.isFile()) block will run and throw an error (stats undefined)
        }
        console.log(stats);

        if (stats.isFile()) {
            console.log("it's a file, dumbass");
            console.log(" the extension", path.extname(filePath));
            console.log([path.extname(filePath)]);
            console.log(
                "the supposed header is ",
                headerList[path.extname(filePath)]
            );
            res.setHeader("content-type", headerList[path.extname(filePath)]);
            const readStreamFile = fs.createReadStream(filePath);
            readStreamFile.pipe(res);
        } else {
            if (req.url === "/") {
                // inside parent folder
                // res.write("<html>");
                // res.write("<body>");
                // res.write("<h1>THE PROJECT LIST:</h1>");
                // res.write("<ul>");

                folderList(res);
            } else if (req.url.endsWith("/")) {
                console.log("directory discovered");
                console.log("###req.url", req.url);
                const readStreamHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                readStreamHtml.pipe(res); //
            } else {
                // redirect cause no / in url
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                res.end();
            }
        }
    });
}).listen(8080, () => console.log("my portfolio is running"));

// try using readDir instead of readDirSync

/// fun.js
