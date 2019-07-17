const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get("/", auth, async (req, res) => {
  // res.send("Get all contacts");
  // sort({date: -1}); Get the most recent in order
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/contacts
// @desc      Add new contacts
// @access    private
router.post("/", (req, res) => {
  res.send("Added new contact");
});

// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    private
router.put("/:id", (req, res) => {
  res.send("Updated contact");
});

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    private
router.delete("/:id", (req, res) => {
  res.send("Deleted contact");
});

module.exports = router;
