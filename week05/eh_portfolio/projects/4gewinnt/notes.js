// NOTES // NOTES // NOTES // NOTES //
//////////////////////////////////////
//////////// 4 GEWINNT ///////////////
//////////////////////////////////////

// color palette

// every round it gets harder - border gets less till squares??

// select your game!   - 4 gewinnt // what's the german number? // call of duty modern warfare

// best of 1 ? best of 3 ? best of 5?

// replay option

// animation of some sorts?

// winner screen wth replay option - loser starts next game!

// score tracker?
// local storage?

// draw scenario

// who's turn is it?

// dancing animal???
// konfetti partikel???

// bonus indicate the winning 4

// bonus add keyboard functionality

// physics animaiton stuff is metter.js

// cheat reset: location.reload()

// diagonal bit:

function checkForDiagonalVicotry() {
    // do something in here to grab the elements to check...
    // and call checkforvictory here
}

// create all possible diagonals with at least 4 in it, run them through

// alternative for diagonals - use coordinates
// for 3,3 - check two directions
// go left 3 and down 3 then step up like a ladder
// go left 3 and up 3 then step down like a ladder

// check all possible winning 4 for each one on the board... :/

// +5 and +7 approach - need to make sure two elements don't end up on same column or jumps two columns!!!
// needs to be in the next column - no where else

// th col + row approach: row + col = content == every row of 4s (or 3s or 5s) is a diagonal one
// only giving us one way with plus +
// look at col - row = get the other direction with negative values
// check if ...

// use coordinates

// ## TODOS 3 down left/right

// go down 3 rows and left 3 columns
// create "list" from 3-3 down that steps up and right one, each time
// list for one direction - 1

// go down 3 rows and right 3 columns
// create "list" from 3-3 down that steps up and left one, eacht time
// list for 2nd direction - 2

//if checkForVictory list1 true...
// else checkForVictory list2
// else switch player -- switch player is in check for victory ( change? )

// ## TODO possible combinations

// find possible combinations for last piece
// create array with all combinations where last piece is on
// create array/obj with combinationArr[indexwherefound] for each indexwherefound

// while i < array all combinations where last piece is found
// if checkForVictory is false i++ (remove switch player from check for victory)

//victory.html("<p> The winner is " + currentPlayer + "</p>");
