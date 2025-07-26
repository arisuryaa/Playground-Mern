const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
  nama: { type: String, required: true },
  umur: { type: Number, required: true },
  kelas: { type: String, required: true },
});

const students = model("Student", StudentSchema);

module.exports = students;
