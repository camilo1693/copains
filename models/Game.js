const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  });
  
  module.exports = mongoose.model("Game", GameSchema);
  