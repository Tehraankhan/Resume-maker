import React from "react";
import Navbar from "./Navbar";
import axios from "axios"
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, updateCurrentUserDataId, updatePersonalData } from "../Store/userDataSlice";
import { entry } from "../Store/userDataSlice";
import { Navigate ,useNavigate } from "react-router-dom";
export default function History() {

  const [data, setData] = useState(null);
 const datalist = useSelector((state) => state.userDataSlicekey.datalist)
 const currentUerData = useSelector((state) => state.userDataSlicekey)
 console.log(datalist)
  const dispatch = useDispatch();
 const navigate = useNavigate()

  const set =() =>{
    dispatch(entry())
    //dispatch(fetchdata())
    
   
   // navigate('/home')
  }

  const set1 = (id)=>{
  
  
  dispatch(fetchdata())
localStorage.setItem('ID',id)
 const obj =  datalist.find(obj => obj._id == id)
 localStorage.setItem("personaldata",JSON.stringify(obj.personal))

 dispatch(updatePersonalData(obj.personal))
 dispatch(updateCurrentUserDataId(id))
 console.log(currentUerData)
 
 //localStorage.setItem("item",JSON.stringify(obj))
 
 
 navigate('/home')

 

  }

  useEffect(() => {

    dispatch(fetchdata())
 
  }, [dispatch]);

  return (<>
    <Navbar />
    <div className=" flex flex-col w-screen h-screen">

      <h1 className="text-blue ml-[91px] text-[40px]">History</h1>

      <div className=" flex mx-auto w-[1200px] h-[500px]  mt-[10px] rounded-[5px]  ">

        <div className="mx-auto mt-[20px] w-[1000px] h-[200px]  ">
          <div className="grid grid-cols-4 gap-2">

            {
              
              datalist.map((elem, index) => (

                
              <div key={index} className="w-[200px] h-[300px]  rounded-[5px] border-black border-[2px] text-[15px] bg-[lightgreen]" style={{boxShadow: '9.5px 4.5px 0 -1px rgba(0, 0, 0, 1)'}} onClick={() => set1(elem._id)}>
                <div className="flex flex-col w-[200px] h-[100px] mt-[30px] ml-[10px] ">
                  <h1 className="text-[20px]">{elem.personal.name}</h1>

                   <h1>id {elem._id.length > 15 ? `${elem._id.slice(0, 15)}....` : elem._id}</h1>
                </div>

               
              </div>
              ))
            }
           <button className="w-[200px] h-[300px]  rounded-[5px] border-[2px] border-black  text-[30px]" onClick={set} style={{boxShadow: '9.5px 4.5px 0 -1px rgba(0, 0, 0, 1)'}}>create</button>



           




          </div>




        </div>

      </div>
    </div>




  </>)
}