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

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.get("/test", (req, res) => res.send(mockAPIResponse));

app.post("/test", async (req, res) => {
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
});

// designates what port the app will listen to for incoming requests
app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
