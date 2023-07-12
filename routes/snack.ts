const express = require("express");
const { handleAuth } = require("../controllers/auth.ts");
const { requiresAuth } = require("express-openid-connect");
const router = express.Router();
// Calling from the controllers folder the methods post and delete
const {
  getAllSnacks,
  getSnacksId,
  createSnack,
  editSnack,
  deleteSnack,
} = require("../controllers/snack.ts");

router.get("/", getAllSnacks);
router.get("/:id", getSnacksId);
router.post("/", createSnack);

router.put("/:id", handleAuth ?? requiresAuth(), editSnack);
router.delete("/:type/:id", handleAuth ?? requiresAuth(), deleteSnack);

module.exports = router;
