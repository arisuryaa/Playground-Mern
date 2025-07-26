const express = require("express");
const router = express.Router();
const { index, create, update, remove, getOne } = require("./controller");

router.get("/", index);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
