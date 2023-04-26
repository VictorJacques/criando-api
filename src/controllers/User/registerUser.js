const User = require("../../models/user");

async function createUser(req, res) {
  try {
    const user = {
      nome: req.body.nome,
      idade: req.body.idade,
      cargo: req.body.cargo,
      senha: req.body.senha,
    };
    if (
      !req.body.nome ||
      !req.body.idade ||
      !req.body.cargo ||
      !req.body.senha
    ) {
      return res.status(406).json({ message: "Está faltando dados" });
    }
    if (req.body.idade < 21) {
      return res.json({ message: "Usuário nao possui idade suficiente" });
    }

    const newUser = await User.create(user);
    res.status(200).json({ message: "Criado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." } + error);
  }
}

module.exports = createUser;
