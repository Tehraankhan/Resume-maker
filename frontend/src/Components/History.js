import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchdata,
  updateCurrentUserDataId,
  updatePersonalData,
  fetchselecteddata,
  deleteselecteddata
} from "../Store/userDataSlice";
import { entry } from "../Store/userDataSlice";
import { Navigate, useNavigate } from "react-router-dom";
export default function History() {
  const datalist = useSelector((state) => state.userDataSlicekey.datalist);

  console.log(datalist);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const set1 = (id) => {
    dispatch(entry());
    navigate("/home");
  };
  const set2 = async (id) => {
    console.log(id);
    await dispatch(fetchselecteddata(id));
    navigate("/home");
  };

  const Delete = async(id) =>{

 await dispatch(deleteselecteddata(id));
 dispatch(fetchdata())

  }

  useEffect(() => {

    dispatch(fetchdata());

  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className=" flex flex-col bg-gradient-to-r from-slate-300 to-slate-500 w-screen h-screen">
        <div className="w-[90%] mx-auto h-[60px] mt-[10px]">
          <h1 className="float-left text-[30px]">History</h1> 
          <button className="float-right w-[200px] h-[50px] text-black rounded-[5px] border-[2px] border-black  text-[30px]" onClick={set1} style={{boxShadow: '9.5px 4.5px 0 -1px rgba(0, 0, 0, 1)'}}>Add New </button>


        </div>
       

        <div className=" mx-auto w-[90%]  shadow-xl  h-[500px]  mt-[10px] rounded-[5px]  animate-fade-up ">

          <div class="relative  overflow-y-auto shadow-md sm:rounded-lg h-[500px]">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-[14px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 shadow-2xl sticky top-0 z-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    created
                  </th>
                  <th scope="col" class="px-6 py-3">
                    updated
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Template
                  </th>
                  <th scope="col" class="px-6 py-3">
                    download
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Delete
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {datalist.map((elem, index) => (
                  <tr className="border-[grey] border-b bg-transparent text-black text-[18px]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
                    >
                      {elem.personal.name.text}
                    </th>
                    <td class="px-6 py-4">{elem.createdAt.slice(0, 10)}</td>
                    <td class="px-6 py-4">{elem.updatedAt.slice(0, 10)}</td>
                    <td class="px-6 py-4">{elem.selectedtemplate}</td>
                    <td class="px-6 py-4 ">
                    <i className="fa-solid fa-download  "></i>
                   {/* <button className="w-[100px] h-[20px] bg-[blue] rounded-[5px]">download</button>*/}
                    </td> 
                    <td class="px-6 py-4 cursor-pointer  underline" onClick={()=>Delete(elem._id)}>delete</td>
                    <td class="px-6 py-4 cursor-pointer underline" onClick={()=>set2(elem._id)}>Edit</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

         
            
        </div>
      </div>
    </>
  );
}
