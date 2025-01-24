const facultyService = require("../../../services/FacultyServices/FacultyServices");
const axios = require("axios");

const getEnseignantsByFacultyId = async (req, res) => {
  try {
    const facultyId = req.params.id;

    const faculty = await facultyService.getFacultyByIdService(facultyId);

    const FACULTY_API = faculty.server_domain_name;

    const enseignants = await axios.get(
      `${FACULTY_API}/enseignant/get-all-enseignant`
    );

    if (!enseignants.data) {
      return res.status(404).send("enseignants not found");
    }
    res.json(enseignants.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getEnseignantsOfAllFaculties = async (req, res) => {
  try {
    const faculties = await facultyService.getFacultiesService();

    let totalEnseignants = [];
    let totalEnseignantsNumber = 0;

    for (const faculty of faculties) {
      const FACULTY_API = faculty.server_domain_name;

      const facultyEnseignants = await axios.get(
        `${FACULTY_API}/enseignant/get-all-enseignant`
      );
      const enseignantByFaculty = {
        facultyName: faculty.name_fr,
        enseignants: facultyEnseignants.data,
        enseignantsNumber: facultyEnseignants.data.length,
      };
      totalEnseignantsNumber += enseignantByFaculty.enseignantsNumber;
      totalEnseignants.push(enseignantByFaculty);
    }

    if (!totalEnseignants) {
      return res.status(404).send("Enseignants not found");
    }
    result = {
      totalEnseignants: totalEnseignants,
      totalEnseignantsNumber: totalEnseignantsNumber,
    };
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getEnseignantsByFacultyId,
  getEnseignantsOfAllFaculties,
  // getAllFaculties,
  // updateEtatPersonnelById,
  // deleteEtatPersonnelById,
};
