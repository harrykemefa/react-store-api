// IMPORT EXPRESS
const express = require("express");
// INITIALIZE
const app = express();

// IMPORT  MONGOOSE
const mongoose = require("mongoose");

// IMPORT DOTENV.
const dotenv = require("dotenv");
dotenv.config();

// IMPORT USERROUTE
const userRoute = require("./routes/user");

// CONNECT TO MONGODB
mongoose
 .connect(process.env.MONGO_URL)
 .then(() => { console.log("DB connection success!"); })
 .catch((err) => {console.log(err)});

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!!");
})
