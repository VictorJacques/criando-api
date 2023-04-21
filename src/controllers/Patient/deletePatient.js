const Patient = require("../../models/Patient");

async function deletePatient(req, res) {
  try {
    const patientInDatabase = await Patient.findByPk(req.params.id);
    if (!patientInDatabase) {
      return res.status(404).json({
        message: "Não existe um paciente com esse ID!",
      });
    }

    await Patient.destroy({ where: { id: req.params.id } });
    res.status(200).json(patientInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = deletePatient;
