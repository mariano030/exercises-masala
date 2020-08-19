console.log("sane");

(function () {
    // exercise 1
    console.log("iife running");

    var textArea = $("textarea");
    var button = $("#button");

    var msg;

    button.on("click", function () {
        console.log("you clicked the button, be proud!");
        try {
            JSON.parse(textArea.val());
            window.alert("this is some prime JSON!");
        } catch {
            window.alert(
                "i think you will have to take a close look, not valid JSON."
            );
        }
    });

    // exercise 2

    var requestedNum;
    var germanNumbers = [
        "eins",
        "zwei",
        "drei",
        "vier",
        "fünf",
        "sechs",
        "sieben",
        "acht",
        "neun",
        "zehn",
    ];

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }

    function translateNumberToGerman(number) {
        try {
            requestedNum = askForNumber(number);
            window.alert(germanNumbers[requestedNum - 1]);
            //console.log()
        } catch {
            window.alert("This is not a number...");
            //console.log(error);
            translateNumberToGerman();
        } finally {
            window.alert("In any case a beatiful language!");
        }
    }
    $("#numbers").on("click", function () {
        translateNumberToGerman();
    });
})();
