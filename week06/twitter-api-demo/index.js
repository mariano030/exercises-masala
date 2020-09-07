const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js"); // with file you can leave out extension

app.use(express.static("./ticker_jquery_ajax_json"));

// this route is to fake a  headlines.json that would be requested here ( by script.js gb)
app.get("/headlines.json", (req, res) => {
    console.log("request for json has been made!");

    // 4 things
    // 1. get the token
    getToken((err, bearerToken) => {
        if (err) {
            console.log(err);
            return;
        }
        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log("err in getTweets", err);
                return;
            }

            // do stuff with the tweets you have
        });
        cxonsole.log("tweets in index.js!!", tweets);
        const filteredTweets = filterTweets(tweets);
        // array of objects is needed format!
        // 2. with the token make a request for tweets
        // 3. once we receive the tweets, filter them
        // 4. send filtered tweets to the client as json

        res.json(filteredTweets);
    });
});

app.listen(3000, () => console.log("twitter api server listening"));
