const { Sequelize } = require("sequelize");
const connection = require("../database");

const Patient = connection.define("Patient", {
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
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  emergencyContact: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  allergies: {
    type: Sequelize.STRING,
    defaultValue: "Nenhum",
  },
  specificCare: {
    type: Sequelize.STRING,
    defaultValue: "Nenhum",
  },
  healthInsurance: {
    type: Sequelize.STRING,
    defaultValue: "Nenhum",
  },
  serviceStatus: {
    type: Sequelize.ENUM(
      "Aguardando Atendimento",
      "Em Atendimento",
      "Atendido",
      "Não Atendido"
    ),
    defaultValue: "Não Atendido",
  },
  serviceTotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Patient;
