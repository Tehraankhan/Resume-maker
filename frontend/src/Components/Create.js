import React, { useEffect } from "react";
import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Project from "./Project";
import Template1 from "./Templates/Template1/Template1";
import Template1Pdf from "./Templates/Template1/Template1Pdf";
import Template2 from "./Templates/Template2/Template2";
import Test from "./Test";
import { Link } from "react-router-dom";
import dataContext from "../context/datacontext";
import { useContext } from "react";
import { updateformatting } from "../Store/userDataSlice";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";



import { useDispatch, useSelector } from "react-redux";

import {
  updatePersonalData,
  updateCurrentUserDataId,
  updatedata,
  fetchdata,
} from "../Store/userDataSlice";
import Signin from "./Userauthentication/Signin";

function Create() {
  const dispatch = useDispatch();

  const { item, setitem } = useContext(dataContext);

  const data = useSelector((state) => state.userDataSlicekey);
  const datalist = useSelector((state) => state.userDataSlicekey.datalist);
  const currentUserData = useSelector((state) => state.userDataSlicekey.currentUerData);
  



  console.log(data);

 
  const [step, setstep] = useState(1);

  const [currentFocus,setcurrentFocus] = useState("name");


  const next = () => {
    //  dispatch(updatedata(data))
    setstep(step + 1);
  };

  const prev = () => {
    setstep(step - 1);
  };

  const MyDocument = () => (
    <Template1Pdf data={currentUserData}/>
    
  );


  const styles = StyleSheet.create({
    body: {
      padding: 10,
    },
  });

  const generatePDF = () => (
    // Create a new jsPDF instance

    <PDFDownloadLink
    document={<MyDocument/>}
    fileName="resume2.pdf"
    className="ml-[10px]"
  >
    {({ blob, url, loading, error }) =>
      <i className="fa-solid fa-download text-[15px]"></i>
    }
  </PDFDownloadLink>

  
  );


  const formatting = (e)=> {

    dispatch(updateformatting({
    currentInputField:currentFocus,
    FormattingButtonName:e.currentTarget.name
   }
   ))

   console.log(currentUserData)

    


  }



   const currentfocus = (e) =>{
    
     setcurrentFocus(e.target.name)
   }
  return (
    <>
       <div className="flex flex-row flex-shrink-0 ">
        <div className="border-r-[black]  shadow-md flex flex-col h-[720px] w-[740px] overflow-y-auto flex-shrink-0 no-scrollbar">
          {
            {
              1: <Personal item={item} setitem={setitem} next={next} currentfocus={currentfocus} />,
              2: (
                <Education
                  item={item}
                  setitem={setitem}
                  next={next}
                  prev={prev}
                />
              ),
              3: (
                <Project
                  item={item}
              
                  setitem={setitem}
                  next={next}
                  prev={prev}
                />
              ),
            }[step]
          }
        </div>
        <div className="h-screen w-[800px]  bg-[#e6e9ff]  overflow-y-scroll  ">
          <div className="bg-[white] w-[800px] h-[70px]  border-b-[black]  shadow-lg fixed">
            <div className="flex flex-row pt-[19px]">
              <div className="flex flex-row border-r-[#544c4c40] border-r-[1px] ml-[20px]">
                <h1 className="font-semibold">Current Focus</h1>
                <h1 className="bg-[#1bab9330] h-[34px] ml-[10px] mr-[10px] w-[100px] pl-[10px] pt-[4px]">
                  {currentFocus}
                </h1>
              </div>
              <div className="flex flex-col ml-[20px] ">
                <h1 className="text-[black] font-bold">Text</h1>
                <input type="color" className="w-[39px] h-[13px] rounded-[5px]"></input>
              </div>

              <div className="ml-[20px] border-l-[#544c4c40] border-l-[1px] mt-[5px]">
                <button className="ml-[10px]" onClick={formatting} name="bold">
                  
                  <i className="fa-solid fa-bold" ></i>
                </button>
                <button className="ml-[20px]" onClick={formatting} name="italic">
                  <i className="fa-solid fa-italic"></i>
                </button>
                <button className="ml-[20px]" onClick={formatting} name="underline">
                  <i className="fa-solid fa-underline"></i>
                </button>
              </div>
              <div className="flex ml-[20px] border-l-[#544c4c40] border-l-[1px] mt-[5px] ">
                <div className="flex flex-col">
                  
                  <button className="w-[10]" >{generatePDF()}
</button>
                </div>
                <div>
                  
                  <Link to={{ pathname: "/template", state: item }}>
                  {" "}
                  <button className="">
                    <i className="fa-solid fa-eye text-[15px] ml-[20px]"></i>
                  </button>
                </Link>
                </div>
                
                
              </div>
            </div>
          </div>
      <div className="w-[78px] h-[50px]  bg-[grey] absolute ml-[718px] mt-[100px] rounded-tl-[5px] rounded-bl-[10px]">
      <i className="fa-solid fa-user text-[25px] text-[white] ml-[20px] mt-[10px]"></i>
      </div>
      <div className="mt-[100px]">

      
        
              <Template1/>
          
            
          </div>
          
        </div>
      </div> 
    </>
  );
}

export default Create;
