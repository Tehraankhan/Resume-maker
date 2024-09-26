const express = require("express");
const notes = require("../models/notes");
const { getNote, creatNote, deleteNote, updateNote ,firstentry ,getHistory ,getselectedData} = require("../controllers/noteController");
const notesRouter = express.Router();
const auth = require("../middle/auth")


notesRouter.delete("/delete/selecteddata/:id",auth,deleteNote)
notesRouter.put("/:id",auth,updateNote);
notesRouter.post("/",auth,creatNote);
notesRouter.get("/",auth,getNote);
notesRouter.get("/getHistory",auth,getHistory);
notesRouter.get("/:id",auth,getselectedData);
notesRouter.post("/",auth,creatNote);




module.exports = notesRouter;