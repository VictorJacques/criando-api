const { Sequelize } = require("sequelize");
const connection = require("../database");

const Doctor = connection.define("Doctor", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.ENUM("MASC", "FEM"),
    allowNull: false,
  },
  birthDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  graduatedAt: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  crm_uf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  clinicSpecialization: {
    type: Sequelize.ENUM(
      "Clínico Geral",
      "Anestesista",
      "Dermatologia",
      "Ginecologia",
      "Neurologia",
      "Pediatria",
      "Psiquiatria",
      "Ortopedia"
    ),
  },
  sysStatus: {
    type: Sequelize.ENUM("Ativo", "Inativo"),
    defaultValue: "Ativo",
  },
  serviceTotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Doctor;
