// excersise 1

function logType(arg) {
    if (typeof arg == "number") {
        // differenciate between cases
        if (isNaN(arg)) {
            console.log("not a number!");
        } else {
            console.log(typeof arg + "!");
        }
    } else if (typeof arg == "object") {
        // differnciate between cases
        if (arg === null) {
            console.log("null!");
        } else if (Array.isArray(arg)) {
            console.log("array!");
        } else {
            console.log(typeof arg + "!");
        }
    } else {
        console.log(typeof arg + "!");
    }
}

console.log(">>undefined");
logType(undefined);
console.log(">>null");
logType(null);
console.log(">>number");
logType(23);
console.log(">>NaN");
logType("Pizza" / 4);
console.log(">>String");
logType("Hi");
console.log(">>Boolean");
logType(true);
console.log(">>BigInt");
logType(2n);
console.log(">>function");
logType(function () {});
console.log(">>object");
logType({});
console.log(">>array");
logType([]);

//exercise 2
/*
Then create a new empty object b and use a for..in loop to iterate over all of a's properties. 
Give b properties whose names are the values from a and whose values are the property names from a. 
The result should be an object that looks like this:
*/
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var prop in a) {
    // var prop is declaring a variable
    b[a[prop]] = prop;
    //console.log(a[prop]); // gives me all the values of the props of my object
}

console.log("now a");
console.log(a);
console.log("now b");
console.log(b);

// exercise 3

for (var i = 10; i >= 1; i--) {
    console.log(i);
}
