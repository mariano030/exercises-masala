(function () {
    var headlines = $("#headlines");
    var left = $("#headlines").offset().left; // current postion of headlines element
    console.log("left: ", left);
    console.log("wo isses?");

    var linksArr = $("a"); // magical list of items in order even after change stays in sync with page
    console.log("linksArr" + linksArr);
    console.log("leftyyyyyy", left);
    var reqId;
    /* move test
    function testing() {
        headlines.style.left = "500px";
    }
    testing();
*/

    function move() {
        left--;
        //reqId = requestAnimationFrame(move);
        // ist die maus drauf??? nee? dann beweg mal! if (headlines.addEventListener("mouseover") {
        if (left == linksArr.eq(0).width() * -1) {
            console.log("TRUEEEE");
            left = left + linksArr.eq(0).width();
            headlines.appendChild(linksArr.eq(0));
        }
        for (var i = 0; i < linksArr.length; i++) {
            console.log("linksArr[i].stlye.left = left");
            linksArr.eq(i).css({
                left: left,
            });
        }
        headlines.css({
            left: left,
        });
        reqId = requestAnimationFrame(move); // requestAnimaitonFrame syncs with your screens refreshrate !
        //}
    }
    move();

    // MOUSE OVER

    for (var i = 0; i < linksArr.length; i++) {
        console.log("linksArr[i]", linksArr.eq(i));
        linksArr.eq(i).on("mouseover", function (evt) {
            console.log("ein element mouseover triggered");
            // change styling here
            evt.target.style.backgroundColor = "yellow";
            cancelAnimationFrame(reqId);
            console.log("wird ausgeführt");
            // stop the ticker
        });
        // restart animation - use: "mouseleave"
        linksArr.eq(i).on("mouseleave", function (evt) {
            console.log("mouse left!!");
            // change style back
            evt.target.style.backgroundColor = "";
            // restart the move() function somehow
            move();
        });
    }
    console.log(linksArr);
})();
