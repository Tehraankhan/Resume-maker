const { json } = require("express");
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

    
   
    const newnote = new noteModel({

        personal:{

            name: {
                text:" " ,
                formatting:{
                 bold: true,
                 italic: false,
                 underline: false
                }
    
           },
            email: {
                text:" ",
                formatting:{
                    bold: true,
                 italic: false,
                 underline: false
    
                }
            },
            contact:{
                text:" ",
                formatting:{
                    bold: true,
                 italic: false,
                 underline: false
    
                },
    
            },
            linkedin:{
                text:" ",
                formatting:{
                    bold: true,
                 italic: false,
                 underline: false
    
                },
            }
            
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

     console.log(req.body)
   
    const { name, email , contact, linkedin } = req.body
    const {text , formatting} = name
    const {bold , italic , underline}=formatting

    const newnote = {

        personal:{

            name: {
                   text:text || ' ',
                   formatting:{
                    bold: bold,
                    italic: italic,
                    underline: underline
                   }

              },
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

const getHistory = async (req,res) =>{

    try{

        const data = await noteModel.find({userId:req.userId});
        res.status(201).json(data)
        
   const historydata =  data.map((elem)=>{

      return   {
            selectedTemplate:elem.selectedtemplate,
            firstcreated:elem.createdAt,
            updated:elem.updatedAt
            

        };

        
      })

      console.log(historydata)

    }
    catch{

    }
}



const getselectedData = async (req,res) =>{
   const id= req.params.id
    try{
        console.log("yes")

        const data = await noteModel.find({_id:id});
        
         res.status(201).json(data)
    
     

    }
    catch{

    }
}

module.exports = {

    creatNote,
    updateNote,
    deleteNote,
    getNote,
    firstentry,
    getHistory,
    getselectedData
}