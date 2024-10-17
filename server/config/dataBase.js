const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;
const dbName = "BlogApp";

async function connectDb() {
    try {
        await mongoose.connect(`${mongoURL}${dbName}`, {
        });
        console.log("Connection successful");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

module.exports = connectDb;
