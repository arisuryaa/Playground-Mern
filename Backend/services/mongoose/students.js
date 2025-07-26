const students = require("../../Api/Students/model");

const getAllStudents = async () => {
  const result = await students.find();
  if (!result) {
    console.log("error");
  }
  return result;
};

const createStudent = async (req) => {
  const { nama, umur, kelas } = req.body;
  const result = await students.create({ nama, umur, kelas });
  if (!result) {
    console.log("error");
  }

  return result;
};

const deleteStudent = async (req) => {
  const { id } = req.params;
  if (!id) {
    console.log("Id Not Defined");
  }
  const result = await students.findByIdAndDelete(id);
  return result;
};

const updateStudent = async (req) => {
  const { id } = req.params;
  const { nama, kelas, umur } = req.body;
  console.log(id);

  const result = await students.findByIdAndUpdate(id, { nama, kelas, umur });
  if (!result) {
    console.log("something went wrong");
  }
  return result;
};

const getOneStudent = async (req) => {
  const { id } = req.params;
  const result = await students.findById(id);
  return result;
};

module.exports = {
  createStudent,
  getOneStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
};
