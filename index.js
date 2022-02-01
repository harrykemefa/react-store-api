// IMPORT EXPRESS
const express = require("express");
// ITIALIZE
const app = express();

// IMPORT  MONGOOSE
const mongoose = require("mongoose");

// IMPORT DOTENV.
const dotenv = require("dotenv");
dotenv.config();

// CONNECT TO MONGODB
mongoose
 .connect(process.env.MONGO_URL)
 .then(() => { console.log("DB connection success!"); })
 .catch((err) => {console.log(err)});

 
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!!");
})
