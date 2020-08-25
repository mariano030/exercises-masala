// don't forget the IIFE...
(function () {
    var currentPlayer = "player1";
    var allSlots = $(".slot");

    $(".column").on("click", function (e) {
        // console.log("clicked on a column!");
        // var allColumns = $(".column");
        var col = $(e.currentTarget);
        var rowIndex = i;
        var colIndex = col.index();

        // console.log(">>>>>>>col: ", col);
        // console.log("i", i);
        // console.log("rowIndex: ", rowIndex);
        // console.log("colIndex: ", colIndex);
        var slotsInCol = col.children();
        // console.log('slotsInCol: ',slotsInCol);

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            var hasPlayer1 = slotsInCol.eq(i).hasClass("player1");
            var hasPlayer2 = slotsInCol.eq(i).hasClass("player2");
            if (!hasPlayer1 && !hasPlayer2) {
                // console.log('do something!!!!');
                slotsInCol.eq(i).addClass(currentPlayer);
                slotsInCol.eq(i).addClass("lastMove"); // mark the slot that was last changed with class "lastMove"
                //console.log("E.CURRENTtarget.eq(i):", slotsInCol.eq(i));
                break;
            }
        }
        // only now you can grab the i variable (it is clear where the piece has landed)
        // console.log("i: ", i); // the index of the column where the piece was placed
        var slotsInRow = $(".row" + i);
        //console.log("slotsInRow: ", slotsInRow);

        // this checks to see if the column is full....
        if (i === -1) {
            return;
        }
        console.log("ABOUT TO CHECK FOR VICTORY");
        console.log("slotsInCol is ", slotsInCol);
        if (checkForVictory(slotsInCol)) {
            // victorystatement
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! column victory");
            //victory.html("<p> The winner is " + currentPlayer + "</p>");
            console.log(currentPlayer, " has won the game!");
        } else if (checkForVictory(slotsInRow)) {
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! row victory");
            console.log(currentPlayer, " has won the game!");
            //victory.html("<p> The winner is " + currentPlayer + "</p>");
        } else if (checkForDiagonals(allSlots)) {
            checkForDiagonals(allSlots).addClass("slot-win");
            checkForDiagonals(allSlots);
            console.log("diagonal VICTORYYYY");
        } else {
            switchPlayer();
        }
    });

    // check for victory.
    function checkForVictory(slots) {
        //console.log("checkForVictory is checking: ", slots);
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            console.log("slots[i]", slots[i]);
            var slot = $(slots[i]);
            //if (slots.eq(i).hasClass(currentPlayer)) {
            if (slot.hasClass(currentPlayer)) {
                console.log("i hasClass currentPlayer ", i);
                count++;
                if (count === 4) {
                    for (i = 3; i >= 0; i--) {
                        console.log(slot.eq(i));
                        slot.eq(i).addClass("slot-win");
                    }
                    return slots;
                }
            } else {
                count = 0;
            }
            console.log("count value is: ", count);
        }
    }

    console.log("allSlots.children()", allSlots.children());

    function checkForDiagonals(slots) {
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
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass("lastMove")) {
                console.log("gefunden es ist i =", i);
                lastMoveIndexAllSlots = i;
                console.log("müsste der hier sein!: ", slots.eq(i));

                break;
            }
        }
        for (var i = 0; i < diags.length; i++) {
            console.log("the I in my for of diags.length", i);
            console.log("$$$$$");
            if (diags[i].includes(lastMoveIndexAllSlots)) {
                console.log("includes true", i);
                foundIn.push(i);
                console.log("diags[i]", diags[i]);
                console.log("lastMoveIndexAllSlots", lastMoveIndexAllSlots);
            }
            //if ( )
        }
        console.log("THIS SPOT WAS FOUND IN...", foundIn);
        for (var i = 0; i < foundIn.length; i++) {
            console.log("foundIn[i]", foundIn[i]);
            console.log("diags[foundIn[i]]", diags[foundIn[i]]);
            //checkForVictory(allSlots.eq(foundIn[i]));
            console.log(
                "checkForVictory(allSlots.eq(foundIn[i]))",
                checkForVictory(allSlots.eq(foundIn[i]))
            );
            var objArr = [];
            for (var x = 0; x < diags[foundIn[i]].length; x++) {
                console.log("diags[foundIn[i]][x]", diags[foundIn[i]][x]);
                objArr.push(allSlots.eq(diags[foundIn[i]][x]));
            }
            console.log("objArr", objArr);
            if (checkForVictory(objArr)) {
                return objArr;
            }
        }
        // for (var i = 0; i < diags.length; i++) {
        //     for (var x = 0; x < diags[i].length; x++) {
        //         if ((diags[i][x] = lastMoveIndexAllSlots)) {
        //             console.log("potential diagonal!");
        //             console.log("diags[x]: ", diags[x]);
        //         }
        //     }
        // }
        console.log("checkForDiagonals ist fertig...");
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

    function switchPlayer() {
        currentPlayer === "player1"
            ? (currentPlayer = "player2")
            : (currentPlayer = "player1");
    }

    // console.log("current player before switching is: ", currentPlayer);
    // console.log("current player AFTER switching is: ", currentPlayer);
})();
