(function () {
    //console.log("yeah yeah");
    var kitties = document.querySelectorAll("#carousel img");
    var dots = document.querySelectorAll(".dots");
    //console.log("DOOOOOOTs:", dots);
    var current = 0;
    var offLeft = "null";

    //console.log(kitties.length);
    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            setTimeout(moveKitties, 5000);
        }
    });

    setTimeout(moveKitties, 5000);

    function moveKitties() {
        // remove onscreen class from current kitty
        kitties[current].classList.remove("onscreen");

        // add offscreen-left class to current kitty
        kitties[current].classList.add("offscreen-left");
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove("dot-active");
        }
        dots[current].classList.remove("dot-passive");
        //console.log("the current kitty is " + current);
        //make the next kitty be the current kitty
        //kitties[current].classList.remove("offscreen-left");
        //kitties[current].classList.add("offscreen-right");

        current++;

        if (current >= kitties.length) {
            current = 0;
        }
        dots[current].classList.add("dot-active");
        //console.log("the next kitty is " + current);
        //add onsecreen class to the new current kitty
        kitties[current].classList.add("onscreen");
    }
})();
