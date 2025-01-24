const express = require("express");
const facultyController = require("../../controllers/FacultyController/FacultyController");

const router = express.Router();

router.post("/create-faculty", facultyController.createFacultyController);
router.get("/get-all-faculties", facultyController.getAllFaculties);

// router.delete('/delete-etat-personnel/:id', etatPersonnelController.deleteEtatPersonnelById);
// router.put('/update-etat-personnel/:id', etatPersonnelController.updateEtatPersonnelById);

module.exports = router;
