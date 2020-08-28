const fs = require("fs");

const mapSizes = (path) => {
    let thePath = path;
    console.log(path);
    const rdData = fs.readdirSync(path, { withFileTypes: true });
    console.log(rdData);
    var mappedObj = {};
    for (let i = 0; i < rdData.length; i++) {
        console.log(rdData[i]);
        if (rdData[i].isFile()) {
            console.log("it's a file: ", rdData[i]);
            const stat = fs.statSync(path + "/" + rdData[i].name);
            console.log("stat.size", stat.size);
            mappedObj[rdData[i].name] = stat.size;
        } else if (rdData[i].isDirectory()) {
            // console.log(
            //     "recursion with: " + thePath + "/" + rdData[i].name: );
            newPath = thePath;
            mappedObj[rdData[i].name] = mapSizes(
                newPath + "/" + rdData[i].name
            );
        }
    }
    //console.log(mappedObj);
    return mappedObj;
};

mapSizes(__dirname);

const stringsAttached = JSON.stringify(mapSizes(__dirname), null, 4);
fs.writeFileSync(__dirname + "/mappedSizs.json", stringsAttached);
