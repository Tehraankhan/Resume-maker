import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {updatedata,updateProjectData} from "../Store/userDataSlice"

export default function Project({ currentfocus , next, prev }) {


    const [name,setName]=useState(true)

    const [selecteddata, setsetselectedData] = useState(() => {
      // Retrieve selecteddata from localStorage when the component mounts
      const savedSelectedData = localStorage.getItem("selecteddata");
      return savedSelectedData ? parseInt(savedSelectedData, 10) : 0;
    });
    
    const dispatch = useDispatch();
  
    const currentUserData = useSelector(
      (state) => state.userDataSlicekey.currentUerData.project
    );
  
    const [projectData, setprojectData] = useState({
      projectname: {
        text: "",
        formatting: {
          bold: false,
          italic: false,
          underline: false,
        },
      },
      description: {
        text: "",
        formatting: {
          bold: false,
          italic: false,
          underline: false,
        },
      },
    });
  
    const Input = (e) => {
      const { name, value } = e.target;
  
      setprojectData((prevData) => ({
        ...prevData,
        [name]: {
          ...prevData[name],
          text: value,
        },
      }));

      console.log(projectData)
  
      dispatch(
        updateProjectData({
          project: {
            ...projectData,
            [name]: {
              ...projectData[name],
              text: value,
            },
          },
          selected: selecteddata,
        })
      );
    };
  
    const Addnew = () => {
      setprojectData({
        projectname: {
          text: "",
          formatting: {
            bold: false,
            italic: false,
            underline: false,
          },
        },
        description: {
          text: "",
          formatting: {
            bold: false,
            italic: false,
            underline: false,
          },
        },
      });
      const newSelectedData = currentUserData.length;
      setsetselectedData(newSelectedData);
      localStorage.setItem("selecteddata", newSelectedData); // Store in localStorage
  
      setName(false);
    };
  
    const Saveandsend = () => {
      dispatch(updatedata());
      setName(true);
    };
  
    const Edit = (elem, index) => {
      setName(false);
  
      
      setprojectData({
        projectname: elem.projectname,
        description: elem.description,
      });
      // setsetselectedData(index);
      // localStorage.setItem("selecteddata", index);
    };
  
    useEffect(() => {
      setprojectData({
        projectnamename: {
          text: "",
          formatting: {
            bold: false,
            italic: false,
            underline: false,
          },
        },
       
        description: {
          text: "",
          formatting: {
            bold: false,
            italic: false,
            underline: false,
          },
        },
      });
    }, []);
    return ( 
    <>
      
      {
      name === true ? (
        <>
          <div className="shadow-2xl mt-[20px] mx-auto w-[95%] h-full bg-[white] rounded-[10px]">
            <div className="flex flex-col h-full justify-around w-[90%] h-full bg-[white] mx-auto ">
              <div className="w-full">
                <h1 className="text-[40px]">Project </h1>
                <p className="text-[40px]">Add your Project data </p>
              </div>
              <div className="w-full h-[300px] overflow-y-auto no-scrollbar">
                
                {currentUserData?.map((elem, index) => (
                  <div
                    key={index}
                    className="w-[90%] shadow-xl border-[1px] border-[black] h-[90px] rounded-[5px] mt-[10px] mx-auto"
                    onClick={() => {
                      setsetselectedData(index);
                      localStorage.setItem("selecteddata", index); // Store in localStorage
                    }}
                  >
                    <div className="flex flex-row mx-auto mt-[30px] h-full w-[90%]">
                      <div className="w-[80%]">
                        <span>{elem.projectname.text}</span>
                      </div>
                      <div className="w-[20%] flex justify-between">
                        <span>Delete</span>
                        <span onClick={() => Edit(elem, index)}>Edit</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-end  w-full ">
                <button className="w-[100px] border-[1px] border-[black] h-[30px] rounded-[5px] " onClick={next}>
                  Skip
                </button>
                <button className="w-[100px] border-[1px] border-[black] h-[30px] ml-[40px] rounded-[5px]" onClick={Addnew}>
                  + Add new
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" shadow-2xl mt-[20px] mx-auto w-[95%] h-[900px] bg-[white] rounded-[10px]">
           <div className="w-[95%] h-full mx-auto flex flex-col  ">
            <div className="flex flex-row mt-[10px] mx-[7%]" onClick={prev}>
              <i className="fa-solid fa-arrow-left-long text-[19px] mt-[6px]"></i>
              <h1 className="text-[19px] ml-[5px]">Back</h1>
            </div>

            <h1 className="text-[40px] mx-[auto] bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text">
              Project
            </h1>
            <div className="flex flex-row w-[90%]  h-[100px] mt-[30px] bg-[#1b1fab0f] mx-auto">
              <i className="fa-solid fa-user-graduate text-[70px] ml-[20px] mt-[10px] mr-[20px]"></i>
              <div className="flex flex-col">
                <h1 className="text-[25px] ml-[10px]">
                  Add your Personal Details
                </h1>
                <p className="ml-[10px]">
                  Adding personal details along with linkedin help review to
                  view your profile perfectly
                </p>
              </div>
            </div>
           
            <div className="flex flex-row mt-[20px] ml-[30px] ">
              <div className="flex flex-col">
                <label className="text-[19px] mb-[10px]">Project Name</label>
                <input
                  name="projectname"
                  className="h-[40px] w-[260px] border-solid border-[1px]  rounded-[2px] pl-2 border-[#1e1e70]"
                  onChange={Input}
                  type="text"
                  placeholder="Eg:- name"
                  onFocus={currentfocus}
                  value={projectData.projectname.text}
                ></input>
              </div>
             
            </div>
            <div className="flex flex-row mt-[20px] mx-auto">
              <div className="flex flex-col">
                <label className="text-[19px]">Description</label>
                <textarea
                  name="description"
                  className="h-[200px] w-[623px] border-solid border-[1px] my-[30px] rounded-[2px] pl-2 border-[#1e1e70]"
                  onChange={Input}
                  type="text"
                  onFocus={currentfocus}
                  value={projectData.description.text}
                ></textarea>
              </div>
            </div>
            <button
              className="mx-[auto] mt-[60px] w-[200px] h-[50px] bg-[#141441] text-[white] rounded-[5px] text-[20px]"
              onClick={Saveandsend}
            >
              Next
            </button>
            </div>
          </div>





    </>)

      
}
</>)
}
