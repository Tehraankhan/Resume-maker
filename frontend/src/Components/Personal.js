import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonalData } from "../Store/userDataSlice";

export default function Personal() {
  const dispatch = useDispatch();
  const personaldata = useSelector((state) => state.userDataSlicekey.currentUerData.personal);
  const [localPersonalData, setLocalPersonalData] = useState({
    name: personaldata.name || "",
    email: personaldata.email || "",
    contact: personaldata.contact || "",
    linkedin: personaldata.linkedin || "",
  });

  const Input = (e) => {
    const { name, value } = e.target;
    setLocalPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    dispatch(updatePersonalData({ ...localPersonalData, [name]: value }));
  };

  useEffect(() => {
    setLocalPersonalData({
      name: personaldata.name || "",
      email: personaldata.email || "",
      contact: personaldata.contact || "",
      linkedin: personaldata.linkedin || "",
    });
  }, [personaldata]);

  const next = () =>{

    //dispatch(updatedata(personaldata))
  
  }

  return (
    <>
      <div className="flex flex-col my-[40PX] mx-[auto] w-[623px] h-[500px] overflow-y-auto flex-shrink-0 no-scrollbar">
        <h1 className="text-[40px] mx-[auto] bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text">Personal Details</h1>
        <div className="flex flex-row mt-[40px]">
          <div className="flex flex-col">
            <label>Full Name</label>
            <input name="name" className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[blue]" onChange={Input} value={localPersonalData.name}></input>
          </div>
          <div className="flex flex-col ml-[100px]">
            <label>Email</label>
            <input name="email" className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[blue]" onChange={Input} type="email" value={localPersonalData.email}></input>
          </div>
        </div>
        <div className="flex flex-row mt-[40px]">
          <div className="flex flex-col">
            <label>Contact Number</label>
            <input name="contact" className="h-[40px] w-[260px] border-solid border-[1px] my-[30px] rounded-[2px] pl-2 border-[blue]" onChange={Input} type="number" value={localPersonalData.contact}></input>
          </div>
          <div className="flex flex-col ml-[100px]">
            <label>Linkedin</label>
            <input name="linkedin" className="h-[40px] w-[260px] border-solid border-[1px] my-[30px] rounded-[2px] pl-2 border-[blue]" onChange={Input} type="text" value={localPersonalData.linkedin}></input>
          </div>
        </div>
        <button className="mx-[auto] mt-[30px] w-[200px] h-[40px] bg-[blue] text-[white] rounded-[2px]" onClick={next}>Next</button>
      </div>
    </>
  );
}
