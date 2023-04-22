const Nurse = require("../../models/Nurse");

async function listNurses(req, res) {
  try {
    const nurses = await Nurse.findAll();
    res.json(nurses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = listNurses;
