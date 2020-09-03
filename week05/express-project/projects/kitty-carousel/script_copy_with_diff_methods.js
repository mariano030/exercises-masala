(function () {
    var kitties = document.querySelectorAll("#carousel img");
    var dots = document.querySelectorAll(".dots");
    var current = 0;
    var timer;

    var isInTheMiddleOfAnimation;


    //console.log(kitties.length);
    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            timer = setTimeout(moveKitties, 5000);
        }
        isInTheMiddleOfAnimation = false;
    });

    // we don't need to know what dot was clicked - but what is the index of the clicked dot
    // so we can chose the kitty with the same index

    //not working i is always last i because of scope
    /*
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            current = i - 1;
            if (current >= kitties.length) {
                current = 0;
            } else if (current < 0) {
                current = dots.length - 1;
                console.log("clickedddd", current);
            }
            console.log("clicked", current);
        });
    }
*/


    // two scopes:
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", getClickHandler(i));
    }

    function getClickHandler(i) {
        return function () {
            console.log(i);
        };
    }

    // using iife to create a new scope - another scope in which i doesn't change

    for (var i =0; i < dots.length; i++) {
        (function (i) {
            dots[i].addEventListener("click, function() {
                console.log(i); // this is the index of the dot i clicked
                if (e.traget.classList.contains("on")) {
                    // clearTimeout(timer);
                    // timer = setTimeout(movieKitties, 5000);
                    return;
                } 
                if (isInTheMiddleOFAnAnimaiton) {
                    return;
                }
                clearTimeout(timer);
                moveKitties(i);
    }}) 
            };
        });
    }


    setTimeout(moveKitties, 5000);

    function moveKitties(nextIndex) {
        isInTheMiddleOfAnimation = true;
        // remove onscreen class from current kitty
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("offscreen-left");
        dots[current].classList.remove("dot-active");

        if (typeof nextIndex == 'undefined') {
        current++;
        if (current >= kitties.length) {
            current = 0;
        } else {
            current = nextIndex;
        }

        dots[current].classList.add("dot-active");
        kitties[current].classList.add("onscreen");
    }
})();
