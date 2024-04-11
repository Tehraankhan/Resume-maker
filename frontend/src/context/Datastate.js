import React from "react";

import dataContext from "./datacontext";
import { updatePersonalData ,updateCurrentUserDataId ,updatedata, fetchdata } from "../Store/userDataSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
const Datastate = (props)=>{


    
   

    console.log("djfjkkk")

    const getlocalstorge = () => {
        let li = localStorage.getItem('item')
        console.log(li)
        if (li) {
            console.log("yes")
            return JSON.parse(localStorage.getItem('item'))
        }
        else {
            console.log("djhjh")
            return ([])
        }
    }

    const [item, setitem] = useState(getlocalstorge)
    console.log(item)


    useEffect(() => {

        
        
        localStorage.setItem('item', JSON.stringify(item))


    }, [])

    return(

        <dataContext.Provider value={{item,setitem}}>


            {props.children}
        </dataContext.Provider>
    )
}

export default Datastate