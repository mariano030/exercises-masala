const http = require("http");
const fs = require("fs");
const path = require("path");

//const makeFun = require("/example.js"); // include own modules

http.createServer((req, res) => {
    // console.log(__dirname, "/panes/panes.css");
    // const readStream = fs.createReadStream(__dirname + "/projects");
    // readStream.pipe(res);

    // exclude stuff to focus on the real if else
    if (req.method !== "GET") {
        res.statusCode = 405;
        return res.end();
    }
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
            console.log(err);
            res.statusCode = 404;
            return res.end();
        }
        console.log(stats);

        if (stats.isFile()) {
            console.log("it's a file, dumbass");
            console.log(" the extension", path.extname(filePath));
            // const readStreamHtml = fs.createReadStream(filePath);
            // readStreamHtml.pipe(res);
        } else {
            if (req.url.endsWith("/")) {
                console.log("directory discovered");
                const readStreamHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                readStreamHtml.pipe(res);
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
