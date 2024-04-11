import React from "react";

import { Link } from 'react-router-dom'

function Navbar() {


    return (<>
        <div className=" flex flex-row  py-[10px] h-[70px]  text-[20px]  text-black bg-white sticky top-0 border-bottom border-[1px] ">


            <ul className=" w-[500px] flex flex-row justify-evenly ml-[60px]    pt-[7px]">
               <Link to={{pathname:'Home'}} ><li className="" >HOME</li></Link>
                <li className="">ABOUT</li>
                <li className="">CONTACT</li>
            </ul>

            <ul className=" flex flex-row   w-screen flex justify-end mr-[30px]">


                <Link to={{ pathname: '/Signin' }} >  <li className=""><button class="p-[2px] rounded-[5px] from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
                    <span class="block  px-5 py-2  bg-white hover:bg-[grey] ">Sign In</span>
                </button></li></Link>
                <Link to={{ pathname: '/Signup' }} > <li className=""><button className="ml-[20px] bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent text-white w-[100px] h-[50px] rounded-[5px]">Register</button></li></Link>
            </ul>

        </div>







    </>)
}

export default Navbar