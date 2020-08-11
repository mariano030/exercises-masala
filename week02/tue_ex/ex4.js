var innerBox = document.getElementById("inner-box");

var outerBox = document.getElementById("outer-box");

function generateRgbValue() {
    return Math.floor(Math.random() * 256);
}

outerBox.addEventListener("click", function (e) {
    var r = generateRgbValue();
    var g = generateRgbValue();
    var b = generateRgbValue();
    outerBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log("rgb(" + r + "," + g + "," + b + ")");
});

innerBox.addEventListener("click", function (e) {
    var r = generateRgbValue();
    var g = generateRgbValue();
    var b = generateRgbValue();
    innerBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
