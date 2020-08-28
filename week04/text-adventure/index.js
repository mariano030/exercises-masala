// ##   require the modules!

const readline = require("readline");
const chalk = require("chalk");

const story = require("./story.json"); // require the story object via a jason file!

// createInterface (form readline module documentation)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// You can either put your story here or load it from story.json like above
/* const story = {
  q: "Do you like working with node?",
  answers: {
    yes: "AWESOME, hava a nice time", // win
    no: {
      q: "Are you willing to do the exercises", 
      answers: {
        yes: "AWESOME, youve got this.", // win
        no: "Not graduating" // lose 
      },
    },
  },
};*/

// recursion
function ask(question) {
    rl.question(chalk.blue(question.q), function (userAnswer) {
        // User has provided unexpected answer.
        if (question.answers[userAnswer] === undefined) {
            ask(question);

            // User has provided expected answer, but there are no more questions to ask.
            // We've reached a leaf node in our story object.
            // Winning or losing condition reached.
        } else if (
            question.answers[userAnswer] &&
            typeof question.answers[userAnswer] === "string"
        ) {
            rl.write(question.answers[userAnswer]);
            rl.write("\n");
            rl.write(
                chalk.red(
                    "You have reached the end of the game, please support the developers and do not give this disk to your friends."
                )
            );

            rl.close(); // close readline stream, else program won't exit
            // User has provided expected answer and there are more questions to ask.
        } else {
            ask(question.answers[userAnswer]);
        }
    });
}

myString = "testing";
console.log("testing now");
console.log("typeof(myString): ", typeof myString);

//if (typeof(myString))

if (typeof myString === "string") {
    console.log("it's a sting");
} else if (typeof myString !== string) {
    console.log("it's not a string, it's a chopper baby");
}

ask(story);
