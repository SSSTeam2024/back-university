const express = require("express");
const personnelPostController = require("../../../controllers/middllewareControllers/PersonnelPostControllers/PersonnelPostController");

const router = express.Router();

router.get("/personnel-posts", personnelPostController.getPersonnelPostsOfAllFaculties);
// router.get("/teacher-ranks", teacherRankController.getTeacherRanksOfAllFaculties);

module.exports = router;
