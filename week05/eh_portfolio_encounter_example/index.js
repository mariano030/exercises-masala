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

const hbSet = handlebars.create({
    helpers: {
        globalHello() {
            return "Hello right back from the server!!"
        }
    }
})

app.get("/", (req, res) => {
    console.log("get request in");
    res.render("home", {
        layout: "main",
        cohort: "Masala",
        helpers: {
            shouting(text) {
                return (
                    text.toUpperCase().slice(3).replace("la", "kustaur") +
                    "!!!!!"
                );
            mathTime(num) {
                return num * Math.floor(Math.random(num));
            }
            },
        },
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

///////////////////// HANDLEBARS /////////////////
/// helpers - js functions - written in index.js can be called in the templates 
// these function are executed on the server and have no access to the DOM
/// views - template.handlebars
///     |__ layouts - headers and footers and stuff
///         |__ partiels - buttons forms small elements that will be used more than once


/// local helpers vs global helpers
/// local helpers are written in the object
/// global helpers are written in the main scope

// try and use helper for bonus exercise

// const projects = req.params.project
// const { project } = req.param

// .find
// const selectedProjects = projectList.find(item => item.name === project);
// 


// use helper for not having the current project in the project list  - change value of class - pass string
// try and do it with a helper not classes
// assign a string as the classes