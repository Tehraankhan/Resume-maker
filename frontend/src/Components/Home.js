import React, { useEffect } from "react";
import Navbar  from "./Navbar";
import { useNavigate } from "react-router-dom";
import dataContext from "../context/datacontext";
import { useContext } from "react";
import ResumeImage from "../Components/Image/Resume.jpg"

import {useDispatch , useSelector} from "react-redux"
import { fetchdata } from "../Store/userDataSlice";
import { updatePersonalData } from "../Store/userDataSlice"





export default function Home() {


    const dispatch = useDispatch();
    


    
    const data = useSelector((state) => state.userDataSlicekey)
    console.log(data)

    const navigate = useNavigate()


    useEffect(()=>{
    
       
       
    },[])
    return (

        <>
        <Navbar/>

            <div className='w-screen h-screen  mx-[auto] flex flex-row '>
                <div className="flex flex-col w-[900px] ml-[80px]">
                <h1 className='mt-[100px] text-[60px] '> CRAFT YOUR PERFECT CV</h1>
                <p className='mt-[10px] text-[20px] w-[740px]'>Crafting a winning resume has never been easier. Choose from a range of templates, add your details, and download your professional CV</p>

                <button onClick={() => { navigate("/home") }} className='w-[200px] h-[60px] bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent text-white rounded-[5px] mt-[30px] py-[2px] text-[24px] shadow-slate-600'>Create</button>


                </div>

                <div className="w-[500px]" >
                    <img src={ResumeImage}></img>


                </div>
               
            </div>

        </>
    )
}