const mongoose = require("mongoose");

const PrivateSchema = mongoose.Schema({
    privatename: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose. model("Private", PrivateSchema);