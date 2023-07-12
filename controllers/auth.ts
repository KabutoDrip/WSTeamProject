const { verify } = require("jsonwebtoken");
const { requiresAuth } = require("express-openid-connect");

const handleAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.split("Bearer ")?.[1];
  const requiresLoginCheck = !req.oidc.isAuthenticated();

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
    requiresAuth(requiresLoginCheck, req, res, next);
    next();
    return;
  }
};

module.exports = { handleAuth };
