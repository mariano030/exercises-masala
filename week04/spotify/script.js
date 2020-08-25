console.log("sane...");
(function () {
    console.log($);

    var submitButton = $("#form");
    var nextUrl;
    var image;
    var payload;
    var searchContainer = $("search-container");
    var searchMsg;
    var searchMsgHtml;
    var userInput;
    var dropdownInput;
    var resultDivHtml;
    var infiniteScroll = false;

    if (location.search.indexOf("?scroll=infinite") > -1) {
        console.log("location.search: ", location.search);
        console.log("die leute woll'n den infinte scroll");
        infiniteScroll = true;
        // hide the more button if this right here is true
        checkScrollPosition();
    }

    // the fat is in the fire, a fryer made of chicken wire,
    // getting sick and tired of a friggin' liar

    submitButton.on("submit", function (e) {
        userInput = $('input[name="search"]').val();
        console.log(userInput);
        dropdownInput = $(".artist-or-album").val();
        e.preventDefault(); // was war das nochmal??

        console.log(userInput);
        console.log(dropdownInput);
        $("div").remove(".one-result-container");
        $("div").remove(".results-msg");
        $("div").remove(".next");

        if (userInput != "") {
            console.log("starting ajax");
            $.ajax({
                url: "https://spicedify.herokuapp.com/spotify",
                data: {
                    q: userInput,
                    type: dropdownInput,
                },
                success: function (payload) {
                    payload = payload.artists || payload.albums;
                    nextUrl = null;
                    image = null;
                    console.log("ajax success...");

                    // IVANA TRICK resultsContainer.append(getResultsHtml(payload.items));
                    getReslutsHtml(payload.items);
                    if (infiniteScroll) {
                        // no next button
                    } else {
                        setNextUrl(payload.next);
                        $(".next").on("click", function () {
                            console.log("you clicked");
                            secondAjax();
                        });
                    }
                    console.log(nextUrl);
                    console.log(payload);
                    //console.log(payload.items[0].name);
                    //console.log("image url?", payload.items[0].images[1].url);
                    // 3 things we need: external_url , images , name ??artist??
                    //console.log(payload.artists.items.eq(0).images);
                    //console.log(payload.artists.eq(0).items.eq(0).images);
                    // gonna run once everything went swell
                },
            }); // ajax end
        }
    }); // end submit listener
    function twentyMore(nextUrl) {
        $.ajax({
            xhrFields: {
                withCredentials: true,
            },
            url: nextUrl,
            data: {
                q: userInput,
                type: dropdownInput,
            },
            success: function (payload) {
                payload = payload.artists || payload.albums;
                nextUrl = null;
                image = null;
                console.log("ajax success...");
                if (payload.image) {
                    console.log("image found");
                    image = payload[0].image;
                }
                console.log(nextUrl);
                console.log(payload);
                console.log(payload.items[0].name);
                console.log("image url?", payload.items[0].images[1].url);
                // 3 things we need: external_url , images , name ??artist??
                //console.log(payload.artists.items.eq(0).images);
                //console.log(payload.artists.eq(0).items.eq(0).images);
                // gonna run once everything went swell
                if (payload.items.length < 0) {
                    searchMsg = "Sorry, there are no results for " + userInput;
                } else {
                    searchMsg = "Displaying results for " + userInput;
                }
                searchMsgHtml =
                    "<div class='results-msg'>" + searchMsg + "</div>";

                $(".results-container").append(searchMsgHtml);
                for (var i = 0; i < payload.items.length; i++) {
                    console.log(searchMsgHtml);
                    //$("results-container").add(searchMsgHtml);
                    h2 = payload.items[i].name;
                    linkUrl = payload.items[i].external_urls.spotify;
                    console.log(
                        "payload.items[i].external_urls",
                        payload.items[i].external_urls.spotify
                    );
                    console.log(
                        "payload.items[i}.images[2]: ",
                        payload.items[0].images[1].url
                    );
                    if (payload.items[i].images[i]) {
                        console.log(payload.items[0].images[1].url);
                        imageUrl = payload.items[i].images[1].url;
                    } else {
                        imageUrl = "assets/generic.png";
                    }

                    resultsDivHtml =
                        "<div class='one-result-container hover'><div class='result-left'><a href='" +
                        linkUrl +
                        "' target='_blank'><img src='" +
                        imageUrl +
                        "' alt='image' /></a></div><div class='result-right'> <a href='" +
                        linkUrl +
                        "' target='_blank'> <h2>" +
                        h2 +
                        "</h2><p id='seartch-type'>" +
                        "</p></div>";

                    //$("results-container").add(searchMsgHtml);
                    console.log(resultsDivHtml);
                    $(".results-container").append(resultsDivHtml);
                    setNextUrl(payload.next);
                }
            },
        }); // ajax end
    }
    function setNextUrl(next) {
        console.log("setNextUrl running");
        if (next) {
            console.log("gibt ein next");
            nextUrl = next.replace(
                "https://api.spotify.com/v1/",
                "https://spicedify.herokuapp.com/spotify"
            );
            console.log(next, resultDivHtml);
            nextUrlHtml = "<div class='next'>see more results</div>";
            $(".results-container").append(nextUrlHtml);
            // " + nextUrl + "
            // $(".results-container").append(nextUrlHtml);
            // $(".next").on("click", twentyMore(nextUrl));
            // use visiblity hidden for "see more results" button
        }
    }
    function getReslutsHtml(items) {
        if (items.length < 1) {
            console.log("no items found");
            searchMsg = "Sorry, there are no results for: " + userInput;
        } else {
            searchMsg = "Displaying results for: " + userInput;
        }
        searchMsgHtml = "<div class='results-msg'>" + searchMsg + "</div>";

        $(".results-container").append(searchMsgHtml);
        for (var i = 0; i < items.length; i++) {
            console.log(searchMsgHtml);
            //$("results-container").add(searchMsgHtml);
            h2 = items[i].name;
            linkUrl = items[i].external_urls.spotify;
            // console.log(
            //     "payload.items[i].external_urls",
            //     payload.items[i].external_urls.spotify
            // );
            // console.log(
            //     "payload.items[i}.images[2]: ",
            //     payload.items[0].images[1].url
            // );
            if (items[i].images[i]) {
                console.log(items[0].images[1].url);
                imageUrl = items[i].images[1].url;
            } else {
                imageUrl = "assets/generic.png";
            }

            resultsDivHtml =
                "<div class='one-result-container hover'><div class='result-left'><a href='" +
                linkUrl +
                "' target='_blank'><img src='" +
                imageUrl +
                "' alt='image' /></a></div><div class='result-right'> <a href='" +
                linkUrl +
                "' target='_blank'> <h2>" +
                h2 +
                "</h2><p id='seartch-type'>" +
                "</p></div>";

            //$("results-container").add(searchMsgHtml);
            console.log(resultsDivHtml);
            $(".results-container").append(resultsDivHtml);
        }
        return searchMsgHtml;
        //return names; only for IVANAS trick of generating p tags here and hand them over as "names"
    }

    function checkScrollPosition() {
        // window height
        // document height?
        // scroll top
        setTimeout(function () {
            console.log($(window).height());
            console.log($(document).height());
            console.log($(document).scrollTop());
            if (
                $(window).height() + $(document).height() - 400 ===
                $(document).scrollTop()
            ) {
                // adjust ifblock for "close to bottom"
                console.log("scrolled down");
                // if user is scrolled near to end of document
            } else {
                // if user is NOT scrolled near the end
                checkScrollPosition();
            }
        }, 5000);
    }

    function secondAjax() {
        console.log("second AJAX running #####");
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",

            success: function (payload) {
                payload = payload.artists || payload.albums;
                nextUrl = null;
                image = null;
                console.log("ajax success...");

                // IVANA TRICK resultsContainer.append(getResultsHtml(payload.items));
                getReslutsHtml(payload.items);
                console.log(nextUrl);
                console.log(payload);
                //console.log(payload.items[0].name);
                //console.log("image url?", payload.items[0].images[1].url);
                // 3 things we need: external_url , images , name ??artist??
                //console.log(payload.artists.items.eq(0).images);
                //console.log(payload.artists.eq(0).items.eq(0).images);
                // gonna run once everything went swell
            },
        }); // ajax end
    }

    // function twentyMore(nextUrl) {
    //     $.ajax({
    //         url: nextUrl
    //         },
    //         success: function (payload) {
    //             payload = payload.artists || payload.albums;
    //             nextUrl = null;
    //             image = null;
    //             console.log("ajax success...");
    //             if (payload.image) {
    //                 console.log("image found");
    //                 image = payload[0].image;
    //             }
    //             setNextUrl(payload.next);
    //             console.log(nextUrl);
    //             console.log(payload);
    //             console.log(payload.items[0].name);
    //             console.log("image url?", payload.items[0].images[1].url);
    //             // 3 things we need: external_url , images , name ??artist??
    //             //console.log(payload.artists.items.eq(0).images);
    //             //console.log(payload.artists.eq(0).items.eq(0).images);
    //             // gonna run once everything went swell
    //             if (payload.items.length < 0) {
    //                 searchMsg = "Sorry, there are no results for " + userInput;
    //             } else {
    //                 searchMsg = "Displaying results for " + userInput;
    //             }
    //             searchMsgHtml =
    //                 "<div class='results-msg'>" + searchMsg + "</div>";

    //             $(".results-container").append(searchMsgHtml);
    //             for (var i = 0; i < payload.items.length; i++) {
    //                 console.log(searchMsgHtml);
    //                 //$("results-container").add(searchMsgHtml);
    //                 h2 = payload.items[i].name;
    //                 linkUrl = payload.items[i].external_urls.spotify;
    //                 console.log(
    //                     "payload.items[i].external_urls",
    //                     payload.items[i].external_urls.spotify
    //                 );
    //                 console.log(
    //                     "payload.items[i}.images[2]: ",
    //                     payload.items[0].images[1].url
    //                 );
    //                 if (payload.items[i].images[i]) {
    //                     console.log(payload.items[0].images[1].url);
    //                     imageUrl = payload.items[i].images[1].url;
    //                 } else {
    //                     imageUrl = "assets/generic.png";
    //                 }

    //                 resultsDivHtml =
    //                     "<div class='one-result-container hover'><div class='result-left'><a href='" +
    //                     linkUrl +
    //                     "' target='_blank'><img src='" +
    //                     imageUrl +
    //                     "' alt='image' /></a></div><div class='result-right'> <a href='" +
    //                     linkUrl +
    //                     "' target='_blank'> <h2>" +
    //                     h2 +
    //                     "</h2><p id='seartch-type'>" +
    //                     "</p></div>";

    //                 //$("results-container").add(searchMsgHtml);
    //                 console.log(resultsDivHtml);
    //                 $(".results-container").append(resultsDivHtml);
    //             }
    //         },
    //     }); // ajax end
})(); // end iife

// more results !! ??

// .eq() ONLY works on jquery objects not on vanilla js objects
// element = document.querySelector(selectors);

// https://spicedify.herokuapp.com/search?query=mf+doom&type=album&offset=20&limit=20

// bijelo dugme
