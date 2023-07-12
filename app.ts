const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect.ts");
const routes = require("./routes/index.ts");
const { auth } = require("express-openid-connect");
const config = {
  authRequired: false,
  idpLogout: true,
  secret: process.env.OKTA_SECRET,
  baseURL: process.env.OKTA_BASE_URL ?? `http://localhost:3001`,
  clientID: "okqztuEns5khHgcTwRiOk6qOqt2dQzBc",
  issuerBaseURL: "https://kubutodrip.us.auth0.com",
  session: {
    name: process.env.AUTH_COOKIE_NAME ?? "local-auth",
  },
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
  .use("/", routes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on ${port}`);
    });
  }
});

module.exports = app;
