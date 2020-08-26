var person = {
    name: "luca",
    age: 42,
    powers: ["lots of shirts", "coding"],
    residences: {
        NY: "main",
    },
};

var template = Handlebars.compile("<div> Hello {{name}}</div>");


// select the template you want via CSS selector 
var template = Handlebars.compile(document.querySelector("#hello-template")).innerHTML;

// compile the template into to acutal html
var templateFn = Handlebars.compile(template);

// create html and put my data into the placeholders
var html = templateFn(person);



// or 
var template = Handlebars.compile("#hello-template");

var html = template(person);

var html =""
html += "<div>Hello " + person.name + "</div>";


///////////////




for var i =0; i< person.powers.length; <



