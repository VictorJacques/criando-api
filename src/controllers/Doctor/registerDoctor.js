const Doctor = require("../../models/Doctor");

async function createDoctor(req, res) {
  try {
    const doctor = {
      fullName: req.body.fullName,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      cpf: req.body.cpf,
      tel: req.body.tel,
      graduatedAt: req.body.graduatedAt,
      crm_uf: req.body.crm_uf,
      clinicSpecialization: req.body.clinicSpecialization,
      sysStatus: req.body.sysStatus,
    };

    const doctorInDatabase = await Doctor.findOne({
      where: { cpf: doctor.cpf },
    });
    if (doctorInDatabase !== null) {
      return res.status(409).json({
        message: "Já existe este médico!",
      });
    }

    const newDoctor = await Doctor.create(doctor).catch(function error(err) {
      res.status(400).json(
        {
          message: "Data em formato inválido, tente AAAA/MM/DD",
        },
        console.log(err)
      );
    });
    res.status(201).json(newDoctor);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." } + error);
  }
}

module.exports = createDoctor;
