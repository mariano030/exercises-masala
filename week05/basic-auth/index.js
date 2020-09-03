//////////////////////////////////////
///////// BASIC AUTH /////////////////
//////////////////////////////////////

const basicAuth = require("basic-auth");

const express = require("express");

const app = express();

////// MIDDLEWARE
////// IF we were to put the auth middleware AFTER the first app.get("/") the default root route would not be protected
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

app.use(auth);

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("secret", (req, res) => {
    res.send("welcome to the secrets");
});

app.listen(5555, console.log("listening"));
