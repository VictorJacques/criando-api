const Patient = require("../../models/Patient");

async function listPatients(req, res) {
  try {
    const filtros = req.query;
    const filtro = { status: "" };
    if (filtros.status) {
      if (
        ![
          "AGUARDANDO_ATENDIMENTO",
          "EM_ATENDIMENTO",
          "ATENDIDO",
          "NAO_ATENDIDO",
        ].includes(filtros.status)
      ) {
        return res.json({
          message:
            "Parâmetro invalido, tente um desses: AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO e NAO_ATENDIDO",
        });
      } else {
        if (filtros.status == "AGUARDANDO_ATENDIMENTO") {
          filtro.status = "Aguardando Atendimento";
        } else if (filtros.status == "EM_ATENDIMENTO") {
          filtro.status = "Em Atendimento";
        } else if (filtros.status == "ATENDIDO") {
          filtro.status = "Atendido";
        } else if (filtros.status == "NAO_ATENDIDO") {
          filtro.status = "Não Atendido";
        }
        const patients = await Patient.findAll({
          where: {
            serviceStatus: filtro.status,
          },
        });
        res.json(patients);
      }
    } else {
      const patients = await Patient.findAll();
      res.json(patients);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = listPatients;
