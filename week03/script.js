(function () {
    console.log($);
    // var board = document.getElementById("board");   -vanilla js
    var board = $("#board"); // jQuery getElementById - can use any css selector

    // var animals = document.getElementsByClassName("animal");
    var animals = $(".animal");

    var boostButton = $("#boost-button");

    var animalsLeft = [16, 0, 0, 0];

    function getRandomNumber(num) {
        return Math.floor(Math.random() * num);
    }

    boostButton.on("click", function boostTurtle(e) {
        e.stopPropagation();
        console.log("clicked boost");
        //console.log("boost: ", boost);
        animalsLeft[0] += 50;
        animals.eq(0).css({
            left: animalsLeft[0],
        });
        // make jQuery object to be able to use off()
        $(e.target).off("click", boostTurtle);
        //boostButton.off(); also possible
        boostButton.html("Boost used :(");
    });

    $(document).on("keydown", function (e) {
        if (e.keyCode === 32) {
            console.log("space");
            for (var i = 0; i < animalsLeft.length; i++) {
                animalsLeft[i] += getRandomNumber(20);
                // you can not use [] on jQuery objects use eq()
                // jQuery is using the default unit if you do not specify - in this case px
                animals.eq(i).css({
                    left: animalsLeft[i],
                });
            }
        }
    });

    board.on("click", function () {
        console.log("you clicked, congrats.");
        for (var i = 0; i < animalsLeft.length; i++) {
            animalsLeft[i] += getRandomNumber(20);
            // you can not use [] on jQuery objects use eq()
            // jQuery is using the default unit if you do not specify - in this case px
            animals.eq(i).css({
                left: animalsLeft[i],
            });
        }
        console.log("animalsLeft: ", animalsLeft);
    });

    //change any css
    /*
    board.css({
        "background-color": "hotpink",
        border: "20px solid violet",
    });*/

    // jQuery can style all elements instead of having to loop through the array like object
    /*
    animals.css({
        "background-color": "black",
    });
    */

    // DOM document.

    // headlines.offsetLeft in jQuery it's .offset().left
})();
