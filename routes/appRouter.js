const Router = require("express");
const router = new Router();

const facultyRoutes = require("./facultyRoutes/facultyRoutes");

const studentRoutes = require("./middllewareRoutes/StudentsRoutes/StudentRoutes");
const enseignantRoutes = require("./middllewareRoutes/EnseignantsRoutes/EnseignantRoutes");
//Faculty
router.use("/faculty", facultyRoutes);

//Student
router.use("/student", studentRoutes);

//Enseignant
router.use("/enseignant", enseignantRoutes);

module.exports = router;
