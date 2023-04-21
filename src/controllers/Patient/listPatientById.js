const Patient = require("../../models/Patient");

async function listPatientById(req, res) {
  try {
    const patientInDatabase = await Patient.findByPk(req.params.id);
    if (!patientInDatabase) {
      return res.status(404).json({
        message: "Não existe um paciente com esse ID!",
      });
    }
    res.status(200).json(patientInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = listPatientById;
