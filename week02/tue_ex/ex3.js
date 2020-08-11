//// 'EXERCISE 3

var box = document.getElementById("box");
console.log("box", box);
box.addEventListener("mousedown", function (e) {
    console.log("down");
    var r = generateRgbValue();
    var g = generateRgbValue();
    var b = generateRgbValue();
    box.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

box.addEventListener("mouseup", function (e) {
    var r = generateRgbValue();
    var g = generateRgbValue();
    var b = generateRgbValue();
    box.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

function generateRgbValue() {
    return Math.floor(Math.random() * 256);
}
