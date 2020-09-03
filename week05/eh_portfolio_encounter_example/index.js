//// npm init -y
//// npm install express express-handlebars --save

// importing the function express
const express = require("express");

// handlebar folders HAVE TO BE in the folder root/views
const handlebars = require("express-handlebars");

// change viewsPath -> app.set(‘views’, ‘../template-html’)
// call express and assign it to a variable
const app = express();
const teachers = require("./data.json");

// initialize template engine, 2 arguments name and variable it's required with
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

// get.use() is always middleware! always takes a function
// using express.static to make files in projects available in the root folder
app.use(express.static("./projects"));

// express methods
// res.send() res.sendFile() res.redirect() res.json() & res.render() for templating engines

app.get("/", (req, res) => {
    console.log("get request in");
    res.render("home", {
        layout: "main",
        cohort: "Masala",
    }); // takes two arguments 1. template we want to send as string 2. (context) data obj that contains all the data needed for template
});

app.get("/about", (req, res) => {
    res.render(
        "about",

        {
            //about.handlebars
            //layout: null,
            emojis: ["a", "b", "c", "d", "e", "f"],
        }
    );
});

app.listen(5555, () => console.log(" ### server listening ### "));

// express.static() is going to serve the FIRST file it finds fyi
