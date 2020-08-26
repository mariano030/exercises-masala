///////////// Symbol ///////////////

//primitive data types are compared by value

console.log(2 === 2); // true
console.log("a" == "a"); // true

const symbol = Symbol(); // new primitve data type
const symbol2 = Symbol("this is the description for this symbol");
console.log(symbol1 === symbol2); // false
// symbol function does not create same symbol twice - even though
console.log(symbol2); // symbol2("this is the description for this symbol")
// complex datatypes are compared by refence (new reference each time)
console.log([] == []); // false

const symbol3 = Symbol("symbol3");

const obj = {
    name: "luca",
    [symobl3]: 12, // square brackets make it the value of the symbol // you can not inject a symbol to an existing objext
};

console.log(JSON.stringify(obj)); // logs {"name":"Luca"} does not log the symbol

// well know symbols ???
console.log(Symbol.toStringTag()); // [object Object]  Symbol.toStringTag()

obj[Symbol.toStringTag] = "hi there";

console.log(obj.toString()); // object hi there

// meta programming
obj[Symbol("property symbol")] = "hi there";

////////////////////////////// GENERATORS ///////////////////

// generator fucntion
function* counter() {
    console.log("running til first yield")
    yield 1; // marks the end of first element
    console.log(2);
    yield 2;
    yield 3;
    console.log("there is more stuff here after last yield")
}

// iterators
const it = counter(); // generator functions will not run immediately even though ()

console.log(it);

var results = it.next();

console.log(results) // {value: 1, done: false}

var results = it.next();

console.log(results) // {value: 2, done: false}


var results = it.next();

console.log(results) // {value: 3, done: false}

var results = it.next();

console.log(results) // {undefined, done: false}

console.log(it.next()); // will run function TIL yield 1
console.log(it.next());


for (let result of it) {    // the INFAMOUS -   FOR ... OF   LOOP
    console.log(result);
}


// infinite iterator
function* idCreator() [
    var i = 0;

    while (true) {
        yield i++;
    }
]

const it = idCreator();


// another well known symbol
Symbol.iterator

const arr = [1,2,3];

for (let number of arr) {
    console.log(number;) // 1,2,3
}

arr[Symbol.iterator] = function* crazy () {
    yield "pizza"
};

for (let number of arr) {
    console.log(number;) // pizza
}