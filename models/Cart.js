const mongoose = require("mongoose"), timestamps = require('mongoose-timestamp')

// MAPPING OUT THE USER DATA SCHEMA
const CartSchema = new mongoose.Schema({
    userId: { 
        type: String,
        required: true
    },

    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            },
        },
    ],


  
}, { timestamps: true });


module.exports = mongoose.model("Cart", CartSchema);