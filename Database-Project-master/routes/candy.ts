const express = require("express");
// Calling from the controllers folder the methods post and delete
const candyController = require("../controllers/candy.ts");
const {requiresAuth} = require("express-openid-connect");
const router = express.Router();

router.get('/', requiresAuth(), candyController.getAllCandyPastries);
router.get('/:id', candyController.getCandyPastriesId);
router.post("/", requiresAuth(), candyController.createCandyPastries);

module.exports = router;
