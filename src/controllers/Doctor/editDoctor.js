const Doctor = require("../../models/Doctor");

async function editDoctor(req, res) {
  try {
    const doctorInDatabase = await Doctor.findByPk(req.params.id);
    if (!doctorInDatabase) {
      return res.status(404).json({
        message: "Não existe um médico com esse ID!",
      });
    }

    doctorInDatabase.fullName = req.body.fullName;
    doctorInDatabase.gender = req.body.gender;
    doctorInDatabase.birthDate = req.body.birthDate;
    doctorInDatabase.cpf = req.body.cpf;
    doctorInDatabase.tel = req.body.tel;
    doctorInDatabase.graduatedAt = req.body.graduatedAt;
    doctorInDatabase.crm_uf = req.body.crm_uf;
    doctorInDatabase.clinicSpecialization = req.body.clinicSpecialization;
    doctorInDatabase.sysStatus = req.body.sysStatus;

    await doctorInDatabase.save();

    res.status(200).json(doctorInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = editDoctor;
