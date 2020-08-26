var x = 500;

var doubleX = 0;

function timesTwo(num) {
    return num * 2;
}

doubleX = timesTwo(x);

console.log(doubleX);

var numbers;

numbers = [x, doubleX];

console.log(numbers);

numbers.forEach(function (i) {
    console.log(i);
});

numbers = {};

numbers.y = doubleX;
