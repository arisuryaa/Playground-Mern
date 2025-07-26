const { createStudent, getAllStudents, updateStudent, deleteStudent, getOneStudent } = require("../../services/mongoose/students");

const index = async (req, res, next) => {
  try {
    const result = await getAllStudents();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createStudent(req);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateStudent(req);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const result = await deleteStudent(req);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  try {
    const result = await getOneStudent(req);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  index,
  create,
  update,
  remove,
  getOne,
};
