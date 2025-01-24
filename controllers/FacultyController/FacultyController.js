const facultyService = require("../../services/FacultyServices/FacultyServices");

const createFacultyController = async (req, res) => {
  try {
    const { name_ar, name_fr, server_domain_name } = req.body;

    const faculty = await facultyService.createFacultyService({
      name_ar,
      name_fr,
      server_domain_name,
    });
    res.json(faculty);
  } catch (error) {
    console.error(error);
  }
};

const getFacultyByIdController = async (req, res) => {
  try {
    const facultyId = req.params.id;

    const faculty = await facultyService.getFacultyByIdService(facultyId);

    if (!faculty) {
      return res.status(404).send("faculty not found");
    }
    res.json(faculty);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAllFaculties = async (req, res) => {
  try {
    const faculties = await facultyService.getFacultiesService();
    res.json(faculties);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

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
  createFacultyController,
  getFacultyByIdController,
  getAllFaculties,
  // updateEtatPersonnelById,
  // deleteEtatPersonnelById,
};
