const error = (req, res, next) => {
  res.status(500).json({ msg: "Internal Server Error Bangsat" });
};

module.exports = error;
