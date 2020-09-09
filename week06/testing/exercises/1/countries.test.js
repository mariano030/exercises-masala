const countries = require("./countries");
const { TestScheduler, TestWatcher } = require("jest");

test("When find is passed an empty string, it returns an empty array", () => {
    expect(countries.find("")).toStrictEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    expect(countries.find("A").length).toStrictEqual(4);
});

test("search is case sensitive", () => {
    expect(countries.find("a").length).toBe(4);
});

test("no matching countries, return an empty array", () => {
    expect(countries.find("nocountry")).toStrictEqual([]);
});
/*

    When find is passed an empty string, it returns an empty array
    The array that it returns contains no more than four matches
    The search is case insensitive
    If there are no matching countries, an empty array is returned

*/
