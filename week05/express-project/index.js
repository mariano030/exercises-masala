// npm nodemon index.js - start server
// npm install nodemon
// npm install express
// npm install cookie-parser
const express = require("express");

const basicAuth = require("basic-auth");
//http.createServer
const app = express();
const cookieParser = require("cookie-parser");

let requestedUrl;

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
}); // every middleware function has 3

app.use(cookieParser()); // adds cookies element to req. object

app.use((req, res, next) => {
    requestedUrl = req.url;
    console.log("requestedUrl", requestedUrl);
    if (req.cookies.cookies === "accepted") {
        console.log("req.url", req.url);
        console.log("cookies == accepted");
    } else if (req.cookies.cookies === "declined" && req.url !== "/cookies") {
        console.log("cookies declined - access denied ");
        res.send(`<p>We are sorry to let you know that you can not use this site without accepting cookies.</p> <br>
                    <a href="/cookies">Click here to change your cookie settings.`);
        return;
    } else {
        console.log("no cookie acceppted found");
        //console.log("setting cookie");
        // not here.... res.cookie("ok", "cookie-set");
        req.url = "/cookies";
        console.log("");
        //requestedUrl
        // requestedUrl = "/cookies";
    }
    next(); //always has to be called at the end of middleware...
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

//express.static() middleware serves all items in specified folder
//app.get(express.static("public")); // default first arg is root folder
app.use("/public", express.static("public")); // first argument is path to serve it on

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
    res.clearCookie("cookies");
    res.cookie("cookies", req.body.cookies);
    //res.send(`you have ${req.body.cookies} the cookies`);
    res.redirect(requestedUrl);
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
    if (!creds || creds.name != "discoduck" || creds.pass != "opensesame") {
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

app.listen(5555, () => console.log("express listening"));

// create middleware check cookie // check route
