import React, { useEffect } from "react";
import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Project from "./Project";
import Template1 from "./Templates/Template1/Template1";
import Template1Pdf from "./Templates/Template1/Template1Pdf";
import Template2 from "./Templates/Template2/Template2";

import Template from "./Templates/Listoftemplates";
import Test from "./Test";
import { Link, useNavigate } from "react-router-dom";
import dataContext from "../context/datacontext";
import { useContext } from "react";
import { updateformatting } from "../Store/userDataSlice";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

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
  const [templateScrollbar, setTemplatescrollbar] = useState(false);

  const data = useSelector((state) => state.userDataSlicekey);
  const datalist = useSelector((state) => state.userDataSlicekey.datalist);
  const currentUserData = useSelector(
    (state) => state.userDataSlicekey.currentUerData
  );
  const navigate = useNavigate();

  console.log(data);

  const [step, setstep] = useState(1);

  const [currentFocus, setcurrentFocus] = useState("name");
  const [currentsection, setcurrentsection] = useState("personal");
  const selected = localStorage.getItem("selecteddata");
  const [expand, setExpand] = useState(false);
  const [formatting, setFormatting] = useState();
  const [remaining, setremaining] = useState({
    personal: "false",
    education: false,
    project: false,
  });

  const next = () => {
    //  dispatch(updatedata(data))
    setstep(step + 1);
    console.log(step);
  };

  const prev = () => {
    setstep(step - 1);
  };

  const MyDocument = () => <Template1Pdf data={currentUserData} />;

  const styles = StyleSheet.create({
    body: {
      padding: 10,
    },
  });

  const generatePDF = () => (
    // Create a new jsPDF instance

    <PDFDownloadLink document={<MyDocument />} fileName="resume2.pdf">
      {({ blob, url, loading, error }) => (
        <i className="fa-solid fa-download "></i>
      )}
    </PDFDownloadLink>
  );

  const handelformatting = (e) => {
    dispatch(
      updateformatting({
        currentInputField: currentFocus,
        FormattingButtonName: e.currentTarget.name,
        currentsection: currentsection,
      })
    );

    console.log(currentUserData);
  };

  const currentfocus = (e) => {
    setcurrentFocus(e.target.name);
  };

  useEffect(() => {
    if (step === 1) {
      setcurrentsection("personal");
      setcurrentFocus("");
    } else if (step === 2) {
      setcurrentsection("Education");
      setcurrentFocus("");
    } else if (step === 3) {
      setcurrentsection("project");
      setcurrentFocus("");
    }

    status();
  }, [step]);

  const status = () => {
    if (currentsection === "personal") {
      console.log("yes");
      for (var i in currentUserData.personal) {
        if (i.text == undefined) {
          setremaining({ ...remaining, personal: "true" });
        } else {
          setremaining({ ...remaining, personal: "false" });
        }
      }
    }
  };

  return (
    <>
      <div className="flex flex-col w-screen h-screen overflow-x-hidden">
        <div className="fixed w-full bg-[white]  h-[70px]   shadow-lg text-white  bg-black">
          <div className="flex flex-row justify-around pt-[13px]">
              <h1 className="text-[20px]">RESUME MAKER</h1>
            <div className="flex flex-row   ml-[20px]">
            
              <div className="flex flex-row items-center ">
                <h1 className="font-semibold">Current Focus</h1>
                <h1 className="bg-[white] text-black h-[34px] ml-[10px] mr-[10px] w-[100px] pl-[10px] pt-[4px] rounded-[5px]">
                  {currentFocus}
                </h1>
              </div>

              <div
                className={`ml-[20px] border-l-[#544c4cba] border-l-[1px] mt-[5px] ${
                  currentFocus ? "" : "cursor-not-allowed"
                }`}
              >
                <button
                  className={`ml-[10px] w-[25px] rounded-[3px] ${
                    currentsection === "personal" && currentFocus
                      ? currentUserData.personal[currentFocus].formatting?.bold
                        ? "bg-[#a7aaac38] border-[1px] border-[#a7aaac36]"
                        : "bg-black"
                      : currentsection === "Education" && currentFocus
                      ? currentUserData?.education[selected][currentFocus]
                          .formatting.bold
                        ? "bg-[#a7aaac38] border-[1px] border-[#a7aaac36]"
                        : "bg-black"
                      : ""
                  }`}
                  onClick={handelformatting}
                  name="bold"
                  disabled={currentFocus ? false : true}
                >
                  <i className="fa-solid fa-bold"></i>
                </button>
                <button
                  className={`ml-[10px] w-[25px] rounded-[3px] ${
                    currentsection === "personal" && currentFocus
                      ? currentUserData.personal[currentFocus].formatting
                          ?.italic
                        ? "bg-[#a7aaac38] border-[1px] border-[#a7aaac36]"
                        : "bg-black"
                      : currentsection === "Education" && currentFocus
                      ? currentUserData?.education[selected][currentFocus]
                          .formatting.italic
                        ? "bg-[#a7aaac38] border-[1px] border-[#a7aaac36]"
                        : "bg-black"
                      : ""
                  }`}
                  onClick={handelformatting}
                  name="italic"
                >
                  <i className="fa-solid fa-italic"></i>
                </button>
                <button
                  className={`ml-[10px] w-[25px] rounded-[3px] ${
                    currentsection === "personal" && currentFocus
                      ? currentUserData.personal[currentFocus].formatting
                          ?.underline
                        ? "bg-[#a7aaac38] border-[1px] border-[#a7aaac36]"
                        : "bg-black"
                      : currentsection === "Education" && currentFocus
                      ? currentUserData?.education[selected][currentFocus]
                          .formatting.underline
                        ? "bg-[#a7aaac38] border-[1px] border-[#a7aaac36]"
                        : "bg-black"
                      : ""
                  }`}
                  onClick={handelformatting}
                  name="underline"
                >
                  <i className="fa-solid fa-underline"></i>
                </button>
              </div>
              <div className="flex ml-[20px] border-l-[#544c4cba] border-l-[1px] mt-[5px] ">
                <label className="ml-[10px]">Text</label>
                <input
                className="ml-[10px] w-full h-1 mt-[10px] bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700 text-white"
                  type="range"
                  id="vol"
                  name="vol"
                  min="0"
                  max="50"
                  value="20"
                  
                ></input>
              </div>
            </div>

            <div className=""></div>
            <div class="relative flex justify-center items-center">
              <div className="absolute">
                <div class="flex w-[100px] h-[62px] justify-center items-center relative mt-[10px]">
                  <div class="w-[45%] h-[71%]    shadow-md shadow-pink-500  rounded-full bg-black absolute animate-spin_right"></div>
                </div>
                <i class="absolute fa-solid fa-user text-[23px] mt-[-44px] ml-[39px]"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#e6e9ff] flex flex-row  h-full mt-[70px]">
          <div
            className={`overflow-y-auto no-scrollbar ${
              expand ? "w-0" : "w-1/2  h-full bg-[#e6e9ff]  "
            }`}
          >
            {
              {
                1: (
                  <Personal
                    item={item}
                    setitem={setitem}
                    next={next}
                    currentfocus={currentfocus}
                  />
                ),
                2: (
                  <Education
                    item={item}
                    setitem={setitem}
                    next={next}
                    prev={prev}
                    currentfocus={currentfocus}
                  />
                ),
                3: (
                  <Project
                    item={item}
                    setitem={setitem}
                    next={next}
                    prev={prev}
                    currentfocus={currentfocus}
                  />
                ),
              }[step]
            }
          </div>
          <div className="w-1/2 h-full mx-auto">
            <div className="w-full bg-[#e6e9ff] h-full overflow-y-auto ">
              <div className="flex absolute border-[1px]  shadow-xl rounded-[5px]  w-[200px] h-[40px] mt-[550px]  ml-[300px]">
                <div className="flex w-full flex-row justify-around items-center">
                  <div className="">
                    <button className="">{generatePDF()}</button>
                  </div>

                  <div className="">
                    <button className="">
                      <i
                        class="fa-solid fa-table-columns"
                        onClick={() => setTemplatescrollbar(!templateScrollbar)}
                      ></i>
                    </button>
                  </div>

                  <div className="">
                    <i
                      className="fa-solid fa-expand cursor-pointer"
                      onClick={() => {
                        setExpand(!expand);
                      }}
                    ></i>
                  </div>
                </div>
              </div>

              <Template1 />
            </div>
          </div>
        </div>
        <div
          className=" absolute  w-screen h-screen  bg-[black]"
          style={{ display: templateScrollbar ? "block" : "none" }}
        >
          <div
            className={` animate-fade-right w-[900px] h-[500px] bg-[white] mt-[80px] mx-auto shadow-2xl  rounded-[10px] ${
              templateScrollbar ? "mx-auto" : ""
            }`}
          >
            <div className="w-[100%] h-[100%] flex-col">
              <div className="w-[90%] flex flex-row justify-between mx-auto mt-[20px]">
                <h1 className="  text-black  mx-auto text-[20px] mt-[10px]">
                  Templates
                </h1>
                <span
                  className="text-white text-[20px] float-right cursor-pointer "
                  onClick={() => setTemplatescrollbar(!templateScrollbar)}
                >
                  {"<"}
                </span>
              </div>

              <Template />
              <button
                className="w-[100px] h-[50px] bg-[black] float-right text-white rounded-[10px] mr-[10px] mt-[10px]"
                onClick={() => setTemplatescrollbar(!templateScrollbar)}
              >
                cancel
              </button>
              <button className="w-[100px] h-[50px] text-[white] float-right mr-[10px] rounded-[10px] mt-[10px] bg-gradient-to-r from-blue-600  to-indigo-400">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
