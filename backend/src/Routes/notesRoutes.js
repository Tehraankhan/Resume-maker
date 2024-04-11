const express = require("express");
const notes = require("../models/notes");
const { getNote, creatNote, deleteNote, updateNote ,firstentry} = require("../controllers/noteController");
const notesRouter = express.Router();
const auth = require("../middle/auth")

notesRouter.get("/",auth,getNote);
notesRouter.post("/",auth,creatNote);
notesRouter.delete("/:id",auth,deleteNote)
notesRouter.put("/:id",auth,updateNote);

module.exports = notesRouter;