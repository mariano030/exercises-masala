(function () {
    console.log("ok");

    var container = $(".container");
    console.log(container);
    var bar = $("#bar");
    var topDiv = $("#top-image");
    var barLeft;

    // event listener on bar CLICK
    bar.on("mousedown", function moveBar(e) {
        // record "mousemove" on the container
        container.on("mousemove", function (e) {
            // listen for "mouseup" on contianer
            container.on("mouseup", function (e) {
                // turn off "mousemove" listener
                container.off("mousemove", moveBar());
                console.log("moused UPPPP");
                return;
            });
            // some logging

            console.log("e.pageX", e.pageX);
            console.log("container.offset().left: ", container.offset().left);
            barLeft = e.pageX - container.offset().left - 20;
            console.log("barLeft", barLeft);
            // if barLeft is within the width of container
            if (barLeft <= container.width() - 5 && barLeft > -10) {
                console.log("IF IS TRUE");
                bar.css({
                    left: barLeft,
                });
                topDiv.css({
                    width: barLeft,
                });
            } else {
                console.log("You went too far, this time!");
                container.off("mousemove", moveBar());

                //container.on("mousedown", moveBar());
            }
        }); 
})();
