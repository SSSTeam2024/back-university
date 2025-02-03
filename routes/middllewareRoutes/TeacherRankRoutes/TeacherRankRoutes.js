const express = require("express");
const teacherRankController = require("../../../controllers/middllewareControllers/TeacherRankControllers/TeacherRankController");

const router = express.Router();

router.post("/teacher-ranks-faculty", teacherRankController.getTeacherRanksByFacultyId);
router.get("/teacher-ranks", teacherRankController.getTeacherRanksOfAllFaculties);

module.exports = router;
