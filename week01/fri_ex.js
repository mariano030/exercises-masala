// exercise 1

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

function Square(size) {
    this.width = size;
    this.height = size;
}

var getAreaFn = function () {
    return this.width * this.height;
};

Object.prototype.getArea = getAreaFn;

// var square = new Square(2);

// var rectangle = new Rectangle(3,2);

var square = new Square(4);

var rect = new Rectangle(4, 5);

console.log("rect:", rect.getArea()); //20);

console.log("squa:", square.getArea()); //16

// exercise 2

//var myString = "Hallo. Das hier ist Dein String!";

var myString = "fuenf";

function invertCase(str) {
    var letterArr = str.split("");
    var letterArrOrg = str.split("");
    var letterArrRtn = [];
    var inverted = [];
    var invertedString = "";
    //console.log("letterArr", letterArr);
    for (var i = 0; i < letterArr.length; i++) {
        //console.log(i);
        if (letterArr[i].toUpperCase() == letterArrOrg[i]) {
            //console.log(letterArr[i], i, "was already upper");
            inverted.push(letterArrOrg[i].toLowerCase());
        } else if (letterArr[i].toLowerCase() == letterArrOrg[i]) {
            inverted.push(letterArrOrg[i].toUpperCase());
        }
    }
    //console.log(inverted);
    for (var o = 0; o < inverted.length; o++) {
        invertedString = invertedString.concat(inverted[o]);
    }
    return invertedString;
}

console.log(invertCase(myString));

// bonus exercise
// not working yet...
/*
function Countdown(sec) {
    (this.seconds = sec),
        (this.start = function (sec) {
            if (sec > 0) {
                console.log("in if");
                var secLeft = sec;
                for (var i = 1; i <= sec; i++) {
                    console.log("in for");
                    secLeft = sec - i;
                    logRemaining = function () {
                        console.log(secLeft);
                    };
                    console.log("loglog: ", secLeft);
                    setTimeout(logRemaining, 1);
                }
            }
        },
};

testing = new Countdown(5);
console.log(testing.start());
*/
