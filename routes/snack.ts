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
router.get("/:type/:id", getSnacksId);
router.post("/", handleAuth, createSnack);

router.put("/:id", handleAuth, editSnack);
router.delete("/:type/:id", handleAuth, deleteSnack);

module.exports = router;
