const mongoose = require("mongoose")

// MAPPING OUT THE USER DATA SCHEMA
const UserSchema = new mongoose.Aggregate({
    username: { 
        type: String,
        required: true,
        unique: true

    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true});

module.exports = mongoose.model("User", UserSchema);