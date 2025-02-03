const facultyService = require("../../../services/FacultyServices/FacultyServices");
const axios = require("axios");

const getTeacherSpecialtiesByFacultyId = async (req, res) => {
  try {
    const {facultyId }= req.body;

    const faculty = await facultyService.getFacultyByIdService(facultyId);

    const FACULTY_API = faculty.server_domain_name;

    const specialties = await axios.get(
      `${FACULTY_API}/specialite-enseignant/get-all-specialite-enseignant`
    );

    if (!specialties.data) {
      return res.status(404).send("specialties not found");
    }
    res.json(specialties.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getTeacherSpecialtiesOfAllFaculties = async (req, res) => {
  try {
    const faculties = await facultyService.getFacultiesService();

    let totalSpecialties = [];

    let totalCleanSpecialties = [];

    for (const faculty of faculties) {
      const FACULTY_API = faculty.server_domain_name;

      const specialties = await axios.get(
        `${FACULTY_API}/specialite-enseignant/get-all-specialite-enseignant`
      );

      totalSpecialties = totalSpecialties.concat(specialties.data);
    }

    totalCleanSpecialties = removeDuplicates(totalSpecialties, "specialite_fr");

    if (!totalCleanSpecialties) {
      return res.status(404).send("specialties not found");
    }
    res.json(totalCleanSpecialties);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const removeDuplicates = (array, key) => {
  const seen = new Set();
  return array.filter((item) => {
    const keyValue = item[key];
    if (seen.has(keyValue)) {
      return false;
    } else {
      seen.add(keyValue);
      return true;
    }
  });
};

// const getAllFaculties = async (req, res) => {
//   try {
//     const faculties = await facultyService.getFacultiesService();
//     res.json(faculties);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// const deleteEtatPersonnelById = async (req, res) => {
//   try {
//     const etatPersonnelId = req.params.id;

//     const deletedEtatPersonnel =
//       await EtatPersonnelService.deleteEtatPersonnelDao(etatPersonnelId);

//     if (!deletedEtatPersonnel) {
//       return res.status(404).send("Etat Personnel not found");
//     }
//     res.sendStatus(200);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

// const updateEtatPersonnelById = async (req, res) => {
//   try {
//     const etatPersonnelId = req.params.id;
//     const { etat_ar, etat_fr } = req.body;

//     const updatedEtatPersonnel =
//       await EtatPersonnelService.updateEtatPersonnelDao(etatPersonnelId, {
//         etat_ar,
//         etat_fr,
//       });

//     if (!updatedEtatPersonnel) {
//       return res.status(404).send("Etat Personnel not found!");
//     }
//     res.json(updatedEtatPersonnel);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

module.exports = {
  getTeacherSpecialtiesByFacultyId,
  getTeacherSpecialtiesOfAllFaculties
  // getAllFaculties,
  // updateEtatPersonnelById,
  // deleteEtatPersonnelById,
};
