const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js"); // with file you can leave out extension

app.use(express.static("./ticker"));

const tweets = [];

// this route is to fake a  headlines.json that would be requested here ( by script.js gb)
app.get("/headlines.json", (req, res) => {
    console.log("request for json has been made!");
    let response = [];
    // 4 things
    // 1. get the token

    getToken().then((token) => {
        Promise.all([
            getTweets(token, "guardiannews"),
            getTweets(token, "nytimes"),
            getTweets(token, "independent"),
            ,
        ])
            .then((tweets) => {
                console.log("tweets: ", tweets);
                console.log("no! problem...");
                const mergedTweets = [
                    ...tweets[0],
                    ...tweets[1],
                    ...tweets[2],
                ].concat();
                console.log(
                    "#################################################### mergedTweets",
                    mergedTweets
                );
                // mergedTweets shape: [{ ... }, { ... }, { ... }, { ... }]

                // sorting IN PLACE -> mergedTweets array is mutated,
                // if you want mergedTweets to not be mutated, you need to first make a copy
                const sortedTweets = mergedTweets.sort(function (a, b) {
                    // ASC: a - b
                    // DESC: b - a

                    // a sorted before b -> -1
                    // keep a and b in the same order -> 0
                    // a sorted after b -> 1

                    return new Date(b.created_at) - new Date(a.created_at);
                });
                console.log("sortedTweets: ", sortedTweets);
                console.log("problem after this?");
                const filteredTweets = filterTweets(sortedTweets);

                return filteredTweets;
            })
            .then((filteredTweets) => {
                res.json(filteredTweets);
            })
            .catch((err) => {
                console.log("an error has occured hmm", err);
            });
    });

    // getToken((err, bearerToken) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     getTweets(bearerToken, (err, tweets) => {
    //         console.log("where are my tweets?");
    //         if (err) {
    //             console.log("err in getTweets", err);
    //             return;
    //         }
    //         const filteredTweets = filterTweets(tweets);
    //         // do stuff with the tweets you have
    //         res.json(filteredTweets);
    //         console.log("done");
    //     });
    //const filteredTweets = filterTweets(tweets);
    // array of objects is needed format!
    // 2. with the token make a request for tweets
    // 3. once we receive the tweets, filter them
    // 4. send filtered tweets to the client as json
});
//});

app.listen(3000, () => console.log("twitter api server listening"));
