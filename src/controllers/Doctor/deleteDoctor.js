const Doctor = require("../../models/Doctor");

async function deleteDoctor(req, res) {
  try {
    const doctorInDatabase = await Doctor.findByPk(req.params.id);
    if (!doctorInDatabase) {
      return res.status(404).json({
        message: "Não existe um médico com esse ID!",
      });
    }

    await Doctor.destroy({ where: { id: req.params.id } });
    res.status(204).json({ message: "Deletado com sucesso." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = deleteDoctor;
