/// modules to require

const readline = require("readline");
const chalk = require("chalk");

const story = require("./story.json");

const {} = require("constants");

const story = {
    q: "How do you like working with node so far?",
    answers: {
        great: "Awesome, have a nice time",
        no: {
            q: "why not?",
            answer: {
                no: "ok",
            },
        },
    },
};

const rl = readline.createInterface({
    input: process.stdin, // standard input stream = console
    output: process.stdout, // standard output stream = also console
});

// recursion

function ask(question) {
    rl.question(story.q, (userAwnser) => {
        if (question.answer[userAwnser] === undefined) {
            ask();
        } else {
            console.log(question.answer[userAwnser]);
            rl.close();
        }
    });
}

ask(story);

//rl.question("How do you like wokring with node so far?", function (awnser) {});

//  you  can  use the datatype to find out if it is a leaf property (a string) or an object ( more questions )

// implementedrl.close();
