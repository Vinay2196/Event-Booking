const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  capacity: Number,
  availableSeats: Number,
});

module.exports = mongoose.model("Event", eventSchema);
