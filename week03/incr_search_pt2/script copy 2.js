(function (countries) {
    var inputField = $('input[name="search"]');
    var resultsContainer = $(".results-container");

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
            // highlights ??
            if (resultsContainer.children().hasClass("highlight")) {
                // yupp highlights !!
                console.log("highlight vorhanden!!");
                resultsContainer.children().each(function (e) {
                    console.log("each-loop");
                    console.log("does .last() hasClass() highlight?");
                    if ($(this).children().last().hasClass("highlight")) {
                        console.log("last CHILD HAS it! - do nothing");
                        console.log(
                            '$(this).children().last().hasClass("highlight"): ',
                            $(this).children().last().hasClass("highlight")
                        );

                        return;
                    } else {
                        console.log(
                            " .last() hasClass() highlight? NOPEsies! - muss eins in der mitte sein"
                        );
                        $(this)
                            .children()
                            .each(function () {
                                $(this).removeClass("highlight");
                            });
                        console.log("did it remove it?");
                        $(this).children().next().addClass("highlight");
                        //$(this).children().first().removeClass("highlight");
                        //$(this).first().addClass("highlight");
                    }
                });
            } else {
            }
            // NO highlights
            console.log("keine highlights vorhanden! ...");
            // add class
            resultsContainer.children().first().addClass("highlight");
            // function next one?
        }
        if (e.keyCode == 38) {
            console.log("UP key");
        }
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
