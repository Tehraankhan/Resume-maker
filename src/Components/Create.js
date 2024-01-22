import React, { useEffect } from "react";
import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Project from "./Project"

function Create() {
    const personal = { id: '1', name: "", email: "", contact: "" }
    const display = { id: '2', visible1: false, visible2: false }

    const getlocalstorge = () => {
        let li = localStorage.getItem('item')
        if (li) {
            return JSON.parse(localStorage.getItem('item'))
        }
        else {
            return ([personal, display])
        }
    }


    const [visible, setvisibility] = useState(true)
    const [visible2, setvisibility2] = useState(true)
    const [step, setstep] = useState(1)











    const [item, setitem] = useState(getlocalstorge)

    console.log(item)




    const next = () => {
        setstep(step + 1)
    }

    const prev = () => {
        setstep(step - 1)
    }


    useEffect(() => {

        localStorage.setItem('item', JSON.stringify(item))




    }, [item])


    return (
        <>
            <div className="flex flex-row flex-shrink-0 ">

                <div className=" flex flex-col h-[720px] w-[700px]  overflow-y-auto flex-shrink-0 no-scrollbar">
                    {
                        {
                            1: <Personal item={item} setitem={setitem} next={next} />,
                            2: <Education item={item} setitem={setitem} next={next} prev={prev} />,
                            3: <Project item={item} visible2={visible2} setvisibility2={setvisibility2} setitem={setitem} next={next} prev={prev} />
                        }[step]
                    }




                </div>
                <div className="h-[900px] w-[721px]  ">
                    <div className="mt-[24px] ml-[3px] h-[840px] w-[700px] border-solid border-[2px] flex flex-col bg-[white] shadow-md">

                        <div className="flex flex-col mx-[auto]">
                            {
                                item?.map((elem) => {
                                    if (elem.id == '1') {

                                        return (<>
                                            <h1 className="text-[40px] text-[darkblue] mx-[auto]">{elem.name}</h1>
                                            <h1 className="text-[20px] mx-[auto]">{elem.email}</h1>
                                            <h1 className="text-[20px] mx-[auto]">{elem.contact}</h1>

                                        </>)
                                    }



                                })

                            }
                        </div>
                        <div className="flex flex-col ">

                            <h1 className="text-[25px] text-[darkblue] ml-[20px]" style={{ display: item[1].visible1 ? '' : 'none' }}>Education</h1>
                            <hr className="ml-[20px] h-[2px]  bg-[black] border-0 mr-[12px]" style={{ display: item[1].visible1 ? '' : 'none' }}></hr>


                            {
                                item.map((elem) => {
                                    if (elem.name == "education")
                                        return (<>
                                            <div style={{ display: item[1].visible1 ? '' : 'none' }}>

                                                <h1 className="text-[20px] ml-[20px] mt-[2px] font-bold">{elem.institutename}</h1>
                                                <div className="flex flex-row">
                                                    <h1 className="ml-[20px] mt-[2px] ">{elem.degree}</h1>
                                                    <span className="ml-[20px] mt-[2px] ">{elem.yearofgraduation}</span>
                                                </div>

                                                <span className="ml-[20px] mt-[2px] ">{elem.description}</span>


                                            </div>




                                        </>)



                                })
                            }


                            <h1 className="text-[25px] text-[darkblue] ml-[20px] mt-[10px]" style={{ display: item[1].visible2 ? '' : "none" }}>Project</h1>
                            <hr className="ml-[20px] h-[2px]  bg-[black] border-0 mr-[12px]" style={{ display: item[1].visible2 ? '' : "none" }}></hr>




                            {
                                item?.map((elem) => {
                                    if (elem.name == "project")

                                        return (<>
                                            <div className="" style={{ display: item[1].visible2 ? '' : 'none' }}>
                                                <h1 className="text-[20px] ml-[20px] mt-[10px] font-bold">{elem.projectname}</h1>
                                                <h1 className="text-[15px] ml-[20px] mt-[2px]">{elem.description}</h1>

                                            </div>



                                        </>)



                                })
                            }
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default Create;