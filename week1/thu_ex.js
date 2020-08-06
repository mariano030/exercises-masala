// ex 1

console.log("exercise 1:");

function each(objOrArray, callback) {
    if (Array.isArray(objOrArray)) {
        for (var i = 0; i < objOrArray.lenght - 1; i++) {
            callback(objOrArray[i], i);
        }
    } else {
        for (var name in objOrArray) {
            callback(objOrArray[name], name);
        }
    }
}

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

// obj test:
each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

console.log("exercise 2:");

function switcher(arr) {
    var newArr = arr.slice();
    return newArr.reverse();
}

myArr = [1, 2, 3, 4];
console.log(switcher(myArr));
//console.log("myArr after switcher:", myArr);

// ex 3

console.log("exercise 3:");

function getLessThanZero(arr) {
    return (newArr = arr.filter(function (val) {
        return val < 0;
    }));
}

console.log(
    "getLessThanZero([1, 2, -1, -90, 10]:",
    getLessThanZero([1, 2, -1, -90, 10])
);
console.log("getLessThanZero([1, 2]:", getLessThanZero([1, 2])); //[]
