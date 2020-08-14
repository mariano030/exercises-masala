(function () {

    // #1 initialize variables
    var kitties = document.querySelectorAll("#carousel img");
    var dots = document.querySelectorAll(".dots");
    var current = 0;
    var timer;
    var isInTheMiddleOfAnimation;


    // # 2 event listener - remove offscreen-left to have kitty got back to default (off right)
    //   & is animaiton over?
    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            timer = setTimeout(moveKitties, 5000);
        }
        isInTheMiddleOfAnimation = false;
    });

    // #3. add event listener to all dots AND call animation with clicked index!
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

    // animation function - animation is runing = true AND add / remove classes / increment i if function is called
    // with no argument
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
        }}

        dots[current].classList.add("dot-active");
        kitties[current].classList.add("onscreen");
    
})();



// swiping the the left is the equivalent of clicking the next button!!