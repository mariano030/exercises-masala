// npm nodemon index.js - start server
// npm install nodemon
// npm install express
// npm install cookie-parser

// npx nodemon index.js

// OR $ nodemon index.js when installed globally

const express = require("express");

const path = require("path");

const basicAuth = require("basic-auth");
//http.createServer
const app = express();
const cookieParser = require("cookie-parser");

/////////////////////////////////////
//////////// MIDDLEWARE /////////////
/////////////////////////////////////
// middleware app.use gives express whatever middleware you like
// urlencoded() is the middleware we added
// the order of middlware functions is important as they might build on each other
// with extended: false the use method can NOT handle arrays or other more fancy data types
app.use(
    express.urlencoded({
        extended: false,
    })
);
// this is a custom middleware that will execute on any express req
// this middleware is referncing express.urlencoded() which provides req.body (otherwise undefined)
app.use(function log(req, res, next) {
    console.log(req.method, req.url, req.body);
    next(); // every middleware function has to end with next();
}); // every middleware function has (at least) 3 arguments req, res & next

app.use(cookieParser()); // adds cookies element to req. object

/// if cookie requestedUrl is not present set it - if present redirect
//express.static() middleware serves all items in specified folder
//app.get(express.static("public")); // default first arg is root folder
app.use("/public", express.static("public")); // first argument is path to serve it on

app.use((req, res, next) => {
    console.log("req.url", req.url);
    console.log("req.cookies.cookies: ", req.cookies.cookies);
    if (!req.cookies.requestedUrl) {
        console.log("no req.url cookie present");
        console.log("setting cookie to ", req.url);
        res.cookie("requestedUrl", req.url);
    }
    if (req.cookies.cookies !== "accepted" && req.url !== "/cookies") {
        res.redirect("/cookies");
    } else {
        next(); //always has to be called at the end of middleware...
    }
});

// app.use((req, res, next) => {
//     console.log("req.BODY:", req.body, req.cookies);
//     next();
// });
// request object in body property - accept or declined req.body

//////////////////////////////////
////////// HTTP METHODS //////////
//////////////////////////////////
// get http method for the root path

//app.use(express.static(path.join(__dirname, "cookies")));

app.get("/cookies", (req, res) => {
    res.sendFile(__dirname + "/cookies.html");
    //res.sendFile(__dirname + "/cookies.css");
});

app.get("/", (req, res) => {
    console.log("are you the error?");
    // .send() is similar .end()
    // .send() checks and sets content-type header
    res.send("<h2>hello world</h2>");
});

app.use(express.static("projects"));

// handle the post http methods
// app.post("/", (req, res) => {
//     res.send("POSTED");
// });

app.get("/about", (req, res) => {
    console.log(__dirname + "/about.html");
    res.sendFile(__dirname + "/about.html");
});

// use colon syntax for variable requests
app.get("/about/:name", (req, res) => {
    res.cookie("name", req.params.name);
    console.log(req.params.name);
    res.send(`hello ${req.params.name}`); // access the colon path (name in this case)
});

app.get("/add-cute-animal", (req, res) => {
    res.send(`
        <form method="post">
            <input type="text" name="animal" />
            <input type="number" name="cutenessscore" />
            <button type="submit">Add cute animal </button>
        </form>
    `);
});

// app.post("/add-cute-animal", (req, res) => {
//     console.log(req.body);
//     console.log("posted");
//     res.send(
//         `posted animal ${req.body.animal} with the cuteness of ${req.body.cutenessscore}`
//     );
// });

app.post("/cookies", (req, res) => {
    console.log("app.post running");
    console.log("req.body.cookies", req.body.cookies);
    console.log("posted");
    res.cookie("cookies", req.body.cookies);
    //res.send(`you have ${req.body.cookies} the cookies`);
    console.log("req.body.requestedUrl", req.body.requestedUrl);

    res.redirect(req.cookies.requestedUrl);
});

app.get("/super-secret", (req, res) => {
    if (req.cookies.name === "luca") {
        res.send(`windows-logo ${req.cookies.name}`);
    } else {
        res.redirect("/about");
    }
});

// express has development mode (with debugging features)
// production mode will leak less info

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "discoduckkk" || creds.pass != "opensesame") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.get("/secret", (req, res) => {
    res.send("<h1> welcome to the secret lair</h1");
});

app.listen(5555, () => console.log(" ### express listening ### "));

// create middleware check cookie // check route

/// res.redirect(..)

// res.location(..)   // changes the location of the current request aka changes req.url

/// express static is used so the user can load .css and other files

// res.status(301).location(‘../cookie’);

// path.join() /// adds or removes un/neccessary slahes

/// first check in the cookies folder, everything - that way even users withouth cookies can load additional assets from the cookie folder

// <form method="POST"> per default an gleiches dir <form action="/different-folder" method="POST">
