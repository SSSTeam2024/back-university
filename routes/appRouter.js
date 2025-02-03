const Router = require("express");
const router = new Router();

const facultyRoutes = require("./facultyRoutes/facultyRoutes");

const studentRoutes = require("./middllewareRoutes/StudentsRoutes/StudentRoutes");
const enseignantRoutes = require("./middllewareRoutes/EnseignantsRoutes/EnseignantRoutes");
const teacherRankRoutes = require("./middllewareRoutes/TeacherRankRoutes/TeacherRankRoutes");
const teacherSpecialtyRoutes = require("./middllewareRoutes/TeacherSpecialtiesRoutes/TeacherSpecialtiesRoutes");
const studentSubscriptionRoutes = require("./middllewareRoutes/StudentSubscriptionTypesRoutes/StudentSubscriptionTypesRoutes");
const studentLevelRoutes = require("./middllewareRoutes/StudentLevelRoutes/StudentLevelRoutes");
const personnelRoutes = require("./middllewareRoutes/PersonnelsRoutes/PersonnelRoutes");
const personnelCategoryRoutes = require("./middllewareRoutes/PersonnelCategoriesRoutes/PersonnelCategoriesRoutes");
const personnelRankRoutes = require("./middllewareRoutes/PersonnelRankRoutes/PersonnelRanksRoutes");
const personnelPostRoutes = require("./middllewareRoutes/PersonnelPostRoutes/PersonnelPostRoutes");

//Faculty
router.use("/faculty", facultyRoutes);

//Student
router.use("/student", studentRoutes);
//Student Subscription Types
router.use("/student-subscription", studentSubscriptionRoutes);
//Student Level
router.use("/student-level", studentLevelRoutes);

//Enseignant
router.use("/enseignant", enseignantRoutes);
//Teacher Rank
router.use("/rank", teacherRankRoutes);
//Teacher Specialty
router.use("/specialty", teacherSpecialtyRoutes);

//Personnel
router.use("/personnel", personnelRoutes);
router.use("/personnel-category", personnelCategoryRoutes);
router.use("/personnel-rank", personnelRankRoutes);
router.use("/personnel-post", personnelPostRoutes);

module.exports = router;
