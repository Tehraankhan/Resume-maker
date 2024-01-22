import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Personal({ item, setitem, next }) {






    const Input = (e) => {


        setitem(
            item.map((elem) => {

                if (elem.id === '1' && e.target.name === "Full Name") {


                    return { ...elem, name: e.target.value, }

                }

                else if (elem.id === '1' && e.target.name === "email") {
                    return { ...elem, email: e.target.value }
                }
                else if (elem.id === '1' && e.target.name === "contact") {
                    return { ...elem, contact: e.target.value }
                }


                return elem
            })
        )
    }

    return (<>

        <div className="flex flex-col my-[auto] mx-[auto] w-[600px] h-[400px] border-[1px] border-solid shadow-md border-t-[#000000] border-t-[4px] rounded-t-[5px] bg-[white] font-sans">
            <h1 className="text-[40px] mx-[auto]">Personal Details</h1>
            {
                item.map((elem) => {

                    if (elem.id == '1') {
                        return (<>


                            <input name="Full Name" className="h-[52px] w-[482px] border-solid border-[1px] mx-[auto]  mt-[10px] rounded-[5px] pl-2" onChange={Input} placeholder="Enter your Name" value={elem.name}></input>
                            <input name="email" className="h-[52px] w-[482px] border-solid border-[1px] mx-[auto]  mt-[10px] rounded-[5px] pl-2" onChange={Input} placeholder="Enter your Email" type="email" value={elem.email}></input>
                            <input name="contact" className="h-[52px] w-[482px] border-solid border-[1px] mx-[auto]  mt-[10px] rounded-[5px] pl-2 " onChange={Input} placeholder="Enter your Contact Number" type="number" value={elem.contact}></input>

                        </>)

                    }




                })
            }




            <button><Link className="hover:text-[#efff8a]" to={'/template'} >template</Link></button>
            <button className="ml-[440px] w-[100px] h-[40px] bg-[#000000] mt-[40px] rounded-[5px] hover:bg-[#7d7d7d] text-[white]" onClick={next}>Next</button>

        </div>




    </>

    )
}