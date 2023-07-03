const express = require("express");
// Calling from the controllers folder the methods post and delete
const snackController = require("../controllers/snack.js");
const {requiresAuth} = require("express-openid-connect");
const router = express.Router();

router.get('/', requiresAuth(), snackController.getAllSnacks);
router.get('/:id', snackController.getSnacksId);
router.post("/", requiresAuth(), snackController.createSnack);


//router.put("/", requiresAuth(), (req, res) => res.json("edited that"));
router.delete("/", requiresAuth(), snackController.deleteSnack);

module.exports = router;
