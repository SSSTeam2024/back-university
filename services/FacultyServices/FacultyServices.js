const facultyDao = require("../../dao/FacultyDao/FacultyDao");

const createFacultyService = async (faculty) => {
  return await facultyDao.createFaculty(faculty);
};

const getFacultyByIdService = async (id) => {
  return await facultyDao.getFacultyById(id);
};

const getFacultiesService = async () => {
  return await facultyDao.getFaculties();
};

// const updateEtatPersonnelDao = async (id, updateData) => {
//   return await EtatPersonnelDao.updateEtatPersonnel(id, updateData);
// };

// const deleteEtatPersonnelDao = async (id) => {
//   return await EtatPersonnelDao.deleteEtatPersonnel(id)
// };

module.exports = {
  createFacultyService,
  getFacultyByIdService,
  getFacultiesService,
  // deleteEtatPersonnelDao,
  // updateEtatPersonnelDao,
};
