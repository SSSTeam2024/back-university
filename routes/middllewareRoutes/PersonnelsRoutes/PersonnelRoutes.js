const express = require("express");
const personnelController = require("../../../controllers/middllewareControllers/PersonnelsControllers/PersonnelController");

const router = express.Router();

// router.get("/personnels-faculty/:id", studentController.getStudentsByFacultyId);
router.get("/personnels-faculties", personnelController.getPersonnelsOfAllFaculties);

module.exports = router;
