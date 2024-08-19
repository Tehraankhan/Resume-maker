import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonalData , updatedata} from "../Store/userDataSlice"; // Make sure the correct action is imported

export default function Personal({ next, currentfocus }) {
 
  const dispatch = useDispatch();
  
  const currentUserData = useSelector((state) => state.userDataSlicekey.currentUerData);

  const [localPersonalData, setLocalPersonalData] = useState({

    name: {
      text: currentUserData?.personal?.name?.text || '',
      formatting: {
        bold: currentUserData.personal.name.formatting.bold || false,
        italic:currentUserData.personal.name.formatting.italic ,
        underline:currentUserData.personal.name.formatting.underline
      }
    },
    linkedin:{
      text: currentUserData?.personal?.linkedin?.text || '',
      formatting: {
        bold: currentUserData.personal.linkedin.formatting.bold || false,
        italic:currentUserData.personal.linkedin.formatting.italic ,
        underline:currentUserData.personal.linkedin.formatting.underline
      }
    },
    contact:{
      text: currentUserData?.personal?.contact?.text || '',
      formatting: {
        bold: currentUserData.personal.contact.formatting.bold || false,
        italic:currentUserData.personal.contact.formatting.italic ,
        underline:currentUserData.personal.contact.formatting.underline
      }
    },
    email:{
      text: currentUserData?.personal.email?.text || '',
      formatting: {
        bold: currentUserData.personal.email.formatting.bold || false,
        italic:currentUserData.personal.email.formatting.italic ,
        underline:currentUserData.personal.email.formatting.underline
      }
    }
  });




  // useEffect(() => {
  //   console.log(localPersonalData);
  // }, [localPersonalData]);


  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setLocalPersonalData((prevState) => {
      // Determine if the field has `text` and `formatting` properties
  const fieldsWithFormatting = ["name", "linkedin", "contact", "email"];
  
  const updatedPersonalData = fieldsWithFormatting.includes(name)
    ? { ...prevState, [name]: { ...prevState[name], text: value } }
    : { ...prevState, [name]: value };

  // Dispatch the updated data immediately
  dispatch(updatePersonalData(updatedPersonalData));

  // Return the updated state
  return updatedPersonalData;
    });
  

  

   
  };




  const Saveandsend = () =>{
        // dispatch(updatePersonalData(localPersonalData))
        dispatch(updatedata())
        next()
  }



  

  return (
    <>
      <div className="flex flex-col my-[40px] mx-[auto] w-[623px] h-[800px] overflow-y-auto flex-shrink-0 no-scrollbar">
        <h1 className="text-[40px] mx-[auto] bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">
          Personal Details
        </h1>
        <div className="flex flex-row w-full h-[100px] mt-[30px] bg-[#1b1fab0f]">
          <i className="fa-solid fa-address-card text-[70px] ml-[20px] mt-[10px] mr-[20px]"></i>
          <div className="flex flex-col">
            <h1 className="text-[25px] ml-[10px]">Add your Personal Details</h1>
            <p className="ml-[10px]">Adding personal details along with LinkedIn helps reviewers view your profile perfectly</p>
          </div>
        </div>
        <div className="flex flex-row mt-[40px]">
          <div className="flex flex-col">
            <label>Full Name</label>
            <input
              name="name"
              className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]"
              placeholder="eg harray"
              value={localPersonalData.name.text}
             
              onChange={handleInputChange}
              onFocus={currentfocus}
            />
          </div>
          <div className="flex flex-col ml-[100px]">
            <label>Email</label>
            <input
              name="email"
              className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]"
              type="email"
              placeholder="johndoe@example.com"
              value={localPersonalData.email.text}
              onChange={handleInputChange}
              onFocus={currentfocus}
            />
          </div>
        </div>
        <div className="flex flex-row mt-[40px]">
          <div className="flex flex-col">
            <label>Contact Number</label>
            <input
              name="contact"
              className="h-[40px] w-[260px] border-solid border-[1px] my-[30px] rounded-[2px] pl-2 border-[#1e1e70]"
              type="number"
              placeholder="98248349"
              value={localPersonalData.contact.text}
              onChange={handleInputChange}
              onFocus={currentfocus}
            />
          </div>
          <div className="flex flex-col ml-[100px]">
            <label>Linkedin</label>
            <input
              name="linkedin"
              className="h-[40px] w-[260px] border-solid border-[1px] my-[30px] rounded-[2px] pl-2 border-[#1e1e70]"
              type="text"
              placeholder="johndoe.linkedin.com"
              value={localPersonalData.linkedin.text}
              onChange={handleInputChange}
              onFocus={currentfocus}
            />
          </div>
        </div>
        <button
          className="mx-[auto] mt-[60px] w-[200px] h-[50px] bg-[#141441] text-[white] rounded-[5px] text-[20px]"
          onClick={Saveandsend}
        
        >
          Save & Next
        </button>
      </div>
    </>
  );
}
