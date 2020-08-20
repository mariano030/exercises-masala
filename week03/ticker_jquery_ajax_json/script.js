// Create a json file containing the text and hrefs of the links in your ticker project
// and remove the links from your html file. When the page loads, make an ajax request
// to fetch the text and hrefs and, once you have them, insert the links into the page.
// Once the links are in the page, start the animation. To test this you should use http-server.

(function () {
    var headlines = $("#headlines");
    var left = $("#headlines").offset().left; // current postion of headlines element
    var linksObj; // magical list of items in order even after change stays in sync with page
    var linksArr;

    var reqId;

    console.log("left: ", left);
    console.log("wo isses?");

    // load json file

    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function (json) {
            console.log("json", json);
            // put the data in the div function here
            console.log("json ", json);
            createLinks(json);
        },
        error: function (error) {
            console.log("error.status", error.status);
        },
        complete: function (data) {
            console.log("complete function!", data);

        function createLinks(array) {
        console.log("createLinks running!!!");
        /// ***** I think I also have to create the ARRAY linksArr here... would be best probably
        for (var i = 0; i < array.length; i++) {
            $("<a>", {
                // jquery add <a> elements
                text: array[i].text,
                href: array[i].url,
            }).appendTo("#headlines");
        }
        console.log('$("a")', $("a"));
        linksArr = $("a");

        

            function move() {
                //console.log("move running");
                //console.log(">>>>>linksArr.eq(1): ", linksArr.eq(1));
                left--;
                //reqId = requestAnimationFrame(move);
                // ist die maus drauf??? nee? dann beweg mal! if (headlines.addEventListener("mouseover") {
                if (left == linksArr.eq(0).width() * -1) {
                    console.log("TRUEEEE - it's OFF SCREEN");
                    left = left + linksArr.eq(0).width();
                    headlines.appendChild(linksArr.eq(0));
                }
                for (var i = 0; i < linksArr.length; i++) {
                    //console.log("linksArr[i].stlye.left = left");
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

            // $(document).on('click', 'a') - Johannes

            // VERSION WITH NEW ARGUMENT
            for (var i = 0; i < linksArr.length; i++) {
                //console.log("linksArr[i]", linksArr.eq(i));
                $(document)
                    .eq(i)
                    .on("mouseover", "a", function (evt) {
                        console.log("ein element mouseover triggered");
                        // change styling here
                        evt.target.style.backgroundColor = "yellow";
                        cancelAnimationFrame(reqId);
                        console.log("wird ausgeführt");
                        // stop the ticker
                    });
                // restart animation - use: "mouseleave"
                $(document)
                    .eq(i)
                    .on("mouseleave", "a", function (evt) {
                        console.log("mouse left!!");
                        // change style back
                        evt.target.style.backgroundColor = "";
                        // restart the move() function somehow
                        move();
                    });
            }
        },
    });


    // create link elements with json data - executed when sucess

        /*
        // this is BS console.log("linksObj[i].text: ", linksObj[i].text);
        $("#headlines").on("load", function () {
            console.log("headlines is loaded");

            console.log("execute move");
        });*/
    }

    /* move test
    function testing() {
        headlines.style.left = "500px";
    }
    testing();
    */

    // MOVE FUNCTION - ACTUAL ANIMATION
})();
