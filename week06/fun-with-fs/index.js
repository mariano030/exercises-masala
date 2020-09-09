//// fun-with-fs exercises

// this some BS i think - start over please
const fs = require("fs");
//const { readdir, stat } = require("fs").promises;

let { readdir, stat } = require("fs");
const { promisify } = require("util");
const { resolve } = require("path");

readdir = promisify(readdir);
stat = promisify(stat);

function logSizes(path) { 
    readdir(path, { withFileTypes: true }, (err, data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].isFile()) {
                    //console.log("##FOUND a file", data[i]);
                    stat(path + "/" + data[i].name, (err, stat) => {
                        if (err) {
                            return console.log("error - fs.stat - error", err);
                        }
                        console.log(
                            path + "/" + data[i].name + ": " + stat.size
                        );
                    });
                } else if (data[i].isDirectory()) {
                    var newPath = `${path}/${data[i].name}`;
                    //console.log("data[i].name", data[i]);
                    //console.log(">>callback with ", newPath);
                    logSizes(newPath);
                }
            }
        }.then(content));
    });
    });
}

const fileIndex = [];

function logDirectory(path) {
    readdir( path, {withFileTypes: true}, (err, data)) => {
         for (let i = 0; i < data.length; i++) {
                if (data[i].isFile()) {
                    //console.log("##FOUND a file", data[i]);
                    fileIndex.push(data[i])
                    });
                } else if (data[i].isDirectory()) {
                    var newPath = `${path}/${data[i].name}`;
                    //console.log("data[i].name", data[i]);
                    //console.log(">>callback with ", newPath);
                    logSizes(newPath);
                }
    }
}

// create an array for promise all


const myPromises = [];

function logFiles(path) = {
    readdir( path, {withFIleTypes: true}, (err, data)).then(
        for (let i = 0; i < data.length, i++) {
            if (data[i].isFile()) {
                // file found add
                // push
                myPromises.push(stat(`${path}/${data[i].name}`).then((data)=>{
                    console.log(`${path}/${data[i].name} ${data.size}`);
                    ).catch((err) => {
                        console.log("there has been an error", err)
                    });
                })
            } else if (data[i].isDirecory()) {
                // we have to go deeper
                let newPath = `${path}/${data[i].name}`
                logFiles(newPath);
            }
        }
    }

}


logFiles(__dirname).then((promises))



// readdir ().then( 
//     // check for files
//         // add files to list
//         // add promises to list
//     // find folder - change path - recursion
//     // find no more folder // no more file
//         // send promises to Promisies.all
// )











