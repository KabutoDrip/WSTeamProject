const express = require("express");
// Calling from the controllers folder the methods post and delete
const snackController = require("../controllers/snack.js");
const {requiresAuth} = require("express-openid-connect");
const router = express.Router();

router.get("/", requiresAuth(), (req, res) => res.json("got all"));
router.get("/:id", requiresAuth(), (req, res) => res.json("got snack"));
router.get("/random", requiresAuth(), (req, res) => res.json("got random"));
// This post is working in the api-docs by creating it.
router.post("/", requiresAuth(), snackController.createSnack);
router.put("/", requiresAuth(), (req, res) => res.json("edited that"));
router.delete("/", requiresAuth(), snackController.deleteSnack);

module.exports = router;
