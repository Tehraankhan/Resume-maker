import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    return (

        <>

            <div className='h-screen  mx-[auto] flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <h1 className='mt-[100px] ml-[auto] text-[86px] mr-[auto] '> CRAFT YOUR PERFECT CV</h1>
                <p className='mx-[auto] text-[20px]'>Crafting a winning resume has never been easier. Choose from a range of templates, add your details, and download your professional CV</p>

                <button onClick={() => { navigate("/home") }} className='w-[296px] h-[64px] bg-[#a5ff81] rounded-[5px] mx-auto mt-[26px] py-[2px] text-[40px] shadow-md shadow-slate-600'>Create</button>
            </div>

        </>
    )
}