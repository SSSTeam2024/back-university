const express = require("express");
const teacherSpecialtiesController = require("../../../controllers/middllewareControllers/TeacherSpecialtyControllers/TeacherSpecialtyController");

const router = express.Router();

router.post("/teacher-specialties-faculty", teacherSpecialtiesController.getTeacherSpecialtiesByFacultyId);
router.get("/teacher-specialties", teacherSpecialtiesController.getTeacherSpecialtiesOfAllFaculties);

module.exports = router;
