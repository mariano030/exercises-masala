/// node server

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    // some magic here
    // also .listen can be chained on the create server as opposed to on http.listen()...
}).listen(8080, () => console.log("my portfolio is running"));

///// .startsWith("string")  - not safe for all browsers but fine in node! - returns true/false

///// .endsWith("string")  - not safe for all browsers but fine in node! - returns true/false

/// PETE uses rechart for his price charts - https://recharts.org/en-US/ ( it is built on react )

///
path.extname(filePath);

/////// CONECT TO OWN MODULE //////

// extension not needed
// require js file via file name
const makeFun = require("./example.js"); // include own modules, needs to be with ./ for current directory

// in module file: add to exports object
module.exports.makeFun = function makeFun() {
    console.log("fun fun fun");
};

// require .json possible for data sets...
