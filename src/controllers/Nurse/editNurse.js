const Nurse = require("../../models/Nurse");

async function editNurse(req, res) {
  try {
    const nurseInDatabase = await Nurse.findByPk(req.params.id);
    if (!nurseInDatabase) {
      return res.status(404).json({
        message: "Não existe um enfermeiro com esse ID!",
      });
    }

    nurseInDatabase.fullName = req.body.fullName;
    nurseInDatabase.gender = req.body.gender;
    nurseInDatabase.birthDate = req.body.birthDate;
    nurseInDatabase.cpf = req.body.cpf;
    nurseInDatabase.tel = req.body.tel;
    nurseInDatabase.graduatedAt = req.body.graduatedAt;
    nurseInDatabase.cofen_uf = req.body.cofen_uf;

    await nurseInDatabase.save();

    res.status(200).json(nurseInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = editNurse;
