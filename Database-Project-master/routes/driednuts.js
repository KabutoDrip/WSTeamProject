const express = require("express");
// Calling from the controllers folder the methods post and delete
const nutsController = require("../controllers/driednuts.js");
const {requiresAuth} = require("express-openid-connect");
const router = express.Router();

router.get('/', requiresAuth(), nutsController.getAllNutsDried_Fruits);
router.get('/:id', nutsController.getNutsDried_FruitsId);
router.post("/", requiresAuth(), nutsController.createNutsDried_Fruits);

module.exports = router;
