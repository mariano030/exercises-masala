(function () {
    var kitties = document.querySelectorAll("#carousel img");
    var dots = document.querySelectorAll(".dots");
    var current = 0;
    var timer;
    var isInTheMiddleOfAnimation;
    var start;

    // ADD SWIPING

    for (var i = 0; i < kitties.length; i++) {
        (function (i) {
            kitties[i].addEventListener("touchstart", function (e) {
                console.log("touchstart triggered");
                console.log(
                    "e.changedTouches[0].pageX: ",
                    e.changedTouches[0].pageX
                );
                start = e.changedTouches[0].pageX;
            });
            kitties[i].addEventListener("touchend", function (e) {
                console.log("touchend triggered");
                console.log(
                    "e.changedTouches[0].pageX: ",
                    e.changedTouches[0].pageX
                );
                if (start > e.changedTouches[0].pageX) {
                    console.log("right direction");
                    console.log("i", i);
                    swipedWell(i);
                } else {
                    console.log("you swiped the wrong way, kiddo");
                }
            });
        })(i);
    }

    function swipedWell(i) {
        // check if animation is currently running
        if (isInTheMiddleOfAnimation == true) {
            console.log("you can't touch this, animation running");
            return;
        } else {
            clearTimeout(timer);
            if (i + 1 >= kitties.length) {
                console.log("nächstes müsste wieder null sein");
                i = 0;
            } else {
                console.log("es sind noch kittes übrig für i + 1");
                i++;
            }
            console.log("calling moveKitties with i ");
            console.log("i: ", i);
            moveKitties(i, 5000);
        }
    }

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
    /*
    // EVENT LISTENER TOUCH - was a dot clicked?
    for (var i = 0; i < kitties.length; i++) {
        // use iffe to get different scope = different index
        (function (i) {
            kitties[i].addEventListener("touchstart", function (e) {
                console.log("TOUCHED i:", i);
                // check if kitty on screen is same as clicked

                // check if animation is currently running
                if (isInTheMiddleOfAnimation == true) {
                    // do nuthin'
                    console.log(
                        "YOU CAN'T TOCU THIS is in middle of animation"
                    );
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
                    if (i + 1 == kitties.length) {
                        i = 0;
                    }
                    moveKitties(i);
                }
            });
        })(i);
    }
*/

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
