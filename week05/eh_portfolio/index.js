/// server server

const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

const hbSet = handlebars.create({
    helpers: {
        styleCurrent(path, selectedProject) {
            console.log(path, selectedProject);
            console.log("styleCurrent running");
            if (selectedProject && path && selectedProject.path === path) {
                console.log("found it");
                return "selected";
            }
        },
    },
});

app.engine("handlebars", hbSet.engine);

// import dataset with projects info
const myProjects = require("./projects.json");

// initialize template engine:
//app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use((req, res, next) => {
    console.log("GET request for: ", req.url);
    next();
});

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

app.get("/projects/:project", (req, res) => {
    console.log("i'm /projects/:project and I am getting a request");
    const { project } = req.params;
    console.log("project form url", project);
    const selectedProject = myProjects.find((item) => item.path === project);
    if (!selectedProject) {
        console.log(`404 - No such project.`);
        res.statusCode = 404;
        res.send(`404 - 
            There is no such project. 
            Might work on it the future though...`);
    } else {
        console.log("is selectedProject", selectedProject);
        res.render("project_description", {
            layout: "project_info",
            myProjects,
            selectedProject,
        });
    }
});
console.log("test");

app.listen(5555, () => console.log("### server is listening ###"));

/// create partial for project
// title screenshot subline? description button

// partial button

// create route for projects
// - account for project not found

// add decription to ojbect        DONE

//
