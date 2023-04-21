const yup = require("yup");

const validation = yup.object().shape({
  fullName: yup
    .string("O nome deve ser uma string")
    .required("Nome é obrigatório"),
  gender: yup
    .string("O gênero deve ser uma string")
    .required("Gênero é obrigatório"),
  cpf: yup.string("O cpf deve ser uma string").required("Cpf é obrigatório"),
  tel: yup
    .string("O telefone deve ser uma string")
    .required("Telefone é obrigatório"),
  emergencyContact: yup
    .string("O contato de emergência deve ser uma string")
    .required("O contato de emergência é obrigatório"),
  serviceStatus: yup.string("O Status deve ser uma string"),
});

function validateNewPatient(req, res, next) {
  try {
    if (req.body.gender === "MASC" || req.body.gender === "FEM") {
      validation.validateSync(req.body);
      next();
    } else {
      res.status(400).json({ message: "Gênero Inválido." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateNewPatient;