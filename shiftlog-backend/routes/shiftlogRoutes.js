const express = require("express");
const {
  getShiftLogs,
  createShiftLog,
  updateShiftLog,
  deleteShiftLog,
  getShiftLog,
} = require("../controllers/shiftlogController");
const router = express.Router();

// Get all ShiftLogs
router.get("/", getShiftLogs);

// Get Shiftlog by ID
router.get("/:id", getShiftLog);

// Create Shift Log
router.post("/", createShiftLog);

// Update Shift Log
router.put("/:id", updateShiftLog);

// Delete Shift Log
router.delete("/:id", deleteShiftLog);

module.exports = router;
