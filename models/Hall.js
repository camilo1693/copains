const mongoose = require("mongoose");
const User = require("./User");
const Game = require("./Game");
const HallSchema = mongoose.Schema({
  hallname: {
    type: String,
    required: true,
  },
  game: {
    type: mongoose.Types.ObjectId,
    ref: "Game"
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
});

module.exports = mongoose.model("Hall", HallSchema);
