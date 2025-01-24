const express = require("express");
const studentController = require("../../../controllers/middllewareControllers/StudentsControllers/StudentController");

const router = express.Router();

router.get("/students-faculty/:id", studentController.getStudentsByFacultyId);
router.get("/students-faculties", studentController.getStudentsOfAllFaculties);

module.exports = router;
