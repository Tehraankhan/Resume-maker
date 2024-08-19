const mongoose = require("mongoose");

const educationSchema = mongoose.Schema({
  institutename: { type: String, required: true, default: " " },

  degree: { type: String, required: true, default: " " },
  location: { type: String, required: true, default: " " },
  yearofgradutation: { type: String, required: true, default: " " },

  description: { type: String, required: true, default: " " },
});

const projectSchema = mongoose.Schema({
  name: { name: String },

  projectname: { type: String },

  description: { type: String },
});

// const personalSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },z
//   contact: {
//     type: String,
//     required: true,
//     default: " ",
//   },
//   linkedin: {
//     type: String,
//     required: true,
//     default: " ",
//   },
// });


const formattingSchema = new mongoose.Schema({
  bold: { type: Boolean, default: false },
  italic: { type: Boolean, default: false },
  underline: { type: Boolean, default: false }
},{_id:false});



const notesSchema = mongoose.Schema(
  {
    personal: {
      name: {
        text: { type: String, required: true },
        formatting:formattingSchema

      },
      email: {
        text: {type: String , required:true },
        formatting:formattingSchema,
        
      },
      contact: {
        text: {type: String , required:true },
        formatting:formattingSchema,
        
      },
      linkedin: {
        text: {type: String , required:true },
        formatting:formattingSchema,
        
      },
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,  // This ensures that userId is required
      ref: 'User'  // This is assuming userId references a User model
  },

    education: [
      {
        institutename: { type: String, required: true, default: " " },
        yearofgradutation: { type: String, required: true, default: " " },
        degree: { type: String, required: true, default: " " },
        description: { type: String, required: true, default: " " },
      },
    ],

    project: [
      {
        projectname: { type: String },
        description: { type: String },
      },
    ],
    selectedtemplate: {
      type: String,
      default: "1",
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("notes", notesSchema);
