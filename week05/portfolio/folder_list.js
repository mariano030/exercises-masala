const fs = require("fs");

const Handlebars = require("Handlebars");
const { builtinModules } = require("module");

module.exports = function (res) {
    console.log("folder list running");
    fs.readdir(
        __dirname + "/projects",
        { withFileTypes: true },
        (err, data) => {
            if (err) {
                console.log(
                    "readdir has encountered a problem with linux",
                    err
                );
            }
            console.log("data from fs.readdir ", data);
            console.log(data.length, "folders (or other files) found");

            let projectsList = [];

            for (let i = 0; i < data.length; i++) {
                if (data[i].isFile()) {
                    //skipp file
                    console.log("skipping file...");
                } else {
                    console.log("pushing to projectsList");
                    console.log(data[i].name);
                    projectsList.push(data[i].name);
                }
            }
            console.log(projectsList);
            // hier jetzt mit res.write arbeiten - ggf erst den string builden und dann alles in einem BAM!
            //console.log("theFolderList", theFolderList);
            let myHtml = [
                `<html> 
                    <head>         
                        <title>Connect 4</title>
                        <link rel="css/stylesheet" href="style.css" />
                    </head>
                    <body>
                        <div class='center'>
                            <h2>My most impressive projects:<h2>`,
            ];
            for (let i = 0; i < projectsList.length; i++) {
                myHtml.push(
                    `<li><a href="./${projectsList[i]}">${projectsList[i]}</a></li>`
                );
            }
            myHtml.push("</div></body></html>");
            let resHtml = myHtml.join("");
            console.log(resHtml);
            res.setHeader("content-type", "text/html");
            res.end(resHtml);
            return;

            // if (
            //     fs.stat(__dirname + "/projects", (err, stats) => {
            //         if (err) {
            //             return console.log(
            //                 "fs.stat has encountered an error: ",
            //                 err
            //             );
            //         }
            //         if (stats.isFile()) {
            //             console.log("file found");
            //             return;
            //         }
            //         console.log("folder found");
            //         console.log("fs stat is ", stats);
            //     })
            // )
            //     console.log(data);
        }
    );
};

function doSomethingLater(cb) {
    const data = "This is some data"; // everything below will only be done after data is present
    setTimeout(function () {
        cb(data);
    }, 1000);
}
