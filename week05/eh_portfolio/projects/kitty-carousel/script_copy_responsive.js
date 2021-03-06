(function () {
    var kitties = document.querySelectorAll("#carousel img");
    var dots = document.querySelectorAll(".dots");
    var current = 0;
    var timer;
    var isInTheMiddleOfAnimation;

    var start;

    // EVENT LISTENER - is transition over?
    // return element that moved offscreen-left ot default (off right)
    // set animationRunning variable to false
    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            timer = setTimeout(moveKitties, 5000);
        }
        isInTheMiddleOfAnimation = false;
    });

    // EVENT LISTENER - was a dot clicked?
    for (var i = 0; i < dots.length; i++) {
        // use iffe to get different scope = different index
        (function (i) {
            dots[i].addEventListener("click", function (e) {
                console.log("clicked i:", i);
                // check if kitty on screen is same as clicked
                if (e.target.classList.contains("dot-active")) {
                    // if the item clicked is the same as is ONscreen
                    // do nuthin'
                    console.log("is already on screen");
                    return;
                } else {
                    // check if animation is currently running
                    if (isInTheMiddleOfAnimation == true) {
                        // do nuthin'
                        console.log("is in middle of animation");
                        return;
                    } else {
                        // otherwise
                        // reset timer (cancel already scheduled animation)
                        console.log(
                            "I am cancelling the  scheduled animation now!"
                        );
                        clearTimeout(timer);
                        // start new animation with specific kitty (i)
                        console.log("i am starting the new animation now");
                        moveKitties(i);
                    }
                }
            });
        })(i);
    }

    // SCHEDULE FIRST ANIMATION
    timer = setTimeout(moveKitties, 5000);

    // MOVE KITTIES - main function
    // moves to next kitty if no argument was passed
    // moves to nextIndex kitty if argument was passed
    function moveKitties(nextIndex) {
        // REMOVE LATER
        //console.log(changes);
        // REMOVE LATER
        isInTheMiddleOfAnimation = true;
        // remove onscreen class from current kitty
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("offscreen-left");
        dots[current].classList.remove("dot-active");

        if (typeof nextIndex == "undefined") {
            console.log("i do NOT have a nextIndex value");
            current++;
            if (current >= kitties.length) {
                current = 0;
            }
        } else {
            console.log("i have a nextIndex value");
            current = nextIndex;
        }
        dots[current].classList.add("dot-active");
        kitties[current].classList.add("onscreen");
    }
})();
