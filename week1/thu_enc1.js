///// ARRAYS

var colours = ["red", "green", "blue", "orange", "purple"];

console.log("colours[0]", colours[0]);

console.log("colours.length", colours.length); //FYI .length also works for strings!!! whooph whoop

// log last item
console.log("colours[colours.length-1]", colours[colours.length - 1]);

// you can create arrays with a set number of items that are empty

// Mozilla Developers Documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// gives you also the "browser compatibility" table!

///////////////////
// array methods //
///////////////////

// push & pop change the LAST ELEMENT

// push        ADDS item to the end
colours.push("black");
console.log("colours:", colours);

// pop
var popped = colours.pop(); // will remove last item (item on the END) AND return it!
console.log("colours after popping:");

// shift and unshift change the FIRST ELEMENT

// UNshift removes  FIRST ELEMENT from an array
colours.unshift("tomato");
console.log("colours:", colours);

// shift adds ELEMENT as new FIRST ELEMENT

colours.shift("yellow");

// SPLICE   - array mutation bcs changes array CUTS-OUT

var removed = colours.splice(2, 2); // first arg index where to start (inclu) the splice, second arg is how many items to cut

console.log("colours after splice", removed);
console.log("colours:", colours);

// SLICE - getting stuff from the array without changing it

var myColours = colours.slice(2, 4); // first arg where to start, second arg is where to stop to slice -
console.log("myColours", myColours);
console.log("colours:", colours);

var coloursCopy = colours.slice();
console.log("coloursCopy", coloursCopy);

// FILTER
var colours2 = ["red", "green", "blue", "orange", "purple", "black"];

var longColours2 = colours.filter(function (colour) {
    // expects TRUE or FALSE
    return colour.length > 4;
});

console.log("longColours2:", longColours2);

/////////////////
//// OBJECTS ////
////////////////

var person = {
    name: "Pete", // property and  key is "name" here - "value" is Pete
    age: 36,
    address: {
        home: {
            house: 55,
            street: "Berliner Straße",
            city: "Berlin",
            country: "Germany",
        },
        work: {
            house: 12,
            street: "Leipziger Straße",
            city: "Berlin",
            country: "Germany",
        },
    },
    children: ["Marco", "Matilda"],
    "Embarrising Stuff": undefined, // keys should ideally be without spaces
}; // hast to be accesd with [] not with . notation

console.log("Person age wth sq brackets:", person["age"]); // with [] gotta put the key in quotes

// we normally access via . notation
console.log("Person age wth .", person.age);
// website EDABIT.COM - mini coding challanges!

person.age += 1;
person.city = "Rome";

console.log("'age' in person", "age" in person);

console.log(person.hasOwnProperty("age"));

delete person["Embarrising Stuff"];

console.log(person);

// how to access nested stuff:
console.log("");

person.children.push("Louisa"); // add to array within OBJ
console.log(person);

console.log(person.address.work.house); // "INCEPTION" we have to go deeper

//create objects
var obj = {};
var obj2 = Object();
var obj3 = new Object();

console.log(obj, obj2, obj3);

var interestingObj = Object.create(null);
console.log("interesting obj:", interestingObj);

// more in the notes... on spiced.space

var arr = [1, 2, 3, 4, 5, 6];

// to loop through arrays, we generally use a for loop
for (var i = 0; i < arr.length; i++) {
    console.log("performed for every array item");
}

// how to loop through an object
for (var key in person) {
    //key is just a variable name i can choose
    console.log("key", key);
    // if i want the values:
    console.log("person[key]", person[key]);
    // does not work with . notation !! console.log("person.key", person.key);
}
