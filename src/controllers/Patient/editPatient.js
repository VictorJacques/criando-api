const Patient = require("../../models/Patient");

async function editPatient(req, res) {
  try {
    const patientInDatabase = await Patient.findByPk(req.params.id);
    if (!patientInDatabase) {
      return res.status(404).json({
        message: "Não existe um paciente com esse ID!",
      });
    }

    patientInDatabase.fullName = req.body.fullName;
    patientInDatabase.gender = req.body.gender;
    patientInDatabase.birthDate = req.body.birthDate;
    patientInDatabase.cpf = req.body.cpf;
    patientInDatabase.tel = req.body.tel;
    patientInDatabase.emergencyContact = req.body.emergencyContact;
    patientInDatabase.allergies = req.body.allergies;
    patientInDatabase.specificCare = req.body.specificCare;
    patientInDatabase.healthInsurance = req.body.healthInsurance;
    patientInDatabase.serviceStatus = req.body.serviceStatus;

    await patientInDatabase.save();

    res.status(200).json(patientInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = editPatient;
