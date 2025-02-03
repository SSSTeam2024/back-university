const express = require("express");
const personnelRanksController = require("../../../controllers/middllewareControllers/PersonnelRankControllers/PersonnelRankController");

const router = express.Router();

router.get("/personnel-ranks", personnelRanksController.getPersonnelRanksOfAllFaculties);
// router.get("/teacher-ranks", teacherRankController.getTeacherRanksOfAllFaculties);

module.exports = router;
