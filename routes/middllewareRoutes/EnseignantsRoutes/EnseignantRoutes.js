const express = require("express");
const enseignantController = require("../../../controllers/middllewareControllers/EnseignantsControllers/EnseignantController");

const router = express.Router();

router.get(
  "/enseignants-faculty/:id",
  enseignantController.getEnseignantsByFacultyId
);
router.get(
  "/enseignants-faculties",
  enseignantController.getEnseignantsOfAllFaculties
);

module.exports = router;
