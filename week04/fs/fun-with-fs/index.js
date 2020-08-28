//// fun-with-fs exercises

const fs = require("fs");

function logSizes(path) {
    console.log(path);
    fs.readdir(path, { withFileTypes: true }, (err, data) => {
        if (err) {
            return console.log(
                "there has been an error with logSizes-readdir:",
                err
            );
        }
        //console.log("logging data", data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].isFile()) {
                //console.log("##FOUND a file", data[i]);
                fs.stat(path + "/" + data[i].name, (err, stat) => {
                    if (err) {
                        return console.log("error - fs.stat - error", err);
                    }
                    console.log(path + "/" + data[i].name + ": " + stat.size);
                });
            } else if (data[i].isDirectory()) {
                var newPath = `${path}/${data[i].name}`;
                //console.log("data[i].name", data[i]);
                //console.log(">>callback with ", newPath);
                logSizes(newPath);
            }
        }
        //console.log("guess i'm done, at least with looping");
    });
}

logSizes(__dirname);
