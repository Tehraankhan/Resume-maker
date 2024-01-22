import React from "react";
import { Link } from 'react-router-dom'


function Navbar() {


    return (<>
        <div className="flex flex-row  pt-[15px] h-[70px]  text-2xl bg-[black] text-[white]  sticky top-0 ">

            <ul className="w-[500px] flex flex-row justify-evenly mx-[auto]  font-['Open_Sans']">
                <Link className="hover:text-[#efff8a]" to={'/'} >HOME</Link>
                <li className="hover:text-[#efff8a]">ABOUT</li>
                <li className="hover:text-[#efff8a]">CONTACT</li>
            </ul>
        </div>







    </>)
}

export default Navbar