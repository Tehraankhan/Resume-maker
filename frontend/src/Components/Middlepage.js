import react from "react"
import Abstract from "./Abstract.jpg"

export default function Middlepage(){



    return(<>

<div className=" w-[100%] h-full border-[1px] border-[black] text-white">

<div className="w-[100%] h-[100%] border-[1px] border-[black] mx-auto">
  <img src={Abstract} className="h-full filter brightness-80 "></img>


</div>

<div className="flex flex-col absolute w-[100%] h-full  top-[0px]">
    <h1 className="text-[50px] ml-[10px] mt-[30px] text-[#d5ff00]">Eductaion</h1>
    <p className="ml-[10px] text-[30px] text-[#22ffc8]">Adding personal details along with LinkedIn helps reviewers view your profile perfectly</p>



    <div className="flex flex-col  ml-[10px] mt-[200px] w-[60%] rounded-[20px] h-[100px] border-dashed border-[1px] border-[blue] shadow-xl bg-[#dfdddd1f]">
    

</div>

</div>





</div>
    
    
    
    </>)
}