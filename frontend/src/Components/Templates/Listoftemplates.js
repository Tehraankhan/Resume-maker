import React, { useState } from "react";
import Template2 from "./Template2"
import Template1 from "./Template1";
import { useLocation } from 'react-router-dom';

import dataContext from "../../context/datacontext";
import { useContext } from "react";



export default function Listoftemplates()
{
   const {item ,setitem} = useContext(dataContext)
    const [selectedTemplate,setselectedTemplate]=useState(item?.selectedtemplate);
 

    const Template=[
        {id:"0" , src:require('./Image/template1.png'), alt:"template 1"},
        {id:"1" ,src:require('./Image/template2.png'),alt:"tempplate 2"}
    ]

    


    const changeTemplate = (e)=>{
    setselectedTemplate(e.target.id)
    setitem((prevItem) => {
        // Create a copy of the 'item' object
        const updatedItem = { ...prevItem };

        // Update the number variable in the 'item' object
        updatedItem.selectedtemplate = selectedTemplate  
        localStorage.setItem('item', JSON.stringify(updatedItem));
      
       
      });
  
    }
    return(
    
    <>

    

    <div className="flex flex-row flex-shrink-0 ">

<div className=" bg-[#252525e8] shadow-md flex flex-col h-[720px] w-[740px] overflow-y-auto flex-shrink-0 no-scrollbar">

<div  className="grid grid-cols-2 gap-2">  
         
       
          {



        Template.map((elem,id)=>{


            return(<>
            
            <img className="ml-[50px] mt-[30px] h-[300px] w-[250px]" src={elem.src} alt={elem.alt} id={id} onClick={changeTemplate}></img>
            
            
            </>)
        })
    }
    </div> 
    
   



</div>
<div className="h-screen w-[800px]  bg-[#e6e9ff]  overflow-y-scroll  ">

{



Template.map((elem)=>{

    {

        if(selectedTemplate == elem.id)
        {
            return(<>
    
    {
                        {
                            "0": <Template1 item={item}/>,
                            "1": <Template2 item={item}  />,
                            
                        }[selectedTemplate]
                    }
                
                </>)

        }
    }
   
})
}
    
    </div>

    </div>
    
    

    

   
    
    
 
    </>)
}