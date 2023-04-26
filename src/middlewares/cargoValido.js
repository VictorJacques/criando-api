function validateRole(req, res, next) {
  try {
    if (req.body.cargo === "líder") {
      next();
    } else {
      res.status(400).json({ message: "Cargo invalido" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateRole;
