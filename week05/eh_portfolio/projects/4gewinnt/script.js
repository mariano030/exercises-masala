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
    var scorePlayer1 = 0;
    var scorePlayer2 = 0;
    var winstyle;
    var scoreP1 = $("#score-p1");
    var scoreP2 = $("#score-p2");
    var toggleHard = 0;

    $(window).on("click", function () {
        console.log("fading");
        $("#background").addClass("fadeout");
    });

    $("#reset").on("click", function () {
        resetScore();
    });

    $("#hard").on("click", function () {
        if (selectByCoordinates(3, 5).hasClass("disabled")) {
            selectByCoordinates(3, 5).removeClass("disabled");
            selectByCoordinates(2, 5).removeClass("player1");
            selectByCoordinates(1, 5).removeClass("player2");
            selectByCoordinates(0, 5).removeClass("player1");
            // selectByCoordinates(5, 3).addClass("player2");

            selectByCoordinates(4, 5).removeClass("player2");
            selectByCoordinates(5, 5).removeClass("player1");
            selectByCoordinates(6, 5).removeClass("player2");
            resetBoard();
        } else {
            resetBoard();
            hardMode();
        }
    });

    $("#clear").on("click", function () {
        resetBoard();
    });

    $("#ok").on("click", function () {
        console.log("ok clicked");
        resetBoard();
    });

    $("#button-score").on("click", function () {
        console.log("clicked");
        updateScore();
        hardMode();
    });
    /////// EVENT LISTENER -        >click<
    ////// on all columns                   // var allColumns = $(".column");
    $(".column").on("click", function (e) {
        // HARD MODE - hardMode();
        var col = $(e.currentTarget); // e.currentTarget the one that was actually clicked!
        var rowIndex;
        var colIndex = col.index(); // console log this one
        var slotsInCol = col.children(); // translate col to individual slots in col
        var lastSlot;

        // DROP INTO SLOT
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            var hasPlayer1 = slotsInCol.eq(i).hasClass("player1"); // check if indivisual slotsInCol.eq(i) have class "player1" or "2"
            var hasPlayer2 = slotsInCol.eq(i).hasClass("player2");
            var hasDisabled = slotsInCol.eq(i).hasClass("disabled");
            if (!hasPlayer1 && !hasPlayer2 && !hasDisabled) {
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
        if (currentPlayer === "player1") {
            console.log("changing player to p2");
            currentPlayer = "player2";
            scoreP1.removeClass("current-player");
            scoreP2.addClass("current-player");
        } else {
            currentPlayer = "player1";
            scoreP2.removeClass("current-player");
            scoreP1.addClass("current-player");
        }
    }

    function connected4(arr) {
        if (currentPlayer == "player1") {
            winstyle = "slot-win-p1";
        } else {
            winstyle = "slot-win-p2";
        }
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass(winstyle);
        }
        $("#win-message").text(
            "Player " + currentPlayer.substring(6) + " has won the game."
        );
        $(".message-box").addClass("visible");
        $(".message-box").addClass("slide-down");
        $(".cant-click").addClass("visible");
        // currentPlayer;
        // i;
        // $(".message-box").addClass(currentplayer + "-win");
        updateScore(currentPlayer);
        switchPlayer();
    }
    function resetScore() {
        scorePlayer1 = 0;
        scorePlayer2 = 0;
        $("#score-p1").text(scorePlayer1);
        $("#score-p2").text(scorePlayer2);
    }

    function updateScore(currentPlayer) {
        console.log(
            "current score player1 ",
            scorePlayer1,
            " current score player 2 ",
            scorePlayer2
        );
        if (currentPlayer == "player1") {
            scorePlayer1++;
        } else {
            scorePlayer2++;
        }
        $("#score-p1").text(scorePlayer1);
        $("#score-p2").text(scorePlayer2);
    }

    function resetBoard() {
        for (var i = 0; i < allSlots.length; i++) {
            console.log("allSlots.eq(i)", allSlots.eq(i));
            allSlots.eq(i).removeClass("player1");
            allSlots.eq(i).removeClass("player2");
            allSlots.eq(i).removeClass(winstyle);
        }
        $(".message-box").removeClass("visible");
        $(".message-box").removeClass("slide-down");
        $(".cant-click").removeClass("visible");
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
            if (slot.hasClass(currentPlayer)) {
                console.log("i hasClass currentPlayer ", i, " counting up");
                count++;
                consecutiveSlots.push(slot);
                if (count === 4) {
                    console.log("found 4 in a row, wow!");
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
            var allCols = $(".column");
            console.log(
                "allCols.eq(x).children().eq(y)",
                allCols.eq(x).children().eq(y)
            );
            return allCols.eq(x).children().eq(y).addClass("slot-win");
        }
    }

    function hardMode() {
        var red = [];
        var yellow = [];
        selectByCoordinates(3, 5).addClass("disabled");
        selectByCoordinates(2, 5).addClass("player1");
        selectByCoordinates(1, 5).addClass("player2");
        selectByCoordinates(0, 5).addClass("player1");
        // selectByCoordinates(5, 3).addClass("player2");

        selectByCoordinates(4, 5).addClass("player2");
        selectByCoordinates(5, 5).addClass("player1");
        selectByCoordinates(6, 5).addClass("player2");
        // selectByCoordinates(1, 3).addClass("player1");
    }

    function checkForDiagonals(rowIndex, colIndex, slotsInRow, slotsInCol) {
        console.log("checkForDiagonals starting to check");
        console.log("rowIndex ", rowIndex, " & colIndex ", colIndex);
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
