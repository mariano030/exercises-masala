console.log("you are sane");
console.log("you need to use http-server for this to work... fyi");

///////////////////////// ### BLACK BOX #### //////////////////////////
Handlebars.templates = Handlebars.templates || {};

var templates = document.querySelectorAll(
    'script[type="text/x-handlebars-template"]'
);

Array.prototype.slice.call(templates).forEach(function (script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});
//////////////////////////////////////////////////////////////////////

$.ajax({
    url: "authors.json",
    method: "GET",
    success: function (data) {
        console.log(data);

        var html = Handlebars.templates.wichtig(data);

        console.log(html);

        // $('#countries').html(html);

        $("#main-container").html(html);
    },
});
