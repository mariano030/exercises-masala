(function () {
    var kitties = document.querySelectorAll("#carousel img");
    var dots = document.querySelectorAll(".dots");
    var current = 0;

    //console.log(kitties.length);
    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            setTimeout(moveKitties, 5000);
        }
    });

    /*
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            current = i - 1;
            if (current >= kitties.length) {
                current = 0;
            } else if (current < 0) {
                console.log("clicked", i);
            }
        });
    }
*/
    setTimeout(moveKitties, 5000);

    function moveKitties() {
        // remove onscreen class from current kitty
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("offscreen-left");
        dots[current].classList.remove("dot-active");
        dots[current].classList.remove("dot-passive");
        current++;
        if (current >= kitties.length) {
            current = 0;
        }
        dots[current].classList.add("dot-active");
        kitties[current].classList.add("onscreen");
    }
})();
