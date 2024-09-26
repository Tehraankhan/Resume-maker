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
    (state) => state.userDataSlicekey.currentUerData
  );
  console.log(currentUserData);

  return (
    <>
      <div className=" border-[1px] rounded-[10px] h-full w-[95%] mt-[20px] mx-auto flex flex-col bg-[white] shadow-2xl">
        <div className="flex flex-col mx-[auto]">
          <h1
            className={`text-[35px] text-[blue] mx-[auto] 
      ${currentUserData.personal.name.formatting.bold ? "font-bold" : ""} 
      ${currentUserData.personal.name.formatting.italic ? "italic" : ""} 
      ${currentUserData.personal.name.formatting.underline ? "underline" : ""}`}
          >
            {currentUserData.personal.name.text}
          </h1>
          <h1
            className={`text-[15px] mx-[auto] 
            ${
              currentUserData.personal.email.formatting.bold ? "font-bold" : ""
            } 
      ${currentUserData.personal.email.formatting.italic ? "italic" : ""} 
      ${currentUserData.personal.email.formatting.underline ? "underline" : ""}
              
              
              `}
          >
            {currentUserData.personal.email.text}
          </h1>
          <a
            className={`text-[15px] mx-[auto] text-blue-500 
              ${
                currentUserData.personal.linkedin.formatting.bold
                  ? "font-bold"
                  : ""
              } 
      ${currentUserData.personal.linkedin.formatting.italic ? "italic" : ""} 
      ${
        currentUserData.personal.linkedin.formatting.underline
          ? "underline"
          : ""
      }
              
              
              `}
            href={currentUserData.personal.linkedin.text}
          >
            {" "}
            {currentUserData.personal.linkedin.text}
          </a>
          <h1
            className={`text-[15px] mx-[auto]
            ${
              currentUserData.personal.contact.formatting.bold
                ? "font-bold"
                : ""
            } 
      ${currentUserData.personal.contact.formatting.italic ? "italic" : ""} 
      ${
        currentUserData.personal.contact.formatting.underline ? "underline" : ""
      }
              
              
              `}
          >
            {currentUserData.personal.contact.text}
          </h1>
        </div>

        <div className="flex flex-col ">
          <h1
            className="text-[20px] text-[darkblue] ml-[20px]"
            style={{ display: currentUserData.education.length ? "" : "none" }}
          >
            Education
          </h1>
          <hr
            className="ml-[21px] h-[1px]  bg-[black] border-0 mr-[10px] mt-[4px]"
            style={{ display: currentUserData.education.length ? "" : "none" }}
          ></hr>

          {currentUserData.education.map((elem) => {
            return (
              <>
                <div
                  style={{
                    display: currentUserData.education.length ? "" : "none",
                  }}
                >
                  <h1
                    className={`text-[15px] ml-[20px] mt-[2px] font-bold}
                      ${elem.institutename.formatting.bold ? "font-bold" : ""} 
                      ${elem.institutename.formatting.italic ? "italic" : ""} 
                      ${
                        elem.institutename.formatting.underline
                          ? "underline"
                          : ""
                      }`}
                  >
                    {elem.institutename.text}
                  </h1>
                  <div className="flex flex-row">
                    <span
                      className={`ml-[20px] mt-[2px] text-[15px]${
                        elem.CourseName.formatting.bold ? "font-bold" : ""
                      } 
      ${elem.CourseName.formatting.italic ? "italic" : ""} 
      ${elem.CourseName.formatting.underline ? "underline" : ""}`}
                    >
                      {elem.CourseName.text}
                    </span>
                    <span
                      className={`ml-[20px] mt-[2px] text-[15px]${
                        elem.degree.formatting.bold ? "font-bold" : ""
                      } 
      ${elem.degree.formatting.italic ? "italic" : ""} 
      ${elem.degree.formatting.underline ? "underline" : ""}`}
                    >
                      {elem.degree.text}
                    </span>
                    <span
                      className={`ml-[4px] mt-[2px] text-[15px]
                      ${
                        elem.yearofgradutation.formatting.bold
                          ? "font-bold"
                          : ""
                      } 
      ${elem.yearofgradutation.formatting.italic ? "italic" : ""} 
      ${elem.yearofgradutation.formatting.underline ? "underline" : ""}`}
                    >
                      {elem.yearofgradutation.text}
                    </span>
                    <span
                      className={`ml-[4px] mt-[2px] text-[15px]
                      ${elem.description.formatting.bold ? "font-bold" : ""} 
      ${elem.description.formatting.italic ? "italic" : ""} 
      ${elem.description.formatting.underline ? "underline" : ""}`}
                    >
                      {elem.description.text}
                    </span>
                  </div>
                </div>
              </>
            );
          })}

          <h1 className="text-[20px] text-[darkblue] ml-[20px] mt-[10px]" style={{ display: (currentUserData.project).length ? '' : "none" }}>Project</h1>
<hr className="ml-[21px] h-[1px]  bg-[black] border-0 mr-[10px] mt-[4px]" style={{ display: (currentUserData.project).length ? '' : "none" }}></hr>


{currentUserData.project.map((elem) => {
            return (
              <>
                <div
                  style={{
                    display: currentUserData.project.length ? "" : "none",
                  }}
                >
                  <h1
                    className={`text-[18px] ml-[20px] mt-[2px] font-bold}
                      ${elem.projectname.formatting.bold ? "font-bold" : ""} 
                      ${elem.projectname.formatting.italic ? "italic" : ""} 
                      ${
                        elem.projectname.formatting.underline
                          ? "underline"
                          : ""
                      }`}
                  >
                    {elem.projectname.text}
                  </h1>

                  <span
                      className={`ml-[20px] mt-[2px] text-[15px]${
                        elem.description.formatting.bold ? "font-bold" : ""} 
      ${elem.description.formatting.italic ? "italic" : ""} 
      ${elem.description.formatting.underline ? "underline" : ""}`}
                    >
                      {elem.description.text}
                    </span>
                
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
