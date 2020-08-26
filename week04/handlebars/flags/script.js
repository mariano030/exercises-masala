///////////////////////// ### BLACK BOX #### //////////////////////////
Handlebars.templates = Handlebars.templates || {};

var templates = document.querySelectorAll(
    'script[type="text/x-handlebars-template"]'
);

Array.prototype.slice.call(templates).forEach(function (script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});
//////////////////////////////////////////////////////////////////////

document.body.innerHTML = Handlebars.templates.hello({ name: "World" });






 

var html = Handlebars.templates.countriesTemplate(countries[0]);

$.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    success: function (countries) {
        console.log(countries);

        //document.body.innerHTML = html;
    },
});
