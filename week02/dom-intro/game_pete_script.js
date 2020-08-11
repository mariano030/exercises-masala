console.log("Sanity check :)");

var board = document.getElementById("board");
var racers = document.getElementsByClassName("racer");
var boostBtn = document.getElementById("boost-button");
console.log("racers: ", racers);

var racingCarLeft = 0;
var motorBikeLeft = 0;
var policeCarLeft = 0;
var tractorLeft = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 51);
}

function generateRandomRGBColourNumber() {
    return Math.floor(Math.random() * 256);
}

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 66) {
        console.log("change colour now!");
        var r = generateRandomRGBColourNumber();
        var g = generateRandomRGBColourNumber();
        var b = generateRandomRGBColourNumber();
        // console.log('r, g, b: ',r, g, b);
        // rgb(50, 122, 245)
        var randomColour = "rgb(" + r + "," + g + "," + b + ")";
        console.log("randomColour: ", randomColour);
        board.style.backgroundColor = randomColour;
    }
});

boostBtn.addEventListener("click", function (event) {
    // stop propagation will stop the bubbling from happening
    event.stopPropagation();
    racingCarLeft += 100;
    racers[0].style.left = racingCarLeft + "px";
});

document.addEventListener("click", function () {
    console.log("Clicked on board");
    racingCarLeft += generateRandomNumber();
    motorBikeLeft += generateRandomNumber();
    policeCarLeft += generateRandomNumber();
    tractorLeft += generateRandomNumber();
    console.log("racingCarLeft: ", racingCarLeft);
    racers[0].style.left = racingCarLeft + "px";
    racers[1].style.left = motorBikeLeft + "px";
    racers[2].style.left = policeCarLeft + "px";
    racers[3].style.left = tractorLeft + "px";
});
