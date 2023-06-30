const express = require("express");
const snackController = require("../controllers/snack.js");
const { requiresAuth } = require("express-openid-connect");
const router = express.Router();

router.get("/", (req, res) => res.json("got all"));
router.get("/:id", (req, res) => res.json("got snack"));
router.get("/random", (req, res) => res.json("got random"));
router.post("/", requiresAuth(), snackController.createSnack);
router.put("/", requiresAuth(), (req, res) => res.json("edited that"));
router.delete("/", requiresAuth(), snackController.deleteSnack);

module.exports = router;
