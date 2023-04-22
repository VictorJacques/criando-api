const express = require("express");

const connection = require("./src/database");

const createPatient = require("./src/controllers/Patient/registerPatient");
const validateNewPatient = require("./src/middlewares/validateNewPatient");
const editPatient = require("./src/controllers/Patient/editPatient");
const editPatientStatus = require("./src/controllers/Patient/editPatientStatus");
const listPatients = require("./src/controllers/Patient/listPatients");
const listPatientById = require("./src/controllers/Patient/listPatientById");
const deletePatient = require("./src/controllers/Patient/deletePatient");

const createDoctor = require("./src/controllers/Doctor/registerDoctor");
const validateNewDoctor = require("./src/middlewares/validateNewDoctor");
const editDoctor = require("./src/controllers/Doctor/editDoctor");
const editDoctorStatus = require("./src/controllers/Doctor/editDoctorStatus");
const listDoctors = require("./src/controllers/Doctor/listDoctor");
const listDoctorById = require("./src/controllers/Doctor/listDoctorById");
const deleteDoctor = require("./src/controllers/Doctor/deleteDoctor");

const createNurse = require("./src/controllers/Nurse/registerNurse");
const validateNewNurse = require("./src/middlewares/validateNewNurse");
const editNurse = require("./src/controllers/Nurse/editNurse");
const listNurses = require("./src/controllers/Nurse/listNurse");
const listNurseById = require("./src/controllers/Nurse/listNurseById");
const deleteNurse = require("./src/controllers/Nurse/deleteNurse");

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

app.post("/api/medicos", validateNewDoctor, createDoctor);
app.put("/api/medicos/:id", validateNewDoctor, editDoctor);
app.put("/api/medicos/:id/status", editDoctorStatus);
app.get("/api/medicos", listDoctors);
app.get("/api/medicos/:id", listDoctorById);
app.delete("/api/medicos/:id", deleteDoctor);

app.post("/api/enfermeiros", validateNewNurse, createNurse);
app.put("/api/enfermeiros/:id", validateNewNurse, editNurse);
app.get("/api/enfermeiros", listNurses);
app.get("/api/enfermeiros/:id", listNurseById);
app.delete("/api/enfermeiros/:id", deleteNurse);

app.listen(3333, () => console.log("Server Online"));
