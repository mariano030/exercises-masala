// move item (animation) switch css class
// add and remove the .on class!
// transform translate

// animation is possible for invisible elements - make visible
console.log("connected ...");
(function () {
    console.log("IIFE ...");

    var hamburger = document.getElementById("nav");
    console.log(hamburger);
    var sideNav = document.getElementById("side-nav");
    var overlay = document.getElementById("overlay");
    var xButton = document.getElementById("x-button");

    hamburger.addEventListener("click", function () {
        console.log("HAMBURGER CLICKED");
        //sideNav.classList.add("on");
    });
})();
