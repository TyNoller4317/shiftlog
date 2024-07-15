const Shift = require("../models/shiftModel");
const AsyncHandler = require("express-async-handler");

//@description Get all shiftlogs but edited
//@route GET /api/shiftlog
//@access public
const getShiftLogs = AsyncHandler(async (req, res) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  // to make it so you can only see your users shifts add this to find function { user_id: req.user.id }
  const shift = await Shift.find({
    createdAt: {
      $gte: `${currentYear}-${currentMonth}-01`,
      $lt: `${currentYear}-${currentMonth}-31`,
    },
  }).sort({
    date: -1,
  });

  // for (let i = 0; i < shift.length; i++) {
  //   if (shift[i].ticket_updates.length >= 100) {
  //     shift[i].ticket_updates = shift[i].ticket_updates.slice(0, 100) + "...";
  //   }

  //   if (shift[i].critical_updates.length >= 100) {
  //     shift[i].critical_updates =
  //       shift[i].critical_updates.slice(0, 100) + "...";
  //   }
  // }

  res.status(200).json(shift);
});

//@description Get all shiftlogs but edited
//@route GET /api/shiftlog
//@access public
const getAllShiftLogs = AsyncHandler(async (req, res) => {
  const shift = await Shift.find().sort({ date: -1 });

  for (let i = 0; i < shift.length; i++) {
    if (shift[i].ticket_updates.length >= 100) {
      shift[i].ticket_updates = shift[i].ticket_updates.slice(0, 100) + "...";
    }

    if (shift[i].critical_updates.length >= 100) {
      shift[i].critical_updates =
        shift[i].critical_updates.slice(0, 100) + "...";
    }
  }

  res.status(200).json(shift);
});

//@description Get shiftlog by id
//@route GET /api/shiftlog/:id
//@access public
const getShiftLog = AsyncHandler(async (req, res) => {
  const shift = await Shift.findById(req.params.id);

  res.status(200).json(shift);
});

//@description Create a Shift Log
//@route POST /api/shiftlog
//@access public
const createShiftLog = AsyncHandler(async (req, res) => {
  const { ticket, walkthrough, critical_updates, ticket_updates, log_name } =
    req.body;

  if (
    !ticket ||
    !walkthrough ||
    !critical_updates ||
    !ticket_updates ||
    !log_name
  ) {
    res.status(400);
    throw new Error("All fields must be entered");
  }

  const log = await Shift.create({
    ticket,
    walkthrough,
    critical_updates,
    ticket_updates,
    log_name,
  });

  res.status(200).json(log);
});

//@description Update a Shift Log
//@route POST /api/shiftlog
//@access public
const updateShiftLog = AsyncHandler(async (req, res) => {
  const shift = await Shift.findById(req.params.id);

  if (!shift) {
    res.status(400);
    throw new Error("Shift Log Not Found");
  }

  //for login system
  // if (shift.user_id.toString() !== req.user.id) {
  //   res.status(403);
  //   throw new Error("User dont have permission to update other user contacts!");
  // }

  const updatedShift = await Shift.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedShift);
});

//@description Delete a Shift Log
//@route DELETE /api/shiftlog
//@access public
const deleteShiftLog = AsyncHandler(async (req, res) => {
  const shift = await Shift.findById(req.params.id);

  console.log(shift);

  if (!shift) {
    res.status(404);
    throw new Error("Shift not found");
  }

  await Shift.deleteOne({ _id: req.params.id });
  res.status(200).json(shift);
});

module.exports = {
  getShiftLog,
  getShiftLogs,
  getAllShiftLogs,
  createShiftLog,
  updateShiftLog,
  deleteShiftLog,
};
