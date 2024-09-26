import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEducationData, updatedata } from "../Store/userDataSlice";

export default function Education({
  item,
  setitem,
  visible,
  setvisibility,
  next,
  prev,
  currentfocus,

}) {
  const [name, setName] = useState(true);
  const [selecteddata, setsetselectedData] = useState(() => {
    // Retrieve selecteddata from localStorage when the component mounts
    const savedSelectedData = localStorage.getItem("selecteddata");
    return savedSelectedData ? parseInt(savedSelectedData, 10) : 0;
  });
  
  const dispatch = useDispatch();

  const currentUserData = useSelector(
    (state) => state.userDataSlicekey.currentUerData.education
  );

  const [educationData, setEducationData] = useState({
    institutename: {
      text: "",
      formatting: {
        bold: false,
        italic: false,
        underline: false,
      },
    },
    yearofgradutation: {
      text: "",
      formatting: {
        bold: false,
        italic: false,
        underline: false,
      },
    },
    CourseName: {
      text: "",
      formatting: {
        bold: false,
        italic: false,
        underline: false,
      },
    },
    degree: {
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

    setEducationData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        text: value,
      },
    }));

    dispatch(
      updateEducationData({
        education: {
          ...educationData,
          [name]: {
            ...educationData[name],
            text: value,
          },
        },
        selected: selecteddata,
      }
    )
    );
  };

  const Addnew = () => {
    setEducationData({
      institutename: {
        text: "",
        formatting: {
          bold: false,
          italic: false,
          underline: false,
        },
      },
      yearofgradutation: {
        text: "",
        formatting: {
          bold: false,
          italic: false,
          underline: false,
        },
      },
      CourseName: {
        text: "",
        formatting: {
          bold: false,
          italic: false,
          underline: false,
        },
      },
      degree: {
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
    }
  
  );
    const newSelectedData = currentUserData.length;
    setsetselectedData(newSelectedData);
    localStorage.setItem("selecteddata", newSelectedData); // Store in localStorage
    dispatch(updateEducationData({education:{...educationData} ,selected:newSelectedData}))

    setName(false);
  };

  const Saveandsend = () => {
    dispatch(updatedata());
    setName(true);
  };

  const Edit = (elem, index) => {
    setName(false);

    console.log(elem.institutename)
    setEducationData({
      institutename: elem.institutename,
      yearofgradutation: elem.yearofgradutation,
     CourseName:elem.CourseName,
      degree: elem.degree,
      description: elem.description,
    });
    // setsetselectedData(index);
    // localStorage.setItem("selecteddata", index);
  };

  useEffect(() => {
    setEducationData({
      institutename: {
        text: "",
        formatting: {
          bold: false,
          italic: false,
          underline: false,
        },
      },
      yearofgradutation: {
        text: "",
        formatting: {
          bold: false,
          italic: false,
          underline: false,
        },
      },
      CourseName: {
        text: "",
        formatting: {
          bold: false,
          italic: false,
          underline: false,
        },
      },
      degree: {
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
      {name === true ? (
        <>
          <div className="shadow-2xl mt-[20px] mx-auto w-[95%] h-full bg-[white] rounded-[10px]">
            <div className="flex flex-col h-full justify-around w-[90%] h-full bg-[white] mx-auto ">
              <div className="w-full">
                <h1 className="text-[40px]">Education </h1>
                <p className="text-[40px]">Add your educational data </p>
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
                        <span>{elem.institutename.text}</span>
                      </div>
                      <div className="w-[20%] flex justify-between">
                        <span>Delete</span>
                        <span onClick={() => Edit(elem, index)}>Edit</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-end w-full">
                <button
                  className="w-[100px] border-[1px] border-[black] h-[30px] rounded-[5px]"
                  onClick={next}
                >
                  Skip
                </button>
                <button
                  className="w-[100px] border-[1px] border-[black] h-[30px] ml-[40px] rounded-[5px]"
                  onClick={Addnew}
                >
                  + Add new
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col shadow-2xl mt-[20px] mx-auto w-[95%] h-[900px] bg-[white] rounded-[10px]">
            <div className="flex flex-row mt-[10px] mx-[10%]" onClick={prev}>
              <i className="fa-solid fa-arrow-left-long text-[19px] mt-[6px]"></i>
              <h1 className="text-[19px] ml-[5px]">Back</h1>
            </div>

            <h1 className="text-[40px] mx-auto bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">
              Education
            </h1>
            <div className="flex flex-row w-[90%] h-[100px] mt-[30px] bg-[#1b1fab0f] mx-auto">
              <i className="fa-solid fa-user-graduate text-[70px] ml-[20px] mt-[10px] mr-[20px]"></i>
              <div className="flex flex-col">
                <h1 className="text-[25px] ml-[10px]">
                  Add your Educational Details
                </h1>
                <p className="ml-[10px]">
                  Adding educational details along with LinkedIn helps review
                  your profile perfectly
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-[30px] mx-auto">
              <div className="flex flex-col">
                <label className="text-[19px]">Institute name</label>
                <input
                  name="institutename"
                  className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]"
                  onChange={Input}
                  placeholder="eg. Harvard"
                  onFocus={currentfocus}
                  value={educationData.institutename.text}
                ></input>
              </div>
              <div className="flex flex-col ml-[100px]">
                <label className="text-[19px]">Degree</label>
                <input
                  name="degree"
                  className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]"
                  onChange={Input}
                  placeholder="eg. Bachelor of Science"
                  onFocus={currentfocus}
                  value={educationData.degree.text}
                ></input>
              </div>
            </div>
            <div className="flex flex-row mt-[20px] mx-auto">
              <div className="flex flex-col">
                <label className="text-[19px]">Course Name</label>
                <input
                  name="CourseName"
                  className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]"
                  onChange={Input}
                  placeholder="eg. Computer Science"
                  onFocus={currentfocus}
                  value={educationData?.CourseName.text}
                ></input>
              </div>
              <div className="flex flex-col ml-[100px]">
                <label className="text-[19px]">Year of Graduation</label>
                <input
                  name="yearofgradutation"
                  className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]"
                  onChange={Input}
                  placeholder="eg. 2024"
                  onFocus={currentfocus}
                  value={educationData.yearofgradutation.text}
                ></input>
              </div>
            </div>
            <div className="flex flex-row mt-[20px] mx-auto">
              <div className="flex flex-col">
                <label className="text-[19px]">Description</label>
                <textarea
                  name="description"
                  className="h-[100px] w-[300px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]"
                  onChange={Input}
                  placeholder="Describe your degree"
                  onFocus={currentfocus}
                  value={educationData.description.text}
                ></textarea>
              </div>
            </div>
            <div className="flex flex-row justify-end w-[90%] mx-auto">
              <button
                className="w-[100px] border-[1px] border-[black] h-[30px] ml-[40px] rounded-[5px]"
                onClick={Saveandsend}
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
