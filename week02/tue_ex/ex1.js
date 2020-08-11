console.log("sanity aquired");

var box = document.getElementById("box");
console.log(box);

box.addEventListener("mousemove", function move(event) {
    boxX = event.pageX;
    boxY = event.pageY;
    console.log(event.clientX);
    box.style.left = boxX + "px";
    box.style.top = boxY + "px";
});

// pageX and pageY - the x and y coordinates of the spot on the page where a mouse event occurred
// mousemove - the mouse pointer has moved on an element -- where?

//transform = translate(x,y);
//-50% , -50%
