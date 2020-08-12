(function () {
    console.log("sanity regained.");

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
})();
