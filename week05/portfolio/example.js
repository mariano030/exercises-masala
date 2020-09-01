// intro to node

function makeExample() {
    console.log("Example example example");
}
module.exports.makeExample = makeExample;

// option 2
module.exports.makeFun = function makeFun() {
    console.log("fun fun fun");
};
