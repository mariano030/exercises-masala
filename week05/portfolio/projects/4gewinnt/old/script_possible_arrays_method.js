// don't forget the IIFE...
(function () {
    /////////// Variables
    var board = $("#board");
    var currentPlayer = "player1";
    var allSlots = $(".slot");
    var holes = $(".hole");
    var winningSlots = [];

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
            // } else if (checkForVictory(slotsInRow)) {
            //     winningSlots = checkForVictory(slotsInRow);
            //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! row victory");
            //     console.log(currentPlayer, " has won the game!");
            //     connected4(winningSlots);
            //     //victory.html("<p> The winner is " + currentPlayer + "</p>");
        } else if (checkForDiagonals(lastSlot)) {
            // ### needs to go to checkForVictory(checkForDiagonals(lastSlot))
            //checkForDiagonals(lastSlot).addClass("slot-win");
            // checkForDiagonals needs to check both possible directions last one could be on checkForDiagonals(lastSlot);
            console.log(
                "diagonal VICTORYYYY ",
                currentPlayer,
                " has won the game!"
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

    function checkForDiagonals(lastSlot) {
        console.log("checkForDiagonals");
        var lastMoveIndexAllSlots;
        var foundIn = [];
        var diags = [
            [0, 7, 14, 21, 28, 35], //left to right
            [6, 13, 20, 27, 34, 41],
            [12, 19, 26, 33, 40],
            [18, 25, 32, 39],
            [1, 8, 15, 22, 29],
            [2, 9, 16, 23],
            [18, 13, 8, 3], // use all possible diagonals
            //start other direction: right to left
            [30, 25, 20, 15, 10, 5],
            [36, 31, 26, 21, 16, 11],
            [37, 32, 27, 22, 17],
            [38, 33, 28, 29],
        ];
        //slotsInCol.eq(i).addClass("lastMove");
        // FIND lastSlot in allSlots and make it lastMoveIndexAllSlots
        for (var i = 0; i < allSlots.length; i++) {
            if (allSlots.eq(i).hasClass("lastMove")) {
                console.log("gefunden es ist i =", i);
                lastMoveIndexAllSlots = i;
                console.log("müsste der hier sein!: ", allSlots.eq(i));

                break;
            }
        }
        var diagsToCheck = [];
        // FIND lastMoveIndexAllSlots in diags sub-arrays
        for (var i = 0; i < diags.length; i++) {
            console.log("the i in my for of diags.length", i);
            console.log("$$$$$");
            if (diags[i].includes(lastMoveIndexAllSlots)) {
                console.log("includes = true", i);
                foundIn.push(i); // push diags[index] where lasMoveIndexAllSlots was found to foundIn
                console.log("diags[i]", diags[i]);
                console.log("lastMoveIndexAllSlots", lastMoveIndexAllSlots);
            }
        }
        //foundIn is an array with the index of diags to check   check: diags[foundIn[i]]
        console.log("THIS SPOT WAS FOUND IN... foundIn", foundIn);
        console.log("diags[foundIn[1]].length: ", diags[foundIn[1]].length);
        if (foundIn.length > 1) {
            // create array of acutal slots via all slots
            for (var i = 0; diags[foundIn[1]].length; i++) {
                console.log(allSlots.eq(diags[foundIn[1][i]]));
                diagsToCheck.push(allSlots.eq(diags[foundIn[1][i]]));
            }
            console.log(diagsToCheck);
        }
        // for (var i = 0; i < diags[foundIn[1]].length; i++) {
        //     console.log(
        //         "pushing allSlots.eq(diags[foundIn[0]][i]) aka",
        //         allSlots.eq(diags[foundIn[1]][i])
        //     );
        //     diagsToCheck.push(allSlots.eq(diags[foundIn[1]][i]));
        // }

        // for (var i = 0; i < diags[foundIn[1].length]; i++) {
        //     diagsToCheck.push(allSlots.eq(diags[foundIn[1]][i]));
        //     console.log(
        //         "pushing ",
        //         allSlots.eq(diags[foundIn[1]][i]),
        //         "onto diagsToCheck"
        //     );
        // }
        if (checkForVictory(diagsToCheck)) {
            console.log("DIAGONAL WIN WIN WIN WIN");
            return true;
        }

        if (checkForVictory(allSlots.eq(diags[foundIn[0]]))) {
            console.log("checkingForVictory 1st possibility");
            return true;
        }
        // var objArr = [];
        // for (var x = 0; x < diags[foundIn[i]].length; x++) {
        //     console.log("diags[foundIn[i]][x]", diags[foundIn[i]][x]);
        //     objArr.push(allSlots.eq(diags[foundIn[i]][x]));
        // }
        // return objArr;
        // console.log("objArr", objArr);
        // if (checkForVictory(objArr)) {
        //     return objArr;
        // }

        // for (var i = 0; i < diags.length; i++) {
        //     for (var x = 0; x < diags[i].length; x++) {
        //         if ((diags[i][x] = lastMoveIndexAllSlots)) {
        //             console.log("potential diagonal!");
        //             console.log("diags[x]: ", diags[x]);
        //         }
        //     }
        // }
        console.log("checkForDiagonals ist fertig...");
        return false;
    }

    // console.log("checkForDiagonalVictory running ...");
    // //console.log("allColumns: ", allColumns);
    // // find out where lastMove is on allSlots!!
    // for (var i = 0; i < slots.length; i++) {
    //     if (slots.eq(i).hasClass("lastMove")) {
    //         console.log("slots.eq(i): ", slots.eq(i) + " and i is " + i);
    //     }
    // }
    // if (slots.eq(i - 5) < slots.length) {
    //     console.log("diagonal down left exists");
    //     console.log("i - 5", i - 5);
    // } else if (slots.eq(i + 5) < slots.length) {
    //     console.log("diagonal up right exists");
    // } else if (slots.eq(i + 7) < slots.length) {
    //     console.log("diagonal down right exists!");
    // } else if (slots.eq(i - 7) < slots.length) {
    //     console.log("diagonal up left exists");
    // }

    //     console.log(slots);
    //     var count = 0;
    //     // for each row element in allSlots (0 + 6)
    //     // needs to check i + 35
    //     for (var i = 0; i < slots.length; i + 7) {
    //         if (slots.eq(i).hasClass(currentPlayer)) {
    //             count++;
    //             if (count === 4) {
    //                 return true;
    //             }
    //         } else {
    //             count = 0;
    //         }
    //         console.log("count value is: ", count);
    //     }
    // }

    // console.log("current player before switching is: ", currentPlayer);
    // console.log("current player AFTER switching is: ", currentPlayer);
})();
