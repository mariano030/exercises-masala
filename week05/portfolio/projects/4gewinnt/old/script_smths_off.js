console.log("sane");
console.log($);

var currentPlayer = "player1";

console.log("currentPlayer before switch: ", currentPlayer);

$(".column").on("click", function (e) {
    console.log("oh wow", e);
    var col = $(e.currentTarget); // e.currentTarget gives you the item with the event listener on, in this case the column
    console.log(e.target); // e.target gives you the item that was actually clicked, in this case a slot or hole
    console.log(col);

    var slotsInCol = col.children();
    console.log(slotsInCol.length);

    for (var i = slotsInCol.length - 1; i >= 0; i--) {
        console.log(i);
        var hasPlayer1 = slotsInCol.eq(i).hasClass("player1");
        var hasPlayer2 = slotsInCol.eq(i).hasClass("player2");
        if (!hasPlayer1 && !hasPlayer2) {
            // remember i as possible row height
            slotsInCol.eq(i).addClass(currentPlayer);
            console.log("slotsInCol.eq(i)", slotsInCol.eq(i));
            break;
        }
    }
    if (i === -1) {
        return;
    }
    console.log("i outside for loop", i);
    if (checkForVictory(slotsInCol)) {
        console.log("therewas a column victory");
    } else {
        switchPlayer();
    }
});

function switchPlayer() {
    // console.log("current Player is:", currentPlayer);
    // if (currentPlayer == "player1") {
    //     currentPlayer = "player2";
    // } else {
    //     currentPlayer = "player1";
    // }

    currentPlayer === "player1" // the TERNARY OPERATOR
        ? (currentPlayer = "player2") // if true
        : (currentPlayer = "player"); // else
}

function checkForVictory(slots) {
    console.log("checking for victory...");
    for (var i = 0; i < slots.length; i++) {
        console.log(
            "slots.eq(i).hastClass(currentPlayer)",
            slots.eq(i).hastClass(currentPlayer)
        );
    }
}

console.log("currentPlayer AFTER switch: ", currentPlayer);
