const express = require("express");

const connection = require("./src/database");

const createPatient = require("./src/controllers/Patient/registerPatient");
const validateNewPatient = require("./src/middlewares/validateNewPatient");
const editPatient = require("./src/controllers/Patient/editPatient");
const editPatientStatus = require("./src/controllers/Patient/editPatientStatus");
const listPatients = require("./src/controllers/Patient/listPatients");
const listPatientById = require("./src/controllers/Patient/listPatientById");
const deletePatient = require("./src/controllers/Patient/deletePatient");
const app = express();
app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

app.post("/api/pacientes", validateNewPatient, createPatient);
app.put("/api/pacientes/:id", validateNewPatient, editPatient);
app.put("/api/pacientes/:id/status", editPatientStatus);
app.get("/api/pacientes", listPatients);
app.get("/api/pacientes/:id", listPatientById);
app.delete("/api/pacientes/:id", deletePatient);

app.listen(3333, () => console.log("Server Online"));
