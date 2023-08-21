const express = require("express");
const router = express.Router();
const newController = require("../app/controllers/NewController");
router.get("/", newController.index);
router.get("/:slug", newController.show);

module.exports = router;
