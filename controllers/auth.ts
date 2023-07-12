import { requiresAuth } from "express-openid-connect";

const { verify } = require("jsonwebtoken");

const handleAuth = (req, res, next) => {
  const auth = req.headers.authorization;

  const options = {
    algorithms: ["S256"],
    audience: "okqztuEns5khHgcTwRiOk6qOqt2dQzBc",
    issuer: process.env.ISSUER_BASE_URL ?? "https://kubutodrip.us.auth0.com",
    complete: true,
  };
  if (req.headers.authorization) {
    try {
      const token = auth.split("bearer ")?.[1]
      console.log({token, secret: process.env.OKTA_SECRET})
      const decoded = verify(
        token,
        process.env.OKTA_SECRET,
        options
      );
      console.log(decoded);
    } catch (e) {
      res.status(401).send("Unauthenticated");
    }
  } else {
    requiresAuth();
  }
  return;
};

module.exports = { handleAuth };
