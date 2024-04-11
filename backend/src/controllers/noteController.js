const notes = require("../models/notes");
const noteModel = require("../models/notes")


const firstentry = async (req, res) => {

  
  console.log("yes")
    

    const firstnote = new noteModel({userId: req.userId})

    try {

        await firstnote.save();
        res.status(201).json(firstnote)



    } catch (error) {

        console.log(error)

    }

}

const creatNote = async (req, res) => {

    const { name, email , contact, linkedin } = req.body
    
    console.log(name)
    

    const newnote = new noteModel({

    personal:{

        name: name || " ",
        email: email || " ",
        contact:contact || " ",
        linkedin:linkedin || " ",
        
    },
     
      userId: req.userId, 
      

       
    })

    try {

        await newnote.save();
        res.status(201).json(newnote)



    } catch (error) {

        console.log(error)

    }

}

const updateNote = async (req, res) => {

    const id = req.params.id;
     console.log(id)
   
    const { name, email , contact, linkedin } = req.body
    console.log(name)
    const {project}= req.body
    console.log(project)

    const newnote = {

        personal:{

            name: name || " ",
            email: email || " ",
            contact:contact || " ",
            linkedin:linkedin || " ",
            
        },
         
          userId: req.userId, 
    }

    console.log(newnote)

    try {
        await noteModel.findByIdAndUpdate(id, newnote, { new: true });
        res.status(200).json(newnote)
        console.log("yess")

    } catch (error) {
        console.log(error)

    }

}

const deleteNote = async (req, res) => {

    const id = req.params.id;
    console.log(id)

    try {
        const note= await noteModel.findByIdAndDelete({_id:id});
        res.status(202).json({message : "deleted "})
        
    } catch (error) {
        console.log(error)
        
    }

}

const getNote = async (req, res) => {


    try {

        const notes = await noteModel.find({ userId: req.userId });
        res.status(201).json(notes);


    } catch (error) {

        console.log(error)

    }

}

module.exports = {

    creatNote,
    updateNote,
    deleteNote,
    getNote,
    firstentry
}