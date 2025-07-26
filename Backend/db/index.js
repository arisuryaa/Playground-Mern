const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

module.exports = db;

db.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("✅ MongoDB connected");
});
