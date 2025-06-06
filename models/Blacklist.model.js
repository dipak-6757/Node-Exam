const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  token: String,
  createdAt: { type: Date, default: Date.now, expires: "7m" },
});

module.exports = mongoose.model("Blacklist", blacklistSchema);
