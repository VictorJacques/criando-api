const Patient = require("../../models/Patient");

async function createPatient(req, res) {
  try {
    const patient = {
      fullName: req.body.fullName,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      cpf: req.body.cpf,
      tel: req.body.tel,
      emergencyContact: req.body.emergencyContact,
      allergies: req.body.allergies,
      specificCare: req.body.specificCare,
      healthInsurance: req.body.healthInsurance,
      serviceStatus: req.body.serviceStatus,
      serviceTotal: 0,
    };

    const patientInDatabase = await Patient.findOne({
      where: { cpf: patient.cpf },
    });
    if (patientInDatabase !== null) {
      return res.status(409).json({
        message: "Já existe esse paciente!",
      });
    }

    const newPatient = await Patient.create(patient).catch(function error(err) {
      res.status(400).json({
        message: "Data em formato inválido, tente AAAA/MM/DD",
      });
    });
    res.status(201).json(newPatient);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." } + error);
  }
}

module.exports = createPatient;
