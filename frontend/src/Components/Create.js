import React, { useEffect } from "react";
import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Project from "./Project"
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2"
import { Link } from "react-router-dom";
import dataContext from "../context/datacontext";
import { useContext } from "react";
import jsPDF from 'jspdf';

import ReactDOMServer from 'react-dom/server';

import { useDispatch ,useSelector} from "react-redux";

import { updatePersonalData ,updateCurrentUserDataId ,updatedata, fetchdata } from "../Store/userDataSlice";
import Signin from "./Userauthentication/Signin";


function Create() {
    const dispatch = useDispatch()

    const {item ,setitem} = useContext(dataContext)
    
    const data = useSelector((state) => state.userDataSlicekey);
    const datalist  = useSelector((state) => state.userDataSlicekey.datalist);
    
   console.log(data)
   


    const [visible, setvisibility] = useState(true)
    const [visible2, setvisibility2] = useState(true)
    const [step, setstep] = useState(1)




    const next = () => {
        
      //  dispatch(updatedata(data))
        setstep(step + 1)
    }

    const prev = () => {
        setstep(step - 1)
    }
    
 
  useEffect(()=>{
   


  },[])
    
    
    const generatePDF = () => {
        // Create a new jsPDF instance
       
   
      var templateHTML = ''
        if(item.selectedtemplate == 0)
        {
            templateHTML = ReactDOMServer.renderToString(<Template1 item={item} type={"1"} />); 
        }
        else if(item.selectedtemplate == 1)
        {

         templateHTML = ReactDOMServer.renderToString(<Template2 item={item} type={"1"} />); 
        }
        
    
        // Set font size and add template content to the PDF
        const doc = new jsPDF({

          });


        doc.html(templateHTML, {
          callback: function () {
            // Save the PDF with the filename "resume.pdf" after rendering
            doc.save('resume.pdf');
          }
        });
      };
    
    return (
        <>


          
        
            <div className="flex flex-row flex-shrink-0 ">

                <div className=" shadow-md flex flex-col h-[720px] w-[740px] overflow-y-auto flex-shrink-0 no-scrollbar">
                    {
                        {
                            1: <Personal item={item} setitem={setitem} next={next} />,
                            2: <Education item={item} setitem={setitem} next={next} prev={prev} />,
                            3: <Project item={item} visible2={visible2} setvisibility2={setvisibility2} setitem={setitem} next={next} prev={prev} />
                        }[step]
                    }




                </div>
                <div className="h-screen w-[800px]  bg-[#e6e9ff]  overflow-y-scroll  ">

                    <div className="mt-[20px] pl-[192px] w-[800px] h-[100px]  border-[black]">
                    <button className="w-[200px] h-[50px] text-[white] bg-[blue]  rounded-[4px]" onClick={generatePDF}>Download</button>
                 <Link to={{pathname:'/template' , state : item }}>  <button className=" w-[200px] h-[50px] mx-[10px] text-[white] bg-[#534987] rounded-[4px]">View Template</button></Link> 
                   





                    </div>

                   {

                      {
                         "0": <Template1 item={item} type={"0"}/>,
                        "1": <Template2 item={item}  />,
    
                     }[data.selectedtemplate]



                   }
                    {/*

 
                    */

                    }
                    <div className="flex flex-row mx-[auto]">
                  

                    </div>
                    
                    
                </div>
            </div>
                
          
        </>
    )
}

export default Create;