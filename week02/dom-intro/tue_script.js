console.log("sanity regained");

var btn = document.getElementById("btn"); // get element for listener

var input = document.getElementsByTagName("input")[0];

console.log(input, btn);

input.addEventListener("input", function (evt) {
    console.log("typed smth", evt.target.value);
    evt.target.value = "masala";
    input.value = "masala";
});

btn.addEventListener("click", function (event) {
    // add listener to element, (event to listen for, function upon event)
    console.log("clicked, congrats");
    document.body.style.backgroundColor = "#00C9DB";
    console.log("event", event);
});

document.addEventListener("keydown", function (event) {
    console.log("keydown event happend");
    console.log("event", event);
    if ((event.keyCode = 84)) {
        document.body.style.backgroundColor = "#19EBFF";
        console.log("button t pressed");
    } else {
        document.body.style.backgroundColor = "#00838F";
    }
});
