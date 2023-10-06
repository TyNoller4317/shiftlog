const Update = require("../models/updatesModel");
const AsyncHandler = require("express-async-handler");

//@description Get Updates
//@route GET /api/updates
//@access public
const getUpdates = AsyncHandler(async (req, res) => {
  // to make it so you can only see your users shifts add this to find function { user_id: req.user.id }
  const update = await Update.find().sort({ date: -1 });

  if (!update) {
    res.status(404).json({ msg: "No Update Found" });
  }

  res.status(200).json(update);
});

//@description Create Updates
//@route POST /api/updates
//@access public
const createUpdates = AsyncHandler(async (req, res) => {
  const { title, update } = req.body;

  if (!title || !update) {
    res.status(400);
    throw new Error("All fields must be entered!");
  }

  const updateInfo = await Update.create({
    title,
    update,
  });

  res.status(200).json(updateInfo);
});

//@description Edit Updates
//@route PUT /api/updates
//@access public
const editUpdates = AsyncHandler(async (req, res) => {
  const update = await Update.find(req.params.id);

  if (!update) {
    res.status(400);
    throw new Error("Shift Log Not Found");
  }

  const editedUpdate = await Update.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(editedUpdate);
});

module.exports = { getUpdates, createUpdates, editUpdates };
