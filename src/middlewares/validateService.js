const yup = require("yup");

const validation = yup.object().shape({
  idDoctor: yup
    .string("O ID do médico deve ser uma string")
    .required("ID do médico é obrigatório"),
  idPatient: yup
    .string("O ID do paciente deve ser uma string")
    .required("ID do paciente é obrigatório"),
});

function validateService(req, res, next) {
  try {
    validation.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateService;
