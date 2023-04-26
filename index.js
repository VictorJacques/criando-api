const express = require("express");

const connection = require("./src/database");

const createUser = require("./src/controllers/User/registerUser");
const deleteUser = require("./src/controllers/User/deleteUser");
const validateRole = require("./src/middlewares/cargoValido");

const app = express();
app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

app.post("/usuario", validateRole, createUser);
app.delete("/usuario/:id", deleteUser);

app.listen(3333, () => console.log("Server Online"));
