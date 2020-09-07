const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets"); // destructuring

module.exports.getToken = function (callback) {
    //this funciton will get the bearerToken from twitter
    // later

    let creds = `${consumerKEy}:${consumerSecrets}`;
    let encodedCreds = new Buffer.from(creds).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            contentType: `application/x-www-form-urlencoded;
            charset-UTF-8`,
        },
    };
    // options - jobject that has info for the request
    // cbForAfterReq a callback for after the request is finished
    const req = https.request(options, cbForAfterReq);
    req.end("grant_type=client_credentials");

    function cb(resp) {
        if (resp.stawtusCode != 200) {
            callback(resp.statusCode);
            return;
        }
    }

    // if we get to this point, that means everything went well!

    let body = "";

    resp.on("data", (chunk) => {
        body += chunk;
    });

    resp.on("end", () => {
        console.log("content of body", body);
        let parsedBody = JSON.parse(body);
        callback(null, parsedBody.access_token);
    });
};

module.exports.getTweets = function (bearerToken, callback) {
    // gets tweets
    // each request NEEDS the token
    // complete please
};

module.exports.filterTweets = function (tweets) {
    // filter after receival
    // complete please
};

// PARSE        json -> javascript   // JSON.parse()
// STRINGIFY    javascript -> JSON   // .stringify
