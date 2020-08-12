(function () {
    console.log("sanity established.");

    // 1 grab elelement and render the context
    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");

    // begin path
    ctx.beginPath();

    // optional colors and thickness of line
    ctx.strokeStyle = "darkbrown";
    ctx.lineWidth = 3;

    // move to starting position
    ctx.moveTo(100, 100);

    // map out other points of shape

    ctx.lineTo(400, 100);
    ctx.lineTo(350, 200);
    //ctx.lineTo(100, 150);
    ctx.fillStyle = "khaki";

    //close path if you want to close the path instead of it just lining up (if it is)
    ctx.closePath();
    // draw the eshape we have mapped - shape needs to be done before we render/draw
    ctx.stroke();
    ctx.fill();

    /////// make a circle /////
    ctx.beginPath();
    // arguments(x postion, y position, radius, startingAngle, endAngle)
    ctx.arc(400, 400, 50, 0, 2 * Math.PI); // what is a radiant? the radius as a length of the outer line of a circle
    ctx.stroke();

    // stick figure on smaller canvas
    var smallCanvas = document.getElementById("small-canvas");
    console.log("smallCanvas: ", smallCanvas);

    var smallContext = smallCanvas.getContext("2d");
    console.log("smallContext: ", smallContext);

    smallContext.strokeStyle = "darkbrown";
    smallContext.lineWidth = 3;
    //smallContext.beginPath();

    smallContext.arc(200, 50, 40, 0, 2 * Math.PI);
    //smallContext.endPath();
    smallContext.stroke();
    smallContext.moveTo(200, 90);
    smallContext.lineTo(200, 300);
    smallContext.lineTo(270, 370);
    smallContext.moveTo(200, 300);
    smallContext.lineTo(130, 370);
    smallContext.moveTo(200, 150);
    smallContext.lineTo(130, 50);
    smallContext.moveTo(200, 150);
    smallContext.lineTo(280, 50);
    //smallContext.closePath();

    smallContext.stroke();

    function animate() {
        smallContext.drawImage(100, 120000);
    }

    //ctx.drawImage(smallCanvas, 100, 100);

    //animate();
    function animate(what, x, y) {
        x++;
        ctx.clearRect(0, 0);
        ctx.drawImage(what, x, y);

        animate(what, x, y);
    }
    //animate(smallCanvas, 100, 100);

    document.addEventListener("keypress", function (event) {
        if ((event.keycode = 37)) {
            console.log("left");
        } else if ((event.keycode = 38)) {
            console.log("3888");
        }
        console.log(event.keycode);
    });

    /*
    var picasso = document.getElementById("picasso");
    console.log("picasso: ", picasso.src);
    picasso.addEventListener("load", function (e) {
        console.log("smallCanvas: ", smallCanvas);
        console.log("smallCanvas is loaded");
        ctx.drawImage(picasso, 100, 100);
    });
    */

    console.log("break");
    smallCanvas.addEventListener("draw", function (e) {
        console.log("smallCanvas: ", smallCanvas);
        console.log("smallCanvas is loaded");
    });
})();
