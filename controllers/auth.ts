const { decode, verify } = require("jsonwebtoken");

const handleAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.split("bearer ")?.[1];
  const decoded = token ? decode(token) : null;

  const options = {
    algorithms: ["S256"],
    audience: "okqztuEns5khHgcTwRiOk6qOqt2dQzBc",
    issuer: process.env.ISSUER_BASE_URL ?? "https://kubutodrip.us.auth0.com",
    complete: true,
  };

  if (token) {
    try {
      console.log({ token, secret: process.env.OKTA_SECRET });
      verify(token, process.env.OKTA_SECRET);
      res.status(200).send("Authenticated");
      return "it ran";
    } catch (e) {
      res.status(401).send("Unauthenticated");
      return "it tried";
    }
  }

  next();
  return;
};

module.exports = { handleAuth };
