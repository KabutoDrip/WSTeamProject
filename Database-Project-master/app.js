const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.OKTA_SECRET,
  baseURL: `localhost:${process.env.PORT ?? 3001}`,
  clientID: "okqztuEns5khHgcTwRiOk6qOqt2dQzBc",
  issuerBaseURL: "https://kubutodrip.us.auth0.com",
};


const port = process.env.PORT || 3001;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use(auth(config))
  .use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on ${port}`);
    });
  }
});
