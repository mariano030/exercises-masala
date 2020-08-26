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
    console.log("sideNav: ", sideNav);
    var overlay = document.getElementById("overlay");
    var xButton = document.getElementById("x-button");

    hamburger.addEventListener("click", function (e) {
        console.log("HAMBURGER CLICKED");
        sideNav.classList.add("slide-in");
        overlay.classList.add("on");
    });

    xButton.addEventListener("click", function () {
        //sideNav.classList.add("slide-out");
        sideNav.classList.remove("slide-in");
        //sideNav.classList.remove("slide-out");
        overlay.classList.remove("on");
    });

    overlay.addEventListener("click", function () {
        console.log("overlay geklickt");
        overlay.classList.remove("on");
        sideNav.classList.remove("slide-in");
    });
})();
