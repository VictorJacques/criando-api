const Nurse = require("../../models/Nurse");

async function createNurse(req, res) {
  try {
    const nurse = {
      fullName: req.body.fullName,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      cpf: req.body.cpf,
      tel: req.body.tel,
      graduatedAt: req.body.graduatedAt,
      cofen_uf: req.body.cofen_uf,
    };

    const nurseInDatabase = await Nurse.findOne({
      where: { cpf: nurse.cpf },
    });
    if (nurseInDatabase !== null) {
      return res.status(409).json({
        message: "Já existe este enfermeiro!",
      });
    }

    const newNurse = await Nurse.create(nurse).catch(function error(err) {
      res.status(400).json(
        {
          message: "Data em formato inválido, tente AAAA/MM/DD",
        },
        console.log(err)
      );
    });
    res.status(201).json(newNurse);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." } + error);
  }
}

module.exports = createNurse;
