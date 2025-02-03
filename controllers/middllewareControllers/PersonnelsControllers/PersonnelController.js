const facultyService = require("../../../services/FacultyServices/FacultyServices");
const axios = require("axios");

// const getStudentsByFacultyId = async (req, res) => {
//   try {
//     const facultyId = req.params.id;

//     const faculty = await facultyService.getFacultyByIdService(facultyId);

//     const FACULTY_API = faculty.server_domain_name;

//     const students = await axios.get(
//       `${FACULTY_API}/etudiant/get-all-etudiant`
//     );

//     if (!students.data) {
//       return res.status(404).send("students not found");
//     }
//     res.json(students.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

const getPersonnelsOfAllFaculties = async (req, res) => {
  try {
    const faculties = await facultyService.getFacultiesService();

    let totalPersonnels = [];
    let totalPersonnelsNumber = 0;

    for (const faculty of faculties) {
      const FACULTY_API = faculty.server_domain_name;

      const facultyPersonnels = await axios.get(
        `${FACULTY_API}/personnel/get-all-personnel`
      );
      const personnelByFaculty = {
        facultyName: faculty.name_fr,
        personnels: facultyPersonnels.data,
        personnelsNumber: facultyPersonnels.data.length,
      };
      totalPersonnelsNumber += personnelByFaculty.personnelsNumber;
      totalPersonnels.push(personnelByFaculty);
    }

    if (!totalPersonnels) {
      return res.status(404).send("personnels not found");
    }
    result = {
      totalPersonnels: totalPersonnels,
      totalPersonnelsNumber: totalPersonnelsNumber,
    };
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
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
  getPersonnelsOfAllFaculties
  // getAllFaculties,
  // updateEtatPersonnelById,
  // deleteEtatPersonnelById,
};
