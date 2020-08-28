function sayHello() {
    console.log("Hello from the other file!");
}

function sayGoodbye() {
    console.log("Goodbye everyone!");
}

function anotherFunction() {
    console.log("example");
}

//console.log("before", module.exports);
module.exports.sayHello = sayHello; // no () ???! tf!    // assigning sayHello to the module.exports object
module.exports.sayGoodbye = sayGoodbye; // no () ???! tf!
//console.log("after", module.exports);
exports.anotherFunction = anotherFunction; // shorter way withoug "module" object name

// exports can be used instead of module.exports to shorten everything... whoop whoop
console.log("exports", exports);
