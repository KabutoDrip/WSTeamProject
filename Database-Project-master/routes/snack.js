const express = require("express");
// Calling from the controllers folder the methods post and delete
const snackController = require("../controllers/snack.js");
const {requiresAuth} = require("express-openid-connect");
const router = express.Router();

router.get("/", (req, res) => res.json("got all"));
router.get("/:id", (req, res) => res.json("got snack"));
router.get("/random", (req, res) => res.json("got random"));
//get all by category
router.get('/', requiresAuth(), snackController.getAllSnacks);
router.get('/', requiresAuth(), snackController.getAllCandyPastries);
router.get('/', requiresAuth(), snackController.getAllMeats);
router.get('/', requiresAuth(), snackController.getNutsDried_FruitsId);
//get single by id 
router.get('/:id', snackController.getSnacksId);
router.get('/:id', snackController.getCandyPastriesId);
router.get('/:id', snackController.getMeatsId);
router.get('/:id', snackController.getNutsDried_FruitsId);


// This post is working in the api-docs by creating it.
router.post("/", requiresAuth(), snackController.createSnackId);
router.post("/", requiresAuth(), snackController.createCandyPastriesId);
router.post("/", requiresAuth(), snackController.createMeatsId);
router.post("/", requiresAuth(), snackController.createNutsDried_FruitsId);
router.put("/", requiresAuth(), (req, res) => res.json("edited that"));
router.delete("/", requiresAuth(), snackController.deleteSnack);

module.exports = router;
