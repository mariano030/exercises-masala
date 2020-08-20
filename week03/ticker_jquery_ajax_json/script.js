// Create a json file containing the text and hrefs of the links in your ticker project
// and remove the links from your html file. When the page loads, make an ajax request
// to fetch the text and hrefs and, once you have them, insert the links into the page.
// Once the links are in the page, start the animation. To test this you should use http-server.

(function () {
    // current postion of headlines element
    var linksObj; // magical list of items in order even after change stays in sync with page
    var linksArr;
    var headlines;
    var left;
    var reqId;
    left = $("#headlines").position().left;
    headlines = $("#headlines");

    console.log("left: ", left);
    console.log("wo isses?");

    // load json file

    function move() {
        //left = $("#headlines").offset().left;
        //console.log("move running");
        //console.log(">>>>>linksArr.eq(1): ", linksArr.eq(1));
        left--;
        // console.log("linksArr.eq(0).width(): ", linksArr.eq(0).width());
        //console.log("left", left);
        //reqId = requestAnimationFrame(move);
        // ist die maus drauf??? nee? dann beweg mal! if (headlines.addEventListener("mouseover") {
        if (left < -linksArr.eq(0).outerWidth()) {
            console.log("TRUEEEE - it's OFF SCREEN");
            console.log("headlines: ", headlines);
            left = left + linksArr.eq(0).outerWidth();
            headlines.append(linksArr.eq(0));
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

    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function (array) {
            console.log("json-array", array);
            // put the data in the div function here
            console.log("json-array", array);
            console.log("creating links now....");
            /// ***** I think I also have to create the ARRAY linksArr here... would be best probably
            for (var i = 0; i < array.length; i++) {
                $("<a>", {
                    // jquery add <a> elements
                    text: array[i].text,
                    href: array[i].url,
                }).appendTo("#headlines");
            }
            console.log('$("a")', $("a"));
            $("a").css({
                paddingRight: 20 + "px",
            });
            linksArr = $("a");
        },
        error: function (error) {
            console.log("error.status", error.status);
        },
        complete: function (data) {
            console.log("complete function!", data);

            move();
            // MOUSE OVER
            linksArr.on("mouseover", function (e) {
                $(e.target).css({ "background-color": "yellow" });
                cancelAnimationFrame(reqId);
            });
            linksArr.on("mouseleave", function (e) {
                console.log("mouse left");
                $(e.target).css({ "background-color": "inherit" });
                reqId = requestAnimationFrame(move);
            });
            // $(document).on('click', 'a') - Johannes

            // VERSION WITH NEW ARGUMENT/*
        },
    });

    // create link elements with json data - executed when sucess

    /*
        // this is BS console.log("linksObj[i].text: ", linksObj[i].text);
        $("#headlines").on("load", function () {
            console.log("headlines is loaded");

            console.log("execute move");
        });*/

    /* move test
    function testing() {
        headlines.style.left = "500px";
    }
    testing();
    */

    // MOVE FUNCTION - ACTUAL ANIMATION
})();
