const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// ✅ SAVE BOOKING
router.post("/", async (req, res) => {
  try {
    console.log("Incoming Data:", req.body); // 👈 CHECK THIS

    const { name, room, checkin, checkout } = req.body;

    if (!name || !room || !checkin || !checkout) {
      return res.json({ message: "All fields required ❌" });
    }

    const newBooking = new Booking({
      name,
      room,
      checkin,
      checkout,
    });

    await newBooking.save();

    res.json({ message: "Booking Saved Successfully ✅" });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ message: "Error saving booking ❌" });
  }
});