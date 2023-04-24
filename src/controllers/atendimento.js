const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

async function atendimento(req, res) {
  try {
    const doctorInDatabase = await Doctor.findByPk(req.body.idDoctor);
    if (!doctorInDatabase) {
      return res.status(404).json({
        message: "Não existe um médico com esse ID!",
      });
    }

    const patientInDatabase = await Patient.findByPk(req.body.idPatient);
    if (!patientInDatabase) {
      return res.status(404).json({
        message: "Não existe um paciente com esse ID!",
      });
    }

    doctorInDatabase.serviceTotal = doctorInDatabase.serviceTotal + 1;
    patientInDatabase.serviceTotal = patientInDatabase.serviceTotal + 1;
    patientInDatabase.serviceStatus = "Atendido";

    await doctorInDatabase.save();
    await patientInDatabase.save();

    res.status(200).json({
      doctorInDatabase: doctorInDatabase,
      patientInDatabase: patientInDatabase,
    });
  } catch (error) {}
}

module.exports = atendimento;
