const express = require("express");
const studentLevelController = require("../../../controllers/middllewareControllers/StudentLevelControllers/StudentLevelControllers");

const router = express.Router();

// router.post("/teacher-specialties-faculty", teacherSpecialtiesController.getTeacherSpecialtiesByFacultyId);
router.get("/student-levels-faculties", studentLevelController.getStudentsLevelsOfAllFaculties);

module.exports = router;
