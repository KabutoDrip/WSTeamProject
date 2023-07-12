const express = require("express");
// Calling from the controllers folder the methods post and delete
const {
  getAllSnacks,
  getSnacksId,
  createSnack,
  editSnack,
  deleteSnack,
} = require("../controllers/snack.ts");
const { requiresAuth } = require("express-openid-connect");
const router = express.Router();

router.get("/", getAllSnacks);
router.get("/:id", getSnacksId);
router.post("/", createSnack);

router.put("/:id", requiresAuth(), editSnack);
router.delete("/:id", requiresAuth(), deleteSnack);

module.exports = router;
