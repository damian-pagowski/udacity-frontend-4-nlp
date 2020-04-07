const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// set aylien API credentias
const AYLIENTextAPI = require("aylien_textapi");
const textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.post("/test", function (req, res) {
  const { text } = req.body;
  const params = {
    text,
  };
  const cb = (error, response) => {
    if (error === null) {
      console.log(response);
      res.send(response);
    }
  };
  textapi.sentiment(params, cb);

  // res.send(mockAPIResponse);
});

app.post("/");
