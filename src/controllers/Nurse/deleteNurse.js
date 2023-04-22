const Nurse = require("../../models/Nurse");

async function deleteNurse(req, res) {
  try {
    const nurseInDatabase = await Nurse.findByPk(req.params.id);
    if (!nurseInDatabase) {
      return res.status(404).json({
        message: "Não existe um enfermeiro com esse ID!",
      });
    }

    await Nurse.destroy({ where: { id: req.params.id } });
    res.status(204).json({ message: "Deletado com sucesso." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = deleteNurse;
