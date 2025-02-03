const express = require("express");
const studentSubscriptionTypesController = require("../../../controllers/middllewareControllers/StudentSubscriptionTypeControllers/StudentSubscriptionTypeControllers");

const router = express.Router();

// router.post("/teacher-specialties-faculty", teacherSpecialtiesController.getTeacherSpecialtiesByFacultyId);
router.get("/student-subscription-types", studentSubscriptionTypesController.getStudentSubscriptionTypesOfAllFaculties);

module.exports = router;
