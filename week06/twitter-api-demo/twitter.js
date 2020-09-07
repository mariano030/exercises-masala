const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

module.exports.getToken = function (callback) {
    let creds = `${consumerKey}:${consumerSecret}`;
    let encodedCreds = new Buffer.from(creds).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    // options - obj that has info about the request we're about to make
    // cb - callback that runs WHEN we get info back from the request
    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");

    function cb(resp) {
        if (resp.statusCode != 200) {
            // something went wrong!
            callback(resp.statusCode);
            return;
        }

        // if we get to this point, that means everything went well!
        let body = "";
        resp.on("data", (chunk) => {
            body += chunk;
        });

        resp.on("end", () => {
            // console.log('body in twitter.js: ', body);
            let parsedBody = JSON.parse(body);
            // console.log(parsedBody);
            callback(null, parsedBody.access_token);
        });
    }
};

module.exports.getTweets = function (bearerToken, callback) {
    // example request url:
    // 1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

    console.log("getTweets running");
    const options = {
        host: "api.twitter.com",
        path: "/1.1/statuses/user_timeline.json",
        method: "GET",
        query: "screen_name=nytimes&twitterapi&tweet_mode=extended&count=2",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    // options - obj that has info about the request we're about to make
    // cb - callback that runs WHEN we get info back from the request
    const req = https.request(options, cb2);
    req.end("grant_type=client_credentials");

    function cb2(resp) {
        if (resp.statusCode != 200) {
            // something went wrong!
            callback(resp.statusCode);
            return;
        }

        // if we get to this point, that means everything went well!
        let body = "";
        resp.on("data", (chunk) => {
            body += chunk;
        });

        resp.on("end", () => {
            // console.log('body in twitter.js: ', body);
            let parsedBody = JSON.parse(body);
            // console.log(parsedBody);
            callback(null, parsedBody.access_token);
        });

        console.log(resp);
    }
    // this function gets tweets from Twitter's API
    // each request we make for tweets, we HAVE to do it with the token
    // this is for you to complete :)
    console.log("getTweets 'done'");
};

module.exports.filterTweets = function (tweets) {
    // once we have the tweets from Twitter, this function filters them / cleans them up!
    // this is for you to complete :)
};

// PARSE        json -> javascript   // JSON.parse()
// STRINGIFY    javascript -> JSON   // .stringify
