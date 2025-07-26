const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./db/index");
const cors = require("cors");
dotenv.config();

const error = require("./middleware/error");
const studentsRoutes = require("./Api/Students/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", studentsRoutes);
app.use(error);

db.once("open", () => {
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
});
