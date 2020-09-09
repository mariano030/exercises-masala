const fs = require("fs");

var stringsAttached = [];
var mappedObj = {};
var statMe = "";
var stat;

const mapSizes = (path) => {
    let thePath = path;
    console.log(path);

    fs.readdir(path, { withFileTypes: true }, (err, data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            if (data[i].isFile()) {
                console.log("it's a file: ", data[i]);
                statME = path + "/" + data[i].name;
                fs.statSync(path + "/" + data[i].name, (err, stat) => {
                    process.emit("stats");
                });
            } else if (data[i].isDirectory()) {
                // console.log(
                //     "recursion with: " + thePath + "/" + rdData[i].name: );
                newPath = thePath;
                mappedObj[data[i].name] = mapSizes(
                    newPath + "/" + data[i].name
                );
            }
        }
    });

    console.log(">>>>>mappedObj", mappedObj);
    //return mappedObj;
};

process.on("stats", () => {
    mappedObj[data[i].name] = stat.size;
    console.log(">>>mappedObj", mappedObj);
});

mapSizes(__dirname);

process.on("beforeExit", (mappedObj) => {
    console.log("mappedObj", mappedObj);
    stringsAttached = JSON.stringify(mappedObj, null, 4);
    console.log(stringsAttached);
    fs.writeFileSync(__dirname + "/3._mappedSizs_sync.json", stringsAttached);
});

// keeping track of a count
// count = 0 -
//when finised you decrement
