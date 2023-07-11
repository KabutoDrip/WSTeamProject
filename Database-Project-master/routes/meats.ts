const express = require("express");
// Calling from the controllers folder the methods post and delete
const meatsController = require("../controllers/meats.ts");
const {requiresAuth} = require("express-openid-connect");
const router = express.Router();

router.get('/', requiresAuth(), meatsController.getAllMeats);
router.get('/:id', meatsController.getMeatsId);
router.post("/", requiresAuth(), meatsController.createMeats);

module.exports = router;
