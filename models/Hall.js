const mongoose = require("mongoose");
const User = require("./User");

const HallSchema = mongoose.Schema({
  hallname: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
});

module.exports = mongoose.model("Hall", HallSchema);
