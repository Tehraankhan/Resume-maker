import React from "react";
import { Link } from "react-router-dom";
import blue from "../Image/blue2.jpg"
import axios from "axios";
import { useState } from "react";
export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Input = (e) => {

      if (e.target.name == "email") {
          setEmail(e.target.value)
        }
        else if (e.target.name == "password") {
          setPassword(e.target.value)
    
        }
        
      }

      

    const fetchData = async () => {


        try {
          const response = await axios.post(
            "http://localhost:5000/user/signin",
            {  email: email , password: password},
            {
              headers: {
                'Content-Type': 'application/json' // Corrected MIME type
              }
            }
          );
          console.log(response)
          const token = response.data.token;
          localStorage.setItem('token',token);
          window.location.href = '/History';


        } catch (error) {
          console.error("Error:", error.response.data.message); // Handle error, e.g., display error message
        }
      };
    

    return (<>
        <div className=" flex flex-row bg-gradient-to-r from-slate-300 to-slate-500 min-h-screen">

              <div className="flex flex-row mx-[auto]">

              

            <div className="absolute w-[900px] h-screen text-[black] flex mr-[20px] ">

                <div  className="  bg-white flex flex-col w-[500px] h-[500px] mx-auto my-auto border-[2px] shadow-xl ">
                    <h3 className="text-[30px] mx-auto mt-[10px] ">Login</h3>
                    <div className="flex flex-col mx-auto">

                        <label className="mt-[20px]" >Email</label>
                        <input className="mt-[20px] h-[50px] rounded-[5px] px-[10px] w-[400px] border-[2px] shadow-sm" type="email" placeholder="Enter your Email" name="email" onChange={Input} ></input>
                    </div>

                    <div className="flex flex-col mx-auto">
                        <label className="mt-[20px] " >Password</label>
                        <input className="mt-[20px]  h-[50px] rounded-[5px] px-[10px] w-[400px] border-[2px] shadow-sm" type="password" placeholder="Enter your password" name="password" onChange={Input}></input>
                    </div>




                    <button className=" w-[200px] h-[50px] mt-[60px] rounded-[5px] text-white mx-auto bg-[blue]"  value="sign in" onClick={fetchData}>Sign In</button>
                    

                </div>



            </div>
            <div className=" ml-[650px] w-[900px] h-screen mt-[30px]" >

                <div className="flex flex-col w-[600px] h-[626px]  ">


                    <img className='w-[700px] h-[626px] ' src={blue}></img>
                    <div className="absolute flex flex-col w-[600px] h-[626px]">

                        <div className="mx-auto my-auto ">

                            <p className="text-white text-[20px]">Don't have account ?
                       

                    </p> 
                 
                    <Link to={{ pathname: '/Signup' }} > <button className="w-[200px] h-[50px] mt-[30px] rounded-[5px] text-white mx-auto bg-[#001160]">Sign up</button></Link>
                        </div>
                    

                      
                    </div>
                    




                </div>
                </div>




            </div>

        </div>


    </>)
}