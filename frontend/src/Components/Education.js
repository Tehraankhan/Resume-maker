import React, { useEffect, useState } from "react";


export default function Education({ item, setitem, visible, setvisibility, next, prev }) {




    const education = { id: new Date().getTime().toString(), typeofeducation: "", name: "education", institutename: "", degree: "", yearofgraduation: "", description: "", heigh: false, display: false }








    const Add = () => {



        setitem([...item, education])

    }

    const expand = (id) => {
        console.log(item)

        setitem(
            item.map((elem) => {

                if (elem.id === id && elem.heigh === false) {

                    return { ...elem, heigh: true }
                }
                else if (elem.id === id && elem.heigh === true) {
                    return { ...elem, heigh: false }
                }
                return elem
            })
        )


    }

    const Input = (e) => {


        setitem(
            item.map((elem) => {

                if (elem.id === e.target.id && e.target.name === "type of eduaction") {


                    return { ...elem, typeofeducation: e.target.value, }

                }
                else if (elem.id === e.target.id && e.target.name === "year of graduation") {


                    return { ...elem, yearofgraduation: e.target.value }
                }
                else if (elem.id === e.target.id && e.target.name === "institute name") {
                    return { ...elem, institutename: e.target.value }
                }
                else if (elem.id === e.target.id && e.target.name === "degree") {
                    return { ...elem, degree: e.target.value }
                }
                else if (elem.id === e.target.id && e.target.name === "description") {
                    return { ...elem, description: e.target.value }
                }


                return elem
            })
        )



    }

    const setcheck = () => {

        /*if (visible == false) {
            setvisibility(true)
        }
        else {
            setvisibility(false)
        }*/
        setitem(
            item.map((elem) => {

                if (elem.id === '2') {

                    if (elem.visible1 == true) {
                        return { ...elem, visible1: false }
                    }
                    else {
                        return { ...elem, visible1: true }
                    }





                }



                return elem
            })
        )

    }









    return (

        <>

            <h1 className="text-[40px] mx-[auto]">EDUCATION</h1>
            <div className="flex flex-row ml-[50px]">
                <input type="checkbox" onClick={setcheck} checked={item[1].visible1}></input>
                <h3 className="ml-[5px]">set display</h3>
            </div>


            <div className="flex flex-col mx-[auto] flex-shrink-0 ">
                {item.map((elem, id) => {
                    if (elem.id != '1' && elem.name == "education") {
                        return (<>




                            <div className="mt-[7px] w-[700px] h-[60px] border-[1px] border-solid  bg-[white]   shadow-sm" style={{ height: elem.heigh ? '600px' : '' }}>
                                <div className="flex flex-row">

                                    <h1 className="w-[800px] mt-[14px] ml-2">{elem.typeofeducation}</h1>
                                    <button className=" mt-[6px] mr-2" onClick={() => { expand(elem.id) }}><i class="fa-solid fa-chevron-down fa-xl"></i></button>
                                </div>





                                {elem.heigh &&


                                    <div className="flex flex-col mt-[-20px] ">

                                        <div className="flex flex-col mx-auto">

                                            <div className="flex flex-row">
                                                <label>name</label>
                                                <input id={elem.id} name="type of eduaction" className=" w-[300px] h-[50px] border-[1px] mx-[auto] mt-[40px] border-solid px-[8px]  border-[blue]" placeholder="Type of Education eg.collage" onChange={Input} value={elem.typeofeducation}></input>
                                                <label>name</label>
                                                <label>name</label>
                                                <input id={elem.id} name="institute name" className=" w-[300px] h-[50px] border-[1px]  mt-[40px] border-solid px-[8px]  border-[#000000]" placeholder="institute name " onChange={Input} value={elem.institutename}></input>


                                            </div>

                                            <div className="flex flex-row">
                                                <input id={elem.id} name="degree" className=" w-[300px] h-[50px] border-[1px] mx-[auto] mt-[20px] border-solid  px-[8px]  border-[#000000]" placeholder="degree" onChange={Input} value={elem.degree}></input>
                                                <input id={elem.id} name="year of graduation" className=" w-[300px] h-[50px] border-[1px] mx-[auto] mt-[20px] border-solid ml-[10px]  px-[8px]   border-[#000000]" placeholder="year of graduation" onChange={Input} value={elem.yearofgraduation}></input>


                                            </div>



                                            <textarea id={elem.id} name="description" className=" w-[520px] h-[250px] border-[1px] mx-[auto] mt-[20px] border-solid  ml-[43px] px-[8px]  border-[#000000]" placeholder="description" onChange={Input} value={elem.description}></textarea>
                                        </div>
                                    </div>
                                }
                            </div >

                        </>)



                    }





                })



                }











            </div >

            <button className="flex-shrink-0 w-[600px] h-[60px] border-solid border-[1px] border-[#000000] mx-[auto] shadow-sm mt-[10px] rounded-[5px] pl-2 bg-[white] text-left text-[blue] resize-none" onClick={Add}>Add <i class="fa-solid fa-plus fa-md"></i></button>

            <div className="flow-root w-[482px]  mx-[auto] text-white">

                <button className="float-left w-[100px] h-[40px] bg-[#000000] mt-[40px]" onClick={prev}>Prev</button>
                <button className="float-right w-[100px] h-[40px] bg-[#000000] mt-[40px]" onClick={next}>Next</button>

            </div>

        </>)

}