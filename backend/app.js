const express = require("express")
const UserRoutes = require("./src/Routes/userRoutes")
const notesNotes = require("../backend/src/Routes/notesRoutes")
const mongoose = require("mongoose")
const app = express()
const dotenv = require("dotenv");


const cors =require("cors")
app.use(cors())
app.use(express.json());
app.use("/user",UserRoutes);
app.use("/notes",notesNotes);


dotenv.config()

const PORT = process.env.PORT || 5000






app.get("/",(req,res)=>{

res.send("dfjdkjf");

})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`)
         
         })


})
.catch((error)=>{
console.log(error)

})





