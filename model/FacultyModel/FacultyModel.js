const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema(
  {
    name_ar: String,
    name_fr: String,
    server_domain_name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculty", FacultySchema);
