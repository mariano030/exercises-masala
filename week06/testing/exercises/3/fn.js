module.exports = function fn(arg) {
    let returnVal = [];
    if (!Array.isArray(arg)) {
        var output = [];
        var newArg = [arg];
        arg = newArg.slice();
    }
    for (let i = 0; i < arg.length; i++) {
        if (arg[i].typeOf != "string") {
            return null;
        }
        for (let x = arg[i].length - 1; x >= 0; x--) {
            newString += arg[i][x];
            returnVal.push(newString);
        }
        if (newString.length > 1) {
            newString = newString.join();
        }
        output.push(newString);
    }
    if (arg.length == 0) {
        arg.concat();
    }
    return arg;
    s;
    console.log(arg);

    // else if (arg.typeOf != "string") {
    //     return null;
    // } else {
    //     if (arrayFound = true) {
    //         for (let i =0; i < arg.length; i++) {

    //         }
    //     }
    // }

    // // if array - is array
    //     // if !string

    // // if it is not an array, make it an array
    //     // make it an array

    // if ( && !Array.isArray(arg)) {
    //     return null;
    // } else if (Array.isArray(arg)) {
    //     var promises = [];
    //     for (let i = 0; i < arg.length; i++) {
    //         promises.push(new Promise (function (resolve,reject) {
    //             fn(arg[i])
    //         }))

    //     }
    //     Promise.all(promises).then()
    // } else {
    //     // it's a string
    //     for (let i = arg.length; i >= 0; i--) {
    //         let newString += arg[i]

    //     }
    //     return newString;
    // }
};
