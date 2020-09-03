/// server server

const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

// import dataset with projects info
const myProjects = require("./projects.json");

// initialize template engine:
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));

app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("/ route");
    console.log("serving welcome template with projects");
    console.log(myProjects);
    // res.render("templatename", dataset-obj)
    res.render("welcome", {
        layout: "main",
        myProjects,
    });
});

app.listen(5555, console.log("### server is listening ###"));
