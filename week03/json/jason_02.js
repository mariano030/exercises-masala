var superman = {
    name: "superman",
    secretIdentity: "Clasrk Kent",
    age: 77, //<<-- this last comma after the last dataset is not permitted in json};
};

// serialization   - makes json obj into string
var json = JSON.stringify(superman, null, 4); // can pass whitelist argument instead of null ['name']

// deserialization  - creates
var obj = JSON.parse(json);

// json does not have the bigInt datatype
// json does not know undefined - will be skipped!
// symbols are skipped aswell
//

var obj = {
    str: "spiced academy",
    num: 3.124,
    undef: undefined,
    // bigInt: 2n*
    bool: 0,
    nil: null,
    fn: function () {}, // skipped aswel
    arr: [],
    date: new Date(),
};



var user = Object.create(           // object.create 
    {
        isUser: true,   // is property of it's prototype
    }
    {
        username: { value: "Johannes", enumerable: true}  // will not be part of the obj but data will be there with user.username
        password: { value: "supersecret", enumerable: false}
    }
)

console.log(user.username); // returns Johannes

console.log(JSON.stringify(user)); // returns empty for password (enumerable)


// both syntaxes do the same thing, but the .parse one is FASTER
var data1 = { foo: 42, bar: 1337};           
var data2 = JSON.parse('{"goo":42,"bar:1337}');  // I'm fast as fun!!

console.log(data1, data2); // returns the same thing


var json= '["SPICED]'; // missing 2nd "

try {                                               // use try to prevent applicaiton from stopping
    var obj = JSON.parse(json);                     // if jason is invalid
} catch {
    console.log(err.name, err.message);             // all errors have err prototype - 
} finally {                                         // so properties name / message are present with all of them
    console.log("always executed");
}