var interval = setInterval(function () {
    var count = parseInt($("#timer")).text());
    $("#timer").text(count + 10);
}, 10); // setInterval(toDo,10)


var xhr = new XMLHttpRequest();

xhr.open("GET", "http://cat-fact.herokuapp.com/facts/random");

xhr.setRequestHeader("Authorization", "Basic exampletexthereffsaq");

// STATE UNSENT
xhr.send();
// STATE LOADING
xhr.addEventListener("readystatechange", function() {
    XMLHttpRequest.
})


// in jquery's .ajax method ($.ajax) the data for the request is delivered as an object
// if the .ajax mehtod from jquery detects json as data type it will parse it to js automatically
// jquery .ajax is automatically asynchronous
// can be passed "success" (called when successful), "error" (called if error occurs) &
// "complete" function (after completion, independent of success/error - like finally)

// always cool... same origin : protocol + hostname + port

// http-serve -c-1

