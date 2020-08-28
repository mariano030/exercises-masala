console.log("this is my first node file");
console.log("niiiice");

console.log("__dirname", __dirname);

console.log(__filename);

// process object?

// if you call your file index.js you can spice "node ."
// alias?

console.log("process.argv", process.argv);

const myUrl = process.argv[0];

console.log(url.parse(myUrl));

//let capitalizedCommandLineArgument = process.argv[2].toUpperCase; /// this seems to be wrong somehow

//console.log(capitalizedCommandLineArgument);

console.log("module.exports: ", module.exports);

// modules object - is for exposing information from otherwise closed modules to other parts/files/modules
// modules usally running in their own ifee

// const funStuff = require("./fun.js");

// console.log("funStuff", funStuff);

// funStuff.sayHello();
// funStuff.sayGoodbye();

// this is our module
const { sayHello, sayGoodbye } = require("./fun");

sayHello();
sayGoodbye();

// core module implementation --- https://nodejs.org/api/modules.html
const url = require("url"); // require core module "url" - no path needed as it is a core module, node knows where to find it

console.log("url", url);

console.log(url.parse("https:/spiced.space/masala?scroll=infinite"));

const queryString = require("querystring"); // another core module
//console.log("queryString.parse", queryString.parse((scroll = infinte)));

// 3rd party packages

const chalk = require("chalk");
const { setTimeout } = require("timers");

console.log(chalk.blue("Hello world!"));

// npm uninstall -g name of package

// syncronous vs asynchronous code
// how to deal with asynchronous code?

//  1st approach - event listeners && event emitters -

process.on("beforeExit", function () {
    // "beforeExit" will be executed right before the node code is done
    console.log("just about to exit the process");
});

console.log("writen below the before exit event emitter");

process.on("funcyChicken", function () {
    console.log("funky chicken!!");
});

process.emit("funkChicken");

////// 2nd approach
// we can use call back funciton to deal with asynchronous code ...

function getUser(callback) {
    // what??? not working!!!
    setTimeout(function () {
        callback({
            name: "pete",
            id: 33,
        });
    }, 2000);
}

//const myUserData = getUser();

getUser(function (myUserData) {
    console.log(myUserData);
});

// for in loop to loop through an object
// if no query sting do not loop  and  do not print out "the value of the x parameter"

// url & queryString
