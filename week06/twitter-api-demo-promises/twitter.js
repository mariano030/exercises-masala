const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

// 1. get the auth bearertoken -- handover the token
// 2. get the tweets - accept the token - request tweets - handover tweets
// 3. filter the tweets - accept the tweets - filter tweets - handover filtered json
// 4. reply to request with JSON data - bam bam done!

// ....

module.exports.getToken = function () {
    return new Promise((resolve, reject) => {
        let creds = `${consumerKey}:${consumerSecret}`;
        let encodedCreds = new Buffer.from(creds).toString("base64");

        const options = {
            host: "api.twitter.com",
            path: "/oauth2/token",
            method: "POST",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        }; // end of options

        // options - obj that has info about the request we're about to make
        // cb - callback that runs WHEN we get info back from the request
        const req = https.request(options, cb);
        req.end("grant_type=client_credentials");

        function cb(resp) {
            if (!resp) {
                // something went wrong!
                reject(new Error("ERROR"));
                return;
            } else {
                // if we get to this point, that means everything went well!
                let body = "";
                resp.on("data", (chunk) => {
                    body += chunk;
                });

                resp.on("end", () => {
                    // console.log('body in twitter.js: ', body);
                    let parsedBody = JSON.parse(body);
                    // console.log(parsedBody);
                    resolve(parsedBody.access_token);
                });
            }
        }
    });
};

module.exports.getTokenOld = function (callback) {
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

module.exports.getTweets = function (bearerToken) {
    return new Promise((resolve, reject) => {
        // example request url:
        // 1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

        console.log("getTweets running");
        const options = {
            host: "api.twitter.com",
            path:
                "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended&count=16",
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };

        // options - obj that has info about the request we're about to make
        // cb - callback that runs WHEN we get info back from the request
        const req = https.request(options, cb2);
        req.end("grant_type=client_credentials");

        function cb2(resp) {
            if (resp.statusCode != 200) {
                // something went wrong!
                reject(new Error("error", resp.statusCode));
            }

            // if we get to this point, that means everything went well!
            let body = "";
            resp.on("data", (chunk) => {
                body += chunk;
            });

            resp.on("end", () => {
                // console.log('body in twitter.js: ', body);
                let parsedBody = JSON.parse(body);
                //console.log(parsedBody);
                resolve(parsedBody);
            });
        }

        // this function gets tweets from Twitter's API
        // each request we make for tweets, we HAVE to do it with the token
        // this is for you to complete :)
        console.log("getTweets 'done'");
    });
};

module.exports.getTweetsOld = function (bearerToken, callback) {
    // example request url:
    // 1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

    console.log("getTweets running");
    const options = {
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended&count=16",
        method: "GET",
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
            callback(resp);
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
            //console.log(parsedBody);
            callback(null, parsedBody);
        });
    }

    // this function gets tweets from Twitter's API
    // each request we make for tweets, we HAVE to do it with the token
    // this is for you to complete :)
    console.log("getTweets 'done'");
};

module.exports.filterTweets = function (tweets) {
    console.log("tweets", tweets);
    let arrayOfTweetObj = [];
    console.log("loop starting");
    console.log("######### tweeeeets", tweets);
    for (let tweet in tweets) {
        //console.log(tweet);
        if (tweets[tweet].entities.urls.length != 1) {
            console.log("no or more than one url!! - tweet left out");
        } else {
            let splitFullText = tweets[tweet].full_text.split(" http");

            console.log("(the URL url): ", tweets[tweet].entities.urls[0].url);
            // do not us tweets
            let obj = {
                text: splitFullText[0],
                url: tweets[tweet].entities.urls[0].url,
            };

            arrayOfTweetObj.push(obj);
        }

        //console.log("tweet every tweet?", tweets[tweet].full_text);
        //let urlStart = tweets[tweet].full_text.indexOf(" http");
        //tweets[tweet].splice(urlStart);
        //console.log(tweets[tweet].full_text.slice(0, urlStart)); //slice

        //(0, urlStart));
    }
    console.log("arrayOfTweetObj ", arrayOfTweetObj);
    return arrayOfTweetObj;
    // once we have the tweets from Twitter, this function filters them / cleans them up!
    // this is for you to complete :)
};

// PARSE        json -> javascript   // JSON.parse()
// STRINGIFY    javascript -> JSON   // .stringify
