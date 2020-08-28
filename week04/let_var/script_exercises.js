// EX 1

let arr = [0, 1, 2, 3];

//let newArr = [...arr].slice();

const fn = (arr) => {
    var newArr = [...arr];
    return newArr.reverse();
};

console.log("arr", arr);
console.log(fn(arr));

// EX 1.1
let arr = [0, 1, 2, 3];

const fn = (arr) => (newArr = [...arr].reverse());

console.log("arr", arr);
console.log(fn(arr));

/// EX 2

let arr1 = ["a", "b"];
let arr2 = [1, 2];

const arrayAdd = (arr1, arr2) => (addedArr = [...arr1, ...arr2]);

console.log(arrayAdd(arr1, arr2));

// EX 3

const logInfo = (city) => {
    let { name, country, numPeople } = city;
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
};

const stadt = {
    name: "Berlin",
    country: "Germany",
    numPeople: "2,5 million",
};

logInfo(stadt);

// EX 4
const stadt = {
    name: "Berlin",
    country: "Germany",
    numPeople: "2,5 million",
};

const stadt2 = {
    name: "New York",
    country: "USA",
    numPeople: "8,5 million",
};

let getNameAndCountry = function (city) {
    var name = city.name;
    var country = city.country;
    var array = [name, country];
    return array;
};

console.log(getNameAndCountry(stadt));
// ende

// OBJ DATA
const stadt = {
    name: "Berlin",
    country: "Germanyyyyy",
    numPeople: "2,5 million",
};

const stadt2 = {
    name: "New York",
    country: "USA",
    numPeople: "8,5 million",
};

/// HIPSTER CODE

let getNameAndCountry = ({ name, country }) => [name, country];
console.log(getNameAndCountry(stadt));

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    /// city2 = { country: "Germany"} ist der default parameter, wenn city 2 undefined ist
    let [, country] = getNameAndCountryRETRO(city2);
    return {
        ...city1,
        country,
    };
};

//// RETRO CODE
function getNameAndCountryRETRO(cityObj, cityObj2) {
    if (cityObj2 == "undefined") {
        var cityObj2 = { name: "", country: "Germany" };
    }
    // var array = [cityObj.name, cityObj.country];
    // return array;
    retrun[(cityObj.name, cityObj.country)];
}

function getRelocatedCityRETRO(city1, city2) {
    var newCity = {};
    for (var prop in city1) {
        newCity[prop] = city[prop];
    }
    newCity.country = getNameAndCountryRETRO(city2)[1];
    return newCity;
}

console.log("retro", getNameAndCountryRETRO(stadt));

console.log("retro", getRelocatedCityRETRO(stadt, stadt2));
console.log("retro", getRelocatedCityRETRO(stadt));
console.log("error?", getRelocatedCity(stadt, stadt2));

///RETRO
