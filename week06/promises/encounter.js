
/////////// PROMIESES  

// the then() method will run after the .then() is in line - accepts a function as arg
// using promises instead for asynchronous fn()

const {double, first, third } = require("./promises");

console.log(first()) // Promise: 1st state <pending> / 2nd <resolved> / 3rd <rejected>
// console.logging functions let's you know if it is a promise

first().then(()=> {
    second().then({third();
    });
});



function first = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(1);
            resolve(1);
        }, 1000);
    });
};

// we promisify function that take time to execute

// promise code goes into the promise constructor new Promise (here) 
// you have to call resolve at some point in the function, otherwise .then() would not work

// double here is just an example function...
// the value of async function is automatically handed down to the then() function - chose your own name
double(10)
    .then(num => {
        double(num)
            .then(doubledNum => {
                double("askjdnaskjdnaskjdn")
                    .then(doubledDoubledNum => {
                        console.log("doubledDoubledNum", doubledDoubledNum);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    })
    .catch(err => {
        console.log(err);
    });
}) // function that doubles argument number - asynchronous

// syntax alternativ:   - if you return a promise you can call .then() on the original then

double(10).then(num => {
        return double(num);     // own scope
    })
    .then(doubledNum => {
        return double(doubleNum);       // another own scope
    })
    .then(doublesDoubledNum => {
        console.log(soubledDoubledNum);  // does not have access to num from first or doubleNum of first/2nd
    })
    .catch((err) => {                   // we only need one .catch needed here
        console.log(err)
    });


double("fsadfsd").then(num => {
    console.log("if double works, you'll see me")       // every promise has to have a .catch()
}).catch(err => {                                       // catch happens upon rejection
    console.log("there ha been an error", err)
});



// catch is missing on this example
function double = (n) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (isNaN(n)) {
                reject (new Error("not a number!")) // what you pass to reject is what will be passed to .catch
            } else {
                resolve(n*2); // what you pass to resolve is what will be passed to .then()
            }
        }, 1250);
    });
};


// how to promisify functions()
// only asynchronous functions

const fs = require("fs");

function myReaddir() {
    return new Promise((resolve, reject) => {
        fs.readdir(__dirname, { withFileTypes: true }, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        })
    })
}

// using promisified readdir
myReaddir(__dirname)
    .then(files => {
        console.log(files);
    })
    .catch(err => {
        console.log(err);
    })


    // method 2 - promisify - node only
    // this strategy does not work on every asynchronous function
    // this method onyl works on a asynchronous fn()s that take node style callbacks
    // any function that takes a callback and the 1st arg passed to callback is err
    // you can use method 2  - e.g. fs.dir

    // node module that helps there and there - has promisify as method
const {promisify} = require("util");  // can only be used in Node!!! - types is also a nice util method... just sayin'

const readdir = promisify(fs.readdir);


// promise all  - execute multiple promise functions - this is concurrency
Promise.all([
    double(10),
    double(542),
    double(32143)
    ]).then(nums => {    // then runs if all functions in Promise.all ran successfully
        console.log(num); // num is an array of values returned by the double function, dame order as exe
    }).catch(err => {
        console.log("err inPromise.all", err) // err is always the first error
    });

