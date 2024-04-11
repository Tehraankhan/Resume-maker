const mongoose = require("mongoose")

const educationSchema =  mongoose.Schema({

    name : {type : String , 
            required : true ,
        default : " "},

    institutename : { type : String ,
        required : true ,
    default : " "},

    educationtype : { type : String ,
        required : true ,
    default : " "},

    yearofgradutation : { type : String ,
        required : true ,
    default : " "},

    degree : { type : String ,
        required : true ,
    default : " "},

    description : { type : String ,
        required : true ,
    default : " "}
    



})

const projectSchema = mongoose.Schema({

    name :{name : String },

    projectname : { type : String },

    description : { type : String }
    
})

const personalSchema = mongoose.Schema({

    name : {
        type:String,
        required:true ,
      
    },
    email : {
        type:String,
        required:true ,
        

    },
    contact : {
        type:String,
        required:true ,
        default : " "

    },
    linkedin : {
        type:String,
        required:true ,
        default : " "

    }
})

const notesSchema = mongoose.Schema({

   personal:{
    name : {
        type:String,
        required:true 
      
    },
    email : {
        type:String,
        required:true 
        

    },
    contact : {
        type:String,
        required:true ,
       

    },
    linkedin : {
        type:String,
        required:true ,
       

    }

   },

    userId : {
        type:mongoose.Schema.ObjectId,
        required:true

    },

    education : [

    ],

    project : [
        {
         name :{name : String },

        projectname : { type : String },
    
        description : { type : String }
    

        }
        
    ],
    selectedtemplate :{
        type : String,
        default : "1",
        required : true
    
    },
    visible1:{
        type: Boolean,
        default: false,

    },
    visible2:{
        type: Boolean,
        default: false,

    }
        
},{timestamps:true});

module.exports = mongoose.model("notes",notesSchema)