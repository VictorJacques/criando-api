const Patient = require("../../models/Patient");

async function editPatientStatus(req, res) {
  try {
    const patientInDatabase = await Patient.findByPk(req.params.id);
    if (!patientInDatabase) {
      return res.status(404).json({
        message: "Não existe um paciente com esse ID!",
      });
    }
    if (!req.body.serviceStatus) {
      return res.status(400).json({ message: "Campo Obrigatório!" });
    }

    patientInDatabase.serviceStatus = req.body.serviceStatus;

    await patientInDatabase.save();

    res.status(200).json(patientInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = editPatientStatus;
