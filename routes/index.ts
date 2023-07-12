const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("homepage");
});
router.use("/api-docs", require("./swagger.ts"));
router.use("/snack", require("./snack.ts"));

router.get("/me", requiresAuth(), (req, res) => {
  res.json({ user: req.oidc.user, idToken: req.oidc.idToken });
});

module.exports = router;
