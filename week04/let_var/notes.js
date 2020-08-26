var a = 1;
let b = 2;
// const c = 3;

///// LET  ////

// var declares variables in functio nscope
// let declares variables in block scope

let; // is blocks cope / block = {}
var; //is function scope

function fn() {
    if (true) {
        var a = 1; // var
    }

    function fn2() {
        console.log(a); // is available, because function scope
    }
    fn2();
}

function fn() {
    if (true) {
        let a = 1; // let
    }

    function fn2() {
        console.log(a); // is NOT available, because block scope
    }
    fn2();
}


for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)       // logs 5 a couple of times
    }, 500)                  // is already 5 once setTimeout executes
}

for (let i = 0; i < 3; i++) {
    setTimeout(function () {  // logs 0 1 2 3 4 
        console.log(i);
    }, 500);
}

////////// CONST ////////
// has to be declared and assigned at the SAME TIME
const a = 1;
a = 2; //<---- does NOT work 

const a = 1;
const a = 2; // does not work

const input = $('input');

// const protects the variable
// variable can be mutated e.g. by slice() push() and the likes
// top level can not be changed

/////////////////// TEMPLATE STRINGS /////////////////  
let str = `Masala <3     

    How is everyone?
        Happy wednesday!`;
        
console.log(str);  // the backtick aka acent grave
// Masala <3  
// 
//     How is everyone?
//         Happy wednesday!



var rgb = [100, 3, 87];
var backgroundColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";

let backgroundColor = `rgb(${rgb[0]},${rgb[1]},{rgb[2]})`; // backrick


///////// arrow functions ////////

function fn(str) {
    return str.toUpperCase() + "!!!!!";
}

const fn = str => {             // only one argument does not need (argument)
    return `${str.toUpperCase()}!!!!!!;`
}

const fn = () => {
    return "Hello";         // return is needed because of {}
}

const sayHello = () => "hello"; //returns "Hello" - does not need the word return


const fn = (str, argument2) => {
    return;
}

var obj = {
    name: "Andrea",
    sayHello: function () {
        console.log("name before setimeout", this.name);
        setTimeout(function () {
            console.log("Hello, my name is ", this.name); // this refers to object at time of execution 
        },1000)
    }
};

console.log(obj.sayHello);
// name before settimeout Andrea
// Hello, my name is undefined
var obj = {
    name: "Andrea",
    sayHello: function () {
        console.log("name before setimeout", this.name);
        setTimeout(() => {
            console.log("Hello, my name is ", this.name); // this will always refer to the obj - because arrow functions 
        },1000)
    }
};

console.log(obj.sayHello);

/////////////////// DESTRUCTURING /////////////////

////// ARRAYS ////

let arr = [10, 20, 30];

let a = arr[0];     // classic example
let b = arr[1];


let [a,b] = arr;   // destrucures arr into a & b just like in the classic example
let [nameNewVar1, nameNewVar2] = arr;

let [a,, c] = arr; // skips the 2nd element of arr - arr[1]  "I had the first and the third, rehearse, that's my word"

let obj = {
    first: "andrea",
    last: "arias",
    age: 100
};

let first = obj.first;   // old-school
let last = obj.last;

let {first,last} = obj;  // mega hip  varialbe name is object.property name

let {first:firstName} = obj; // destructured (extruded) first property from obj and created a new variable name firstName

let obj = {
    first: "andrea",
    last: "arias",
    age: 100,
    address: {
        street: "Mariendorfer Damm"
    }
};

let {address: {street: straße}};  // deconstructing address.street into an new variable "straße"

///// DESTRUCTURING WITH FUNCTION /////

let obj = {
    first: "andrea",
    last: "arias"
};

const logName = function ({first: firstName, last}) {  // destrucuring and renaming the obj you hand over to the fn()
    console.log(firstName + "" + last)
}


logName(obj);

/////// DEFAULT VALUES ///////

function add(a,b) {
    return a + b;
}

console.log(add(5));   // 5 + undefined is NaN


function add(a,b) {
    if (typeof b == "undefined") {
        b = 0;
    }
    return a + b;
}

console.log(add(5));   // returns 5


function add(a,b=0) {   // b = 0 only if b is falsey (e.g. not defined)  HIP HIP HIPP
    return a + b;
}

console.log(add(5));    //returns 5


/////// SPREAD OPERATOR /////////


//// array ////

let arr = [10,20, 30];

// copy an array
let newArr = [...arr]  // copies arr into newArr
console.log(newArr);  // returns the COPY


let newArr = [1,2, ...arr, 70,80];
console.log(newArr); // returns  [1,2,10,20,30,70,80]

let obj = {
    name: "andrea",
    last: "ariass"
};

let newObj = { ...obj} // copy the objects content into a newObject

let newObj = { ...obj, age: 100} // copy the object's content into an newObject and add a new property to the newObj

let newObj = {...obj, name: "layla"}; // copy obj's properties into newObj and change the name property to "layla"





/// ES 6

