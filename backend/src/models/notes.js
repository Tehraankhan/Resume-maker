const mongoose = require("mongoose");

const formattingSchema = new mongoose.Schema(
  {
    bold: { type: Boolean, default: false },
    italic: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema({
  projectname: {
    text: { type: String, required: true },
    formatting: formattingSchema,
  },

  description: {
    text: { type: String, required: true },
    formatting: formattingSchema,
  },
},
{ _id: false });

const educationSchema = new mongoose.Schema(
  {
    institutename: {
      text: { type: String, required: true },
      formatting: formattingSchema,
    },
    degree: {
      text: { type: String, required: true },
      formatting: formattingSchema,
    },
    CourseName: {
      text: { type: String, required: true },
      formatting: formattingSchema,
    },
    yearofgradutation: {
      text: { type: String, required: true },
      formatting: formattingSchema,
    },
    description: {
      text: { type: String, required: true },
      formatting: formattingSchema,
    },
  },
  { _id: false }
);

const notesSchema = mongoose.Schema(
  {
    personal: {
      name: {
        text: { type: String, required: true },
        formatting: formattingSchema,
      },
      email: {
        text: { type: String, required: true },
        formatting: formattingSchema,
      },
      contact: {
        text: { type: String, required: true },
        formatting: formattingSchema,
      },
      linkedin: {
        text: { type: String, required: true },
        formatting: formattingSchema,
      },
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, // This ensures that userId is required
      ref: "User", // This is assuming userId references a User model
    },

    education: [educationSchema],

    project: [projectSchema],
    selectedtemplate: {
      type: String,
      default: "1",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("notes", notesSchema);
