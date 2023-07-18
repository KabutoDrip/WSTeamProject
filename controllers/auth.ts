const { verify } = require("jsonwebtoken");

const handleAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.split("Bearer ")?.[1];

  if (token) {
    try {
      verify(token, process.env.OKTA_CLIENT_SECRET);
      req.params.authenticated = true;
      next();
      return;
    } catch (e) {
      res.status(401).send("Unauthenticated");
      return;
    }
  } else {
    if (req.oidc.isAuthenticated()) {
      next();
    } else {
      res.status(401).send("Unauthenticated");
    }
    return;
  }
};

module.exports = { handleAuth };
