(function () {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft; // current postion of headlines element

    var linksArr = document.getElementsByTagName("A"); // magical list of items in order even after change stays in sync with page
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
        if (left == linksArr[0].offsetWidth * -1) {
            console.log("TRUEEEE");
            left = left + linksArr[0].offsetWidth;
            headlines.appendChild(linksArr[0]);
        }
        for (var i = 0; i < linksArr.length; i++) {
            console.log("linksArr[i].stlye.left = left");
            linksArr[i].style.left = left;
        }
        headlines.style.left = left + "px";
        reqId = requestAnimationFrame(move); // requestAnimaitonFrame syncs with your screens refreshrate !
        //}
    }
    move();

    // MOUSE OVER

    for (var i = 0; i < linksArr.length; i++) {
        console.log("linksArr[i]", linksArr[i]);
        linksArr[i].addEventListener("mouseover", function (evt) {
            console.log("ein element mouseover triggered");
            // change styling here
            evt.target.style.backgroundColor = "yellow";
            cancelAnimationFrame(reqId);
            console.log("wird ausgeführt");
            // stop the ticker
        });
        // restart animation - use: "mouseleave"
        linksArr[i].addEventListener("mouseleave", function (evt) {
            console.log("mouse left!!");
            // change style back
            evt.target.style.backgroundColor = "";
            // restart the move() function somehow
            move();
        });
    }
    console.log(linksArr);
})();
