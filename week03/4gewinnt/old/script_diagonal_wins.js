// don't forget the IIFE...
(function () {
    /////////// Variables
    var board = $("#board");
    var currentPlayer = "player1";
    var allSlots = $(".slot");
    var holes = $(".hole");
    var winningSlots = [];
    var diagCheck1 = [];
    var diagCheck2 = [];

    /////// EVENT LISTENER -        >click<
    ////// on all columns                   // var allColumns = $(".column");
    $(".column").on("click", function (e) {
        var col = $(e.currentTarget); // e.currentTarget the one that was actually clicked!
        var rowIndex;
        var colIndex = col.index(); // console log this one
        var slotsInCol = col.children(); // translate col to individual slots in col
        var lastSlot;
        // console.log("i", i);
        // console.log("rowIndex: ", rowIndex);
        // console.log("colIndex: ", colIndex);

        // console.log('slotsInCol: ',slotsInCol);

        // DROP INTO SLOT
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            var hasPlayer1 = slotsInCol.eq(i).hasClass("player1"); // check if indivisual slotsInCol.eq(i) have class "player1" or "2"
            var hasPlayer2 = slotsInCol.eq(i).hasClass("player2");
            if (!hasPlayer1 && !hasPlayer2) {
                // first free col form down has been found
                slotsInCol.eq(i).addClass(currentPlayer);
                lastSlot = slotsInCol.eq(i);
                slotsInCol.eq(i).addClass("lastMove"); // mark the slot that was last changed with class "lastMove"
                //console.log("E.CURRENTtarget.eq(i):", slotsInCol.eq(i)); ???
                break;
            }
        }
        // only now you can grab the i variable (it is clear where the piece has landed)
        // console.log("i: ", i); // the index within the column where the piece was placed
        var slotsInRow = $(".row" + i); // set slotsInRow to row with last placed piece - via i
        rowIndex = i;
        console.log(
            "COORDINATES: rowIndex, colIndex ",
            rowIndex,
            ", ",
            colIndex
        );
        // this checks to see if the column is full....
        if (i === -1) {
            return;
        }
        console.log("ABOUT TO CHECK FOR VICTORY");
        if (checkForVictory(slotsInCol)) {
            // victorystatement
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! column victory");
            winningSlots = checkForVictory(slotsInCol);
            connected4(winningSlots);
            // holes.css("height", "100px");
            // holes.css("width", "100px");
            // holes.css("transform", "translate(-40px, -40px)");
            console.log(currentPlayer, " has won the game!");
        } else if (checkForVictory(slotsInRow)) {
            winningSlots = checkForVictory(slotsInRow);
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! row victory");
            console.log(currentPlayer, " has won the game!");
            connected4(winningSlots);
            //     //victory.html("<p> The winner is " + currentPlayer + "</p>");
        } else if (
            checkForDiagonals(rowIndex, colIndex, slotsInRow, slotsInCol)
        ) {
            // ### needs to go to checkForVictory(checkForDiagonals(lastSlot))
            //checkForDiagonals(lastSlot).addClass("slot-win");
            // checkForDiagonals needs to check both possible directions last one could be on checkForDiagonals(lastSlot);
            console.log(
                "diagonal VICTORYYYY ",
                currentPlayer,
                " has won the game!"
            );
            connected4(
                checkForDiagonals(rowIndex, colIndex, slotsInRow, slotsInCol)
            );
        } else {
            switchPlayer();
            slotsInCol.eq(i).removeClass("lastMove");
            //board.css("transform", "rotateY(15)");
        }
    });

    function switchPlayer() {
        currentPlayer === "player1"
            ? (currentPlayer = "player2")
            : (currentPlayer = "player1");
    }

    function connected4(arr) {
        if (currentPlayer == "player1") {
            var winstyle = "slot-win-p1";
        } else {
            var winstyle = "slot-win-p2";
        }
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass(winstyle);
        }
    }

    function checkForVictory(slots) {
        console.log("checkForVictory is checking: ", slots);
        var count = 0;
        var consecutiveSlots = [];
        if (Array.isArray(slots)) {
            console.log("you gave me an arry!");
        } else {
            console.log("not an array");
        }
        for (var i = 0; i < slots.length; i++) {
            // setting slot to check
            var slot = $(slots[i]);
            console.log("checking the slot: ", $(slots[i]));
            //if (slots.eq(i).hasClass(currentPlayer)) {
            if (slot.hasClass(currentPlayer)) {
                console.log("i hasClass currentPlayer ", i, " counting up");
                count++;
                consecutiveSlots.push(slot);
                if (count === 4) {
                    console.log("found 4 in a row, wow!");
                    for (i = 3; i >= 0; i--) {
                        //console.log(slot.eq(i));
                        //slot.eq(i).addClass("slot-win");
                    }
                    //return slots; // returning all slots that were checked
                    console.log("4 winning slots", consecutiveSlots);
                    return consecutiveSlots;
                }
            } else {
                count = 0;
                consecutiveSlots = [];
            }
        }
    }

    function selectByCoordinates(x, y) {
        if (x < 0 || x > 7 || y < 0 || y > 6) {
            console.log("you of the chart brotha");
            return;
        } else {
            console.log("SELECT BY COORDINATES RUNNING");
            //console.log($("col"));
            var allCols = $(".column");
            var theRow = $(".row" + y);
            console.log(
                "allCols.eq(x).children().eq(y)",
                allCols.eq(x).children().eq(y)
            );
            return allCols.eq(x).children().eq(y).addClass("slot-win");
            //console.log("theRow: ", theRow);
        }
    }

    function checkForDiagonals(rowIndex, colIndex, slotsInRow, slotsInCol) {
        console.log("checkForDiagonals starting to check");
        console.log("rowIndex ", rowIndex, " & colIndex ", colIndex);
        console.log(
            "??? slotsInCol.eq(colIndex), slotsInRow.eq(rowIndex)",
            slotsInCol.eq(rowIndex),
            slotsInRow.eq(colIndex)
        );
        threeRowsDown = slotsInCol.eq(rowIndex + 3);
        threeColsLeft = slotsInRow.eq(colIndex + 3);
        console.log("current lastMove slot:");
        // selectByCoordinates(colIndex, rowIndex);
        console.log("STATIC SELECTION");
        selectByCoordinates(3, 3);
        selectByCoordinates(2, 4);
        selectByCoordinates(1, 5);
        selectByCoordinates(0, 6);
        console.log(
            "%%%% selectByCooridnates -1, 2",
            selectByCoordinates(-1, 2)
        );
        // left to right
        for (var i = 0; i < 8; i++) {
            console.log("<<<< ITEM ", i);
            console.log(">>> colIndex - 3 + i): ", colIndex - 3 + i);
            console.log(">>> rowIndex - 3 + i: ", rowIndex - 3 + i);
            diagCheck1.push(
                selectByCoordinates(colIndex - 3 + i, rowIndex - 3 + i)
            );
        }
        // right to left
        for (var i = 0; i < 8; i++) {
            console.log("<<<< ITEM ", i);
            console.log(">>> colIndex - 3 + i): ", colIndex + 3 - i);
            console.log(">>> rowIndex - 3 + i: ", rowIndex + 3 - i);
            diagCheck1.push(
                selectByCoordinates(colIndex - 3 + i, rowIndex + 3 - i)
            );
        }
        console.log("diagCheck1: ", diagCheck1);
        // get one slot from coordinates
        if (checkForVictory(diagCheck1)) {
            return checkForVictory(diagCheck1);
        } else if (checkForVictory(diagCheck2)) {
            return checkForVictory(diagCheck2);
        }
        console.log("no diagonal win found...");
    }
})();
