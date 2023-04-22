const { Sequelize } = require("sequelize");
const connection = require("../database");

const Nurse = connection.define("Nurse", {
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
  cofen_uf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Nurse;
