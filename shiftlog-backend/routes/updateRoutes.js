const express = require("express");
const router = express.Router();
const {
  getUpdates,
  createUpdates,
  editUpdates,
} = require("../controllers/updatesController");

//Get Updates
router.get("/", getUpdates);

//Create Update
router.post("/", createUpdates);

//Edit Update
router.put("/:id", editUpdates);

//Delete Update
router.delete("/:id");

module.exports = router;
