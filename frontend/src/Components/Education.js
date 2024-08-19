import React, { useEffect, useState } from "react";

export default function Education({
  item,
  setitem,
  visible,
  setvisibility,
  next,
  prev,
}) {
  const education = {
    id: new Date().getTime().toString(),
    typeofeducation: "",
    name: "education",
    institutename: "",
    degree: "",
    yearofgraduation: "",
    description: "",
    heigh: false,
    display: false,
  };

  const Add = () => {
    setitem([...item, education]);
  };

  const expand = (id) => {
    console.log(item);

    setitem(
      item.map((elem) => {
        if (elem.id === id && elem.heigh === false) {
          return { ...elem, heigh: true };
        } else if (elem.id === id && elem.heigh === true) {
          return { ...elem, heigh: false };
        }
        return elem;
      })
    );
  };

  const Input = (e) => {
    setitem(
      item.map((elem) => {
        if (elem.id === e.target.id && e.target.name === "type of eduaction") {
          return { ...elem, typeofeducation: e.target.value };
        } else if (
          elem.id === e.target.id &&
          e.target.name === "year of graduation"
        ) {
          return { ...elem, yearofgraduation: e.target.value };
        } else if (
          elem.id === e.target.id &&
          e.target.name === "institute name"
        ) {
          return { ...elem, institutename: e.target.value };
        } else if (elem.id === e.target.id && e.target.name === "degree") {
          return { ...elem, degree: e.target.value };
        } else if (elem.id === e.target.id && e.target.name === "description") {
          return { ...elem, description: e.target.value };
        }

        return elem;
      })
    );
  };

  const setcheck = () => {
    /*if (visible == false) {
            setvisibility(true)
        }
        else {
            setvisibility(false)
        }*/
    setitem(
      item.map((elem) => {
        if (elem.id === "2") {
          if (elem.visible1 == true) {
            return { ...elem, visible1: false };
          } else {
            return { ...elem, visible1: true };
          }
        }

        return elem;
      })
    );
  };

  return (
    <>
       <div className="flex flex-col my-[40PX] mx-[auto] w-[623px] h-[1200px] overflow-y-auto flex-shrink-0 no-scrollbar">
        <div className="flex flex-row " onClick={prev}>
          <i className="fa-solid fa-arrow-left-long text-[21px] mt-[6px]"></i>
          <h1 className="text-[20px] ml-[5px]">Back</h1>
        </div>
       
        <h1 className="text-[40px] mx-[auto] bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text">Education</h1>
        <div className="flex flex-row w-[full]  h-[100px] mt-[30px] bg-[#1b1fab0f]">

        <i className="fa-solid fa-user-graduate text-[70px] ml-[20px] mt-[10px] mr-[20px]"></i>
        <div className="flex flex-col">
           <h1 className="text-[25px] ml-[10px]">Add your Personal Details</h1>
           <p className="ml-[10px]">Adding personal details along with linkedin help review to view your profile perfectly</p>
        </div>
          
        </div>
        <div className="flex flex-row mt-[30px]">
          <div className="flex flex-col">
            <label className="text-[19px]">Institute name</label>
            <input name="name" className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]" onChange={Input} placeholder="eg harray"></input>
          </div>
          <div className="flex flex-col ml-[100px]">
            <label className="text-[19px]">Degree</label>
            <input name="email" className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]" onChange={Input} type="email"  placeholder="johndoe@example.comas"></input>
          </div>
        </div>
        <div className="flex flex-row mt-[20px]">
          <div className="flex flex-col">
            <label className="text-[19px]">Location</label>
            <input name="contact" className="h-[40px] w-[260px] border-solid border-[1px] my-[30px] rounded-[2px] pl-2 border-[#1e1e70]" onChange={Input} type="number"  placeholder="98248349"></input>
          </div>
          <div className="flex flex-col ml-[100px]">
            <label className="text-[19px]">year of graduation</label>
            <input name="linkedin" className="h-[40px] w-[260px] border-solid border-[1px] my-[30px] rounded-[2px] pl-2 border-[#1e1e70]" onChange={Input} type="text"  placeholder="johndoe.linkedin.com"></input>
          </div>
        </div>
        <div className="flex flex-row mt-[20px]">
          <div className="flex flex-col">
            <label className="text-[19px]">Add more</label>
            <textarea name="contact" className="h-[200px] w-[623px] border-solid border-[1px] my-[30px] rounded-[2px] pl-2 border-[#1e1e70]" onChange={Input} type="number"  ></textarea>
          </div>
          
        </div>
        <button className="mx-[auto] mt-[60px] w-[200px] h-[50px] bg-[#141441] text-[white] rounded-[5px] text-[20px]" onClick={next}>Next</button>
      </div>
    </>
  );
}
