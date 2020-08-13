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
    var x = 100;
    var y = 100;
    x++;

    ctx.drawImage(smallCanvas, x, y);

    //animate();
    function animate(what, x, y) {
        x++;
        ctx.clearRect(0, 0, 800, 800);
        ctx.drawImage(what, x, y);
        animate(what, x, y);
    }
    //animate(smallCanvas, 100, 100);

    function move(x, y, direction, value) {
        x = x + value * direction;
        y = y + value * direction;
        ctx.clearRect(0, 0, 800, 800);
        ctx.drawImage(smallCanvas, x, y);
    }

    document.addEventListener("keydown", function (event) {
        // 40 = runter
        // 38 = hoch
        // 37 = links
        // 39 = rechts
        console.log("läuft");
        if (event.keyCode == 37) {
            console.log("left");
            x = x - 5;
            ctx.clearRect(0, 0, 800, 800);
            ctx.drawImage(smallCanvas, x, y);
        } else if (event.keyCode == 39) {
            console.log("rechts");
            x = x + 5;
            ctx.clearRect(0, 0, 800, 800);
            ctx.drawImage(smallCanvas, x, y);
        } else if (event.keyCode == 38) {
            console.log("hoch");
            y = y - 5;
            ctx.clearRect(0, 0, 800, 800);
            ctx.drawImage(smallCanvas, x, y);
        } else if (event.keyCode == 40) {
            console.log("runter");
            y = y + 5;
            ctx.clearRect(0, 0, 800, 800);
            ctx.drawImage(smallCanvas, x, y);
        }

        ctx.clearRect(0, 0, 800, 800);
        ctx.drawImage(smallCanvas, x, y);
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

/* 
<img
            id="picasso"
            src="https://i.pinimg.com/originals/8f/0e/07/8f0e07c1be55961b0774d21cb996c65e.jpg"
        />
         */
