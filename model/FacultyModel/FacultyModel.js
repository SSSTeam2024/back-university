const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema(
  {
    name_ar: String,
    name_fr: String,
    server_domain_name: String,
    abreviation: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculty", FacultySchema);
