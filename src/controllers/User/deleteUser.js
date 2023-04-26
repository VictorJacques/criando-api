const User = require("../../models/user");

async function deleteUser(req, res) {
  try {
    if (!req.params.id) {
      return res.status(406).json({
        message: "Está faltando dados para concluir a operação",
      });
    }
    const userInDatabase = await User.findByPk(req.params.id);
    if (!userInDatabase) {
      return res.status(404).json({
        message: "Não existe um usuário com esse ID!",
      });
    }

    await User.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = deleteUser;
