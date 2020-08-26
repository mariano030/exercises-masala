// ex 1
// function that takes infinte number of args and multiplies them - returns
(function () {
    function sum() {
        var theSum = 0;
        for (var i = arguments.length - 1; i >= 0; i--) {
            theSum = theSum + arguments[i];
        }
        return theSum;
    }

    sum(5, 10); //15

    sum(5, 10, 15); //30;

    sum(5, 10, 15, 100, 200); //330

    // ex 2 - waitAndRun

    function waitThenRun(arg) {
        setTimeout(arg, 1500);
    }

    waitThenRun(function () {
        console.log("Hello!");
        waitThenRun(function () {
            console.log("Goodbye!");
        }); // logs 'Goodbye!' 1.5 seconds later
    });

    // ex 3 - recursion

    function aMillion(num) {
        if (typeof num !== "number" || num <= 0 || Number.isNaN(num)) {
            num = "ERROR";
        } else if (num < 1000000) {
            num = num * 10;
            num = aMillion(num);
        }
        return num;
    }

    console.log(">>string");
    console.log(aMillion("stringy string"));
    console.log(">>>>NaN");
    console.log(aMillion("food" * 3));
    console.log(">>>>-3");
    console.log(aMillion(-3));
    console.log(">>>>20");
    console.log(aMillion(20));
    console.log(">>>>1000000");
    console.log(aMillion(1000000));

    // bonus exercise

    var getTotaler = function () {
        let sum = 0;
        return function (num) {
            sum = sum + num;
            return sum;
        };
    };

    var totaler = getTotaler();

    totaler(1); //1
    totaler(2); //3
    totaler(5); //8
})();
