const express = require("express");
const personnelCategoriesController = require("../../../controllers/middllewareControllers/PersonnelCategoryControllers/PersonnelCategoryController");

const router = express.Router();

router.get("/personnel-categories", personnelCategoriesController.getPersonnelCategoriesOfAllFaculties);
// router.get("/teacher-ranks", teacherRankController.getTeacherRanksOfAllFaculties);

module.exports = router;
