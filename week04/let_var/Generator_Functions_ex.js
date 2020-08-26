/*
Implement FizzBuzz using a generator function and a for...of loop.

    First, write a generator function that yields the numbers between 1 and 100 in order with the following exceptions

        If the number is divisible by 3, yield the string "fizz"

        If the number is divisible by 5, yield the string "buzz"

        If the number is divisible by both 3 and 5, yield the string "fizzbuzz"

    Then write a for...of loop that loops through the values yielded by the generator function and logs each one

*/

/// the generator function* is the cinema - it can be filled on any day
/// the iterator is the guy working TODAY that knows how many seats (yields) are still available
//and how many seats (yields) are already taken
/// the for of loop lets the ppl in as long as the iterator says its cool
console.log("NEEEEEEEEEEEEEEEEEEEEEW");
function* fizzBuzz() {
    for (var i = 0; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            yield "fizzbuzz";
        } else if (i % 5 === 0) {
            yield "buzz";
        } else if (i % 3 === 0) {
            yield "fizz";
        } else {
            yield i;
        }
    }
}

let it = fizzBuzz(); // i am creating a new iteration of fizzBuzz referenced by the var name it

//const result = it.next();  // this would have been the first execution of the part before the first yield  but i am doing
// it in hte results loop anyways - so don't want to do first yiel here

console.log("it.next()", it.next());
// ...Or you can use "for of loops" to iterate over all yields
for (let result of it) {
    console.log(result);
}

const myArr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "it's the then crack commandments",
];

myArr.reverse();

function* yieldReverse(arr) {
    let arrReverse = [...arr].reverse();
    for (let i = 0; i < arrReverse.length; i++) {
        yield arrReverse[i];
    }
}

const iteration = yieldReverse(myArr); // no next needed this is just assigning it to my "iteration"

for (var result2 of iteration) {
    // for OF loop iterates through all the yields for me, thank you for of!
    // for OF (course)
    console.log(result2);
}
console.log("I've been in this game for years");
