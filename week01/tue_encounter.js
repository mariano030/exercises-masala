//undefined
var n;
console.log(n); // undefined because n was never assigned a value

//null
var myNum = null; // undefined number

//boolean - from George Boole
var myVar = true;
var myOtherVar = false;

//number
var myOtherNum = 100.3;

//string
var str = "";

// symbol - new in ES 2015 we won't cover them for now

// BigInt - for really, really, REALLY numbers - n after the number sygnifies BigInt
var myBigInt = 2n;
console.log(myBigInt);

// object! -curly brackets means it's an object
var obj = {};

var arr = []; // is an arry (technically an object)

// functions are technically an object aswell
function myFn() {
    // functions are objects too
    // not a relevant fact you, just fyi
}

// the typeof operator
// tells us the data type of a variable - wth some exceptions
var num = 100;
typeof num;
console.log(typeof num);

var str = "yo";
console.log(typeof str);

// exceptions!
// 1.
function fn() {}

console.log(typeof myFN); // is letting us know this is a function, even though it is technically an object

// 2nd exception - array!
var arr = [];
console.log(typeof arr); //prints OBJECT ;(
// use the function .isArray()

console.log(Array.isArray(arr));

//3. null!? typeof does not return "null"
var myNullVar = null;
console.log(myNullVar === null); // this is how you find out

// NaN is returned if you try to multiply a number with a string
var myNonsensicalMath = 100 * "pizza"; // not allowed to multiply a number with a string - returns NaN
typeof myNonsensicalMath; //returns NUMBER even though it is actually: NaN NotANumber
//use instead of typeof - function isNaN

console.log(isNaN(myNonsensicalMath)); // returns true is NaN

//Truthiness and Falsiness

var myBool = true;
if (myBool) {
    // code here will run, because myBool is true
}

var myFalseBool = false;
if (myFalseBool) {
    // code here will never run! myFalseBool is faaaaaaaaalse
}
// condition for if is not true or false BUT truthy or falsy

//falsey values!
// null, undefined, 0, NaN, "" -> these are all falsey

//truthy values!
// any string thatÄs not empty, objects, array, functions, numbers other than 0

var arr = [];
if (arr) {
    //code here will run!
}

// CONTROL FLOW
var myBool = true;
!myBool; // will return false
!!myBool; // will return true again
// ! is the logical NOT operator converts truthy to false and falsey to true
// it's a way to force a variable to return a boolean

var a = true && 100; // if first part is true or truthy second one part will be set
var a = "yoyo" && 100; // returns 100 because "yoyo" is truthy
var a = "" && 100; // will not assign 100 because "" is falsey

// the OR operator
// will only look at the righthand side if the lefthand side is false
var a = true || 100; //returns true not 100
// in if statements only one of the sides must be true/truthy for it to excecute (as opposed to the && operator where BOTH need to be true/thy obvs)
if (false || 100) {
    //this runs because one of the sides - 100 - is truthy
}

//comparison operators - will always return boolean
// == (equality) - only checks value NOT the data type

1 == 1; // true
1 == "1"; //true

// === (strict equality)
//is also checking the datatype
1 === 1; //true
1 === "1"; //nopies, not true! different data types

// <= less than or equel and >= greater than or equesl
4 < 5; //  true
4 > 5; // false

5 > 5; // false
5 >= 5; // true, obvs


// if 
if () {
    // everything in these curly brackets is called a block
} else if () {
    // another block
} else {
    // another block that will run only if if everything above is false or falsey.
}


// loops! 
// while - basically a little more complicated version of for
var i = 0;
while (i > 4) {
    //do something
    i++;
}
// for
// used for Arrays
for (var i = 0; i < 100; i++) {
    //do something
}
// for ... in 
// used for objects specifically

var obj = {
    a: 1,
    b: 2,
    c: 3
}

for (var prop in obj) { // var prop is declaring a variable
    console.log(prop); // gives me all the properties of my object! a, b, c
    console.log(obj[prop]); // gives me all the values of the props of my object
}





