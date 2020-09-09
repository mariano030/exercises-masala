(function () {
    // var headlines = document.getElementById("headlines-container");

    var headlines = $("#headlines-container");

    // var links = document.getElementsByTagName("a");
    var links = $("a");
    console.log("links: ", links);

    // var left = headlines.offsetLeft;
    var left = headlines.position().left;
    console.log("starting coordinates left: ", left);

    var reqId;

    // AJAX START

    $.ajax({
        url: "headlines.json",
        method: "GET",
        success: function (response) {
            console.log("response: ", response);
            var myArticle = "";
            for (var i = 0; i < response.length; i++) {
                console.log("response: ", response[i].text, response[i].url);

                myArticle +=
                    "<a href='" +
                    response[i].url +
                    "'>" +
                    response[i].text +
                    "</a>";
            }
            headlines.html(myArticle);
        },
        complete: function () {
            move();

            links.on("mouseover", function (e) {
                console.log("mouseover is running!");

                // this.style.color = "hotpink";
                $(e.target).css({
                    color: "hotpink",
                });

                console.log(reqId);
                cancelAnimationFrame(reqId);
            });

            links.on("mouseleave", function (e) {
                console.log("mouseleave works!");
                // this.style.color = "inherit";
                $(e.target).css({
                    color: "inherit",
                });

                reqId = requestAnimationFrame(move);
            });
        },
    });

    // AJAX END

    function move() {
        left--;

        if (
            /* (left <= -links[0].offsetWidth) */
            left <= -links.eq(0).outerWidth()
        ) {
            // left += links[0].offsetWidth;
            left += links.eq(0).outerWidth();
            // left += links.eq(0).outerWidth();
            console.log("left: ", left);
            // links[0].parentElement.appendChild(links[0]);
            links.eq(0).parent().append(links.eq(0));
            // David says "got set links to get a new list"
        }

        // headlines.style.left = left + "px";

        links = $("a"); //there you go

        headlines.css({
            left: left,
        });

        reqId = requestAnimationFrame(move);
    }

    // for (var i = 0; i < links.length; i++) {
    //     console.log(links.eq(i));
    //     /* links[i].addEventListener("mouseover", function () */
    //     links.eq(i).on("mouseover", function (e) {
    //         console.log("mouseover is running!");

    //         // this.style.color = "hotpink";
    //         links.eq(i).css({
    //             color: "hotpink",
    //         });

    //         console.log(reqId);
    //         cancelAnimationFrame(reqId);
    //     });

    //     /* links[i].addEventListener("mouseleave", function () */
    //     links.eq(i).on("mouseleave", function () {
    //         console.log("mouseleave works!");
    //         // this.style.color = "inherit";
    //         links.eq(i).css({
    //             color: "inherit",
    //         });

    //         reqId = requestAnimationFrame(move);
    //     });
    // }
})();
