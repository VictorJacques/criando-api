const Nurse = require("../../models/Nurse");

async function listNurseById(req, res) {
  try {
    const nurseInDatabase = await Nurse.findByPk(req.params.id);
    if (!nurseInDatabase) {
      return res.status(404).json({
        message: "Não existe um enfermeiro com esse ID!",
      });
    }
    res.status(200).json(nurseInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = listNurseById;
