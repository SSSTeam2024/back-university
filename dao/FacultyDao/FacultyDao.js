const facultyModel = require("../../model/FacultyModel/FacultyModel");

const createFaculty = async (faculty) => {
  return await facultyModel.create(faculty);
};

const getFaculties = async () => {
  return await facultyModel.find();
};

// const updatefacultyModel = async (id, updateData) => {
//   return await facultyModel.findByIdAndUpdate(id, updateData, { new: true });
// };

// const deletefacultyModel = async (id) => {
//   return await facultyModel.findByIdAndDelete(id);
// };

const getFacultyById = async (id) => {
  return await facultyModel.findById(id);
};

module.exports = {
  createFaculty,
  getFaculties,
  // updateEtatPersonnel,
  // deleteEtatPersonnel,
  getFacultyById,
};
