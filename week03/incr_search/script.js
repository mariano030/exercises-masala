(function (countries) {
    var inputField = $('input[name="search"]');
    var resultsContainer = $(".results-container");
    var currentlyHigh;

    inputField.on("input", function () {
        if (inputField.val().length == 0) {
            console.log("shit's empty yo");
            countriesHtml = "";
        } else {
            var inputValue = inputField.val();
            var results = [];
            for (var i = 0; i < countries.length; i++) {
                if (
                    countries[i]
                        .toLowerCase()
                        .indexOf(inputValue.toLowerCase()) === 0
                ) {
                    results.push(countries[i]);
                } // closes if
                if (results.length === 4) {
                    break;
                } // closes if
            } // closes for
            console.log("results: ", results);
            if (results.length == 0) {
                console.log("results.length == 0");
                countriesHtml = "<p>Sorry, no results. Try again!</p>";
            } else {
                var countriesHtml = "";
                for (var i = 0; i < results.length; i++) {
                    countriesHtml +=
                        "<p class='country'>" + results[i] + "</p>";
                }
            }
        }
        resultsContainer.html(countriesHtml);
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
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
