///// use "npm init" to create a new node environment
///// use "npm init"
///// use "npm install nodemon"
////  npx nodemon index.js - if it is not installed gloabally

const http = require("http");
const chalk = require("chalk");
const qs = require("querystring");

console.log(chalk.red("hello"));

// create server and assign it to a variable
// REQuest  RESponse
const app = http.createServer((req, res) => {
    // error handling
    req.on("error", () => console.log("REQ ERR", err));
    res.on("error", () => console.log("RES ERR", err));

    console.log(req.method, req.url);
    let body = ""; // set "empty" body string to be able to append to it

    res.setHeader("content-type", "text/html");
    if (req.method === "GET") {
        res.end(`<!doctype html>
        <html>
        <title>Colors</title>
        <form method="POST">
          <input type="text" name="text">
          <select name="color">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="gray">gray</option>
            <option value="magenta">magenta</option>
            <option value="cyan">cyan</option>
          </select>
          <button type="submit">Go</button>
        </form>
        </html>`);
    } else if (req.method === "POST") {
        req.on("data", (chunk) => {
            body += chunk;
        });
        // querystring porperties are defined by the name="" tag in your html
        req.on("end", () => {
            //let { color, text } = qs.parse(body);
            //console.log("color", color, "text", text);
            const parsedBody = qs.parse(body);
            // console.log(parsedBody.color, parsedBody.text); // destructured below
            if (parsedBody.text == "") {
                console.log("this never happens");
                console.log(body);
                parsedBody.text =
                    "it is better to have loved and lost than never to have loved at all";
                parsedBody.color = "magenta";
                //let { color, text } = qs.parse(body);
            }
            console.log(chalk[parsedBody.color]([parsedBody.text]));
            res.end(`<!doctype html>
                        <html>
                        <title>Colors</title>
                        <a href="/" style="color:${parsedBody.color}"> ${parsedBody.text} </a>
                        </form>
                        </html>`);
        });
    }
});

// add a listener for the server (app)
app.listen(5050, () => console.log("server is running"));

// bla bla
