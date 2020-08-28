/// include modules I need:
const url = require("url"); // require core module "url" - no path needed as it is a core module, node knows where to find it
const queryString = require("querystring"); // another core module

let myUrl;

if (!process.argv[2]) {
    // alternatively I could have also used if (process.argv.length < 2)
    console.log("your arguments are weak, not present to be precise");
} else {
    myUrl = process.argv[2];
    //console.log(myUrl);
    //console.log(url.parse(myUrl));
    let urlParsed = url.parse(myUrl);
    //console.log(urlParsed);
    console.log("The protocol is", urlParsed.protocol);
    console.log("The host is", urlParsed.host);
    console.log("The hostname is", urlParsed.hostname);
    console.log("The port is", urlParsed.port);
    console.log("The pathname is", urlParsed.pathname);
    if (urlParsed.query) {
        let twoQuerys = urlParsed.query.split("&");
        console.log("The value of the a parameter is", twoQuerys[0].slice(2));
        console.log("The value of the b parameter is", twoQuerys[1].slice(2));
    } else {
        console.log("The query is", urlParsed.query);
    }
}
