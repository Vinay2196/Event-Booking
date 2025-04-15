const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  const { name, date, capacity } = req.body;
  try {
    const event = await Event.create({
      name,
      date,
      capacity,
      availableSeats: capacity,
    });
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEvents = async (req, res) => {
  const { start, end, page = 1, limit = 10 } = req.query;
  const query = {};

  if (start && end) {
    query.date = { $gte: new Date(start), $lte: new Date(end) };
  }

  try {
    const events = await Event.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Event not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
