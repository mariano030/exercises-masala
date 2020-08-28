const fs = require("fs");

// READFILE - asynchronous takes 2 arguments
// FYI all asynchronous methods are using callbacks to to do stuff AFTER the process is finished
// 1st arg - absolute path leading to the file I want to read
// 2nd arg - "utf-8" will translate buffer data into readable utf-8 text
// 3rd arg - callback (a function you pass as an argument to another fn)
// callback function runs when the reading has been completed
fs.readFile(__dirname + "/test.js", "utf8", (err, data) => {
    if (err) {
        return console.log("err in readfile", err);
    } else {
        console.log("data:", data);
    }
});

console.log("hello");

console.log("readFileSync:");
// READSYNC -- it's SYNCHRONOUS version of readfile- no need for callback function
// have to store it in a variable if you want access to the file's content
const myFile = fs.readFileSync(__dirname + "/test.js", "utf8");
// use try catch for errors

// WRITE FILE - will overwrite existing files of same file name

// ASYNC version of write file

const message = "Broken glass everywhere, people pissin' on the station";

// takes 3 arguments
// 1st arg - absolute path to file that is to be written/created

fs.writeFile(__dirname + "masala.txt", message, (err) => {
    if (err) {
        console.log("err in writeFile");
        return; // do not continue
    }
    console.log("we wrote a file!! woohooo!");
});

obj = {
    name: "andrea",
    last: "arias",
    age: 100,
    hasDog: true,
};

// WRITE FILE SYNC - synchronous version
// js object needs to be stringyfied before writing it
// 1st arg - destination
// 2nd arg - data we want to write (obj in this case)
// within stringyfy arg - array of properties we want to be included into the file (in this case null = all)
// with stringyfy arg - 4 is used for indentation (save it in multiple lines)
const bla = fs.writeFileSync(
    __dirname + "/myNewFile.json",
    JSON.stringify(obj, null, 4)
);

//////////// READDIR ////////////

// is asynchronous - callback!

// returns an arry of objects - every singe item in the folder
// {withFileTypes: true} - it gives us access to methods that allows us to check wheather each item inside is a file or a directory
fs.readdir(__dirname, { withFileTypes: true }, (err, content) => {
    if (err) {
        return console.log("err in readdir:", err);
    }
    //consosle.log("content:", content);
    for (let i = 0; i < content.length; i++) {
        console.log(i);
        console.log("file?", content[i].isFile()); //ifFile() returns true for files
        console.log("dir?", content[i].isDirectory()); //ifDirectory() returns true for directories
    }
});

////////// READDIR SYNC /////////

// synchronouse - assign it to a variable!

const content = fs.readdirSync(__dirname, { withFileTypes: true });
console.log("content", content);

/////// STAT ///////

// we use fs stat

fs.stat(__dirname + "/test.js", (err, stat) => {
    if (err) {
        return console.log("err in stat:", err);
    }
    console.log(stat);
    // for file size use stat.size
    console.log("file size:", stat.size);
});

/////// STAT synchronous /////
const myDtat = fs.statSync(__dirname + "/test.js");
console.log(myStat);
