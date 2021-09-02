const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {type: String},
    email: {
        type: String,
        unique: true,
        required: true
        },
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min:[6, "password to short"],
    }
});

module.exports = mongoose.model("User", UserSchema)