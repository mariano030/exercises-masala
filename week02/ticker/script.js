(function () {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft; // current postion of headlines element

    var linksArr = document.getElementsByTagName("A"); // magical list of items in order even after change stays in sync with page
    console.log(linksArr);
    console.log("leftyyyyyy", left);

    /* move test
    function testing() {
        headlines.style.left = "500px";
    }
    testing();
*/

    function move() {
        left--;
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
        requestAnimationFrame(move); // requestAnimaitonFrame syncs with your screens refreshrate !
        //}
    }
    move();

    headlines.addEventListener("mouseover", function () {
        headlines.style.backgroundColor = "red";
        headlines.style.left = left;
        console.log("wird ausgeführt");
    });
})();
