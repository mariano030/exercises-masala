console.log("sanity check");

var board = document.getElementById("board");

var racers = document.getElementsByClassName("racer");
console.log("racers: ", racers);
var siren = document.getElementById("siren");
var sirenLeftOffset = 50;

var boostBtn = document.getElementById("boost-button");

var racingCarLeft = 0;
var motorBikeLeft = 0;
var policeCarLeft = 0;
var tractorLeft = 0;

console.log(Math.floor(Math.random() * 11));

function generateRandomNumber() {
    return Math.floor(Math.random() * 51);
}

function generateRandomRGBColourNumber() {
    return Math.floor(Math.random() * 256);
}

board.addEventListener("click", function () {
    console.log("what?");
    racingCarLeft += generateRandomNumber();
    motorBikeLeft += generateRandomNumber();
    policeCarLeft += generateRandomNumber();
    tractorLeft += generateRandomNumber();

    racers[0].style.left = racingCarLeft + "px";
    racers[1].style.left = motorBikeLeft + "px";
    racers[2].style.left = policeCarLeft + "px";
    siren.style.left = sirenLeftOffset + racers[2].style.left + "px";
    racers[3].style.left = tractorLeft + "px";
});

boostBtn.addEventListener("click", function (event) {
    event.stopPropagation(); //stop moving up the document object tree "bubbling up"
    racingCarLeft += 100;
    racers[0].style.left = racingCarLeft + "px";
});

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 66) {
        console.log("color change please");
        var r = generateRandomRGBColourNumber();
        var g = generateRandomRGBColourNumber();
        var b = generateRandomRGBColourNumber();
        var randomColor = "rgb(" + r + "," + g + "," b + ")";
        console.log(randomColor);
    }
});
function flicker() {
    siren.style.opacity = Math.floor(Math.random() * 50) + "%";
    requestAnimationFrame(flicker);
}

flicker();
