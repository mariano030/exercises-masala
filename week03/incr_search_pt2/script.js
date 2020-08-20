(function (countries) {
    var inputField = $('input[name="search"]');
    var resultsContainer = $(".results-container");
    var currentlyHigh;

    inputField.on("input", function () {
        clearTimeout();
        if (inputField.val().length == 0) {
            console.log("shit's empty yo");
            countriesHtml = "";
            resultsContainer.addClass("invisible");
        } else {
            resultsContainer.removeClass("invisible");
            var inputValue = inputField.val();
            var results = [];
            setTimeout(function () {
                $.ajax({
                    url: "https://spicedworld.herokuapp.com/",
                    mehtod: "GET", // is default could be left out
                    data: {
                        // <<-- the data object
                        q: inputValue, // this is my query - "a" is hardcoded - make dynamic
                    },
                    success: function (results) {
                        // *** SUCESS ***
                        // use inputValue to compare with new input querry
                        if (inputValue == inputField.val()) {
                            console.log(
                                "results from success function",
                                results
                            );

                            if (results.length == 0) {
                                console.log("results is 0 elements long");
                                console.log("results.length == 0");
                                countriesHtml =
                                    "<p>Sorry, no results. Try again!</p>";
                            } else {
                                console.log("results is longer than 0");
                                var countriesHtml = "";
                                for (var i = 0; i < results.length; i++) {
                                    console.log("results has: ", i);
                                    countriesHtml +=
                                        "<p class='country'>" +
                                        results[i] +
                                        "</p>";
                                }
                            }
                            resultsContainer.html(countriesHtml);
                        } else {
                            console.log("there is a new character in town");
                            console.log("this", this);
                            return;
                        }
                    },
                });
            }, 125);
        }
    }); // closes "input" event

    resultsContainer.on("mouseover", "p", function (e) {
        e.preventDefault(); // what is this?
        console.log("you hovered a <p>");
        console.log("e.target: ", e.target);
        console.log(e.target.firstChild.wholeText);
        $(e).removeClass("highlight");
        $(e.target).addClass("highlight");
        console.log(
            'mouseover: e.target.hasClass("highlight"): ',
            $(e.target).hasClass("highlight")
        );
        resultsContainer.on("mouseout", "p", function (e) {
            console.log("blabla:", $(e.target));
            $(e.target).removeClass("highlight");
        });
        //inputField.val(e.target.firstChild.wholeText);
        //countriesHtml = "<i>What a wonderful place to visit!</i>";
        //resultsContainer.html(countriesHtml);
    });

    resultsContainer.on("mousedown", "p", function (e) {
        console.log("you clicked a <p>");
        console.log("e.target: ", e.target);
        console.log(e.target.firstChild.wholeText);
        inputField.val(e.target.firstChild.wholeText);
        countriesHtml = "<i>What a wonderful place to visit!</i>";
        resultsContainer.html(countriesHtml);
    });

    inputField.on("keydown", function (e) {
        // see if the key is the famous down key
        console.log("pressing key", e.keyCode);

        if (e.keyCode === 40) {
            console.log("you're going down!!!");
            console.log("checking for highlights....");
            // IF HIGHLIGHT == FALSE - no highlight
            if (!resultsContainer.children().hasClass("highlight")) {
                // add to first!   - WORKING
                console.log("none has highlight");
                console.log("add to first here");
                resultsContainer.children().first().addClass("highlight");
                console.log(resultsContainer.children().first());
            } else {
                // ELSE
                if (resultsContainer.children().last().hasClass("highlight")) {
                    // last one has it  - WORKING
                    console.log("last one has it!");
                    // do nothing
                    console.log("I'll do nothing, as per usual");
                } else {
                    // there is a highlight-ed one but it's not the last one
                    console.log("highlight, yes. - last one, no!");
                    //give to next   - start from the one that still has it!
                    currentlyHigh = $(".highlight");
                    console.log(currentlyHigh);
                    currentlyHigh.next().addClass("highlight");
                    currentlyHigh.removeClass("highlight");
                }
            }
        } else if (e.keyCode == 38) {
            console.log("UP key");
            console.log("you're going UPPP!!!");
            console.log("checking for highlights....");
            // IF HIGHLIGHT == FALSE - no highlight
            if (!resultsContainer.children().hasClass("highlight")) {
                // add to first!   - WORKING
                console.log("none has highlight");
                console.log("add to LAST here");
                resultsContainer.children().last().addClass("highlight");
                console.log(resultsContainer.children().last());
            } else {
                // ELSE
                if (resultsContainer.children().first().hasClass("highlight")) {
                    // first one has it  - WORKING
                    console.log("first one has it!");
                    // do nothing
                    console.log("I'll do nothing, as per usual");
                } else {
                    // there is a highlight-ed one but it's not the first one
                    console.log("highlight, yes. - first one, no!");
                    //give to previous   - start from the one that still has it!
                    currentlyHigh = $(".highlight");
                    console.log(currentlyHigh);
                    currentlyHigh.prev().addClass("highlight");
                    currentlyHigh.removeClass("highlight");
                }
            }
        } else if (e.keyCode == 13) {
            currentlyHigh = $(".highlight");
            inputField.val(currentlyHigh);
            console.log(currentlyHigh);
        }
    });

    inputField.on("blur", function (e) {
        console.log("blur triggered!");
        resultsContainer.addClass("invisible");
    });

    inputField.on("focus", function (e) {
        console.log("focus triggered!");
        resultsContainer.removeClass("invisible");
    });
})();
