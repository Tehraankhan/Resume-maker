import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

export default function Template1() {
  

  const currentUserData = useSelector(
    (state) => state.userDataSlicekey.currentUerData.personal
  );
  console.log(currentUserData)

  return (
    <>
       <div className=" mt-[10px] mx-[auto] h-[943px] w-[700px]   flex flex-col bg-[white] shadow-xl">
        <div className="flex flex-col mx-[auto]">
          <h1
            className={`text-[35px] text-[blue] mx-[auto] 
    ${currentUserData.name.formatting.bold ? "font-bold" : ""} 
    ${currentUserData.name.formatting.italic ? "italic" : ""} 
    ${currentUserData.name.formatting.underline ? "underline" : ""}`}
          >
            {currentUserData.name.text}
          </h1 >
          <h1 className={`text-[15px] mx-[auto] 
           ${currentUserData.email.formatting.bold ? "font-bold" : ""} 
    ${currentUserData.email.formatting.italic ? "italic" : ""} 
    ${currentUserData.email.formatting.underline ? "underline" : ""}
            
            
            `}>{currentUserData.email.text}</h1>
          <a
            className={`text-[15px] mx-[auto] text-blue-500 
             ${currentUserData.linkedin.formatting.bold ? "font-bold" : ""} 
    ${currentUserData.linkedin.formatting.italic ? "italic" : ""} 
    ${currentUserData.linkedin.formatting.underline ? "underline" : ""}
            
            
            `}
            href={currentUserData.linkedin.text}
          >
            {" "}
            {currentUserData.linkedin.text}
          </a>
          <h1 className={`text-[15px] mx-[auto]
           ${currentUserData.contact.formatting.bold ? "font-bold" : ""} 
    ${currentUserData.contact.formatting.italic ? "italic" : ""} 
    ${currentUserData.contact.formatting.underline ? "underline" : ""}
            
            
            `}>{currentUserData.contact.text}</h1>
        </div>
        
      </div> 
    </>
  );
}
