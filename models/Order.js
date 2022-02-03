const mongoose = require("mongoose")

// MAPPING OUT THE ORDER DATA SCHEMA
const OrderSchema = new mongoose.Aggregate({
   
    userId: { 
        type: String,
        required: true,

    },

    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],

    amount: {
        type: Number,
        required: true
    },

    address: {
        type: Object,
        required: true
    },

    status: {
        type: String,
        default: "Pending"
    },


}, { timestamps: true});

module.exports = mongoose.model("Order", OrderSchema);