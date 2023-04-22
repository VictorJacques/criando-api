const Doctor = require("../../models/Doctor");

async function listDoctors(req, res) {
  try {
    const filtros = req.query;
    const filtro = { status: "" };
    if (filtros.status) {
      if (!["ATIVO", "INATIVO"].includes(filtros.status)) {
        return res.json({
          message: "Parâmetro invalido, tente um desses: ATIVO ou INATIVO",
        });
      } else {
        if (filtros.status == "ATIVO") {
          filtro.status = "Ativo";
        } else if (filtros.status == "INATIVO") {
          filtro.status = "Inativo";
        }
        const doctors = await Doctor.findAll({
          where: {
            sysStatus: filtro.status,
          },
        });
        res.json(doctors);
      }
    } else {
      const doctors = await Doctor.findAll();
      res.json(doctors);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = listDoctors;
