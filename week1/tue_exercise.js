// excersise 1

function logType(arg) {
    if (typeof arg == "number") {
        if (isNaN(arg)) {
            console.log("not a number!");
        } else {
            console.log(typeof arg + "!");
        }
    } else if (typeof arg == "object") {
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
console.log("     exercise 2");

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var prop in a) {
    b[a[prop]] = prop;
}

console.log("now a");
console.log(a);
console.log("now b");
console.log(b);

// exercise 3
console.log("     exercise 3");

for (var i = 10; i >= 1; i--) {
    console.log(i);
}
