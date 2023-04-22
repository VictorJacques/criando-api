const Doctor = require("../../models/Doctor");

async function listDoctorById(req, res) {
  try {
    const doctorInDatabase = await Doctor.findByPk(req.params.id);
    if (!doctorInDatabase) {
      return res.status(404).json({
        message: "Não existe um médico com esse ID!",
      });
    }
    res.status(200).json(doctorInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = listDoctorById;
