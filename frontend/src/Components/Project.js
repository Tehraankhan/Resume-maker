import React from "react";

export default function Project({ item, setitem, next, prev }) {

    const project = { id: new Date().getTime().toString(), name: "project", projectname: "", description: "", heigh: false }

    const Add1 = () => {

        return (setitem([...item, project]))

    }
    console.log(item)
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

                if (elem.id === e.target.id && e.target.name === "project name") {


                    return { ...elem, projectname: e.target.value, }

                }

                else if (elem.id === e.target.id && e.target.name === "description") {
                    return { ...elem, description: e.target.value }
                }


                return elem
            })
        )



    }
    const setcheck = () => {
        setitem(
            item.map((elem) => {

                if (elem.id === '2') {

                    if (elem.visible2 == true) {
                        return { ...elem, visible2: false }
                    }
                    else {
                        return { ...elem, visible2: true }
                    }
                }



                return elem
            })
        )

    }

    return (<>

        <h1 className="text-[40px] mx-[auto]">PROJECT</h1>
        <div className="flex flex-row ml-[50px]">
            <input type="checkbox" onClick={setcheck} checked={item[1].visible2}></input>
            <h3 className="ml-[5px]">set display</h3>
        </div>
        <div className="flex flex-col mx-[auto] ">
            {item.map((elem, id) => {
                if (elem.id != '1' && elem.name == "project") {
                    return (<>
                        <div className="mt-[7px] w-[600px] h-[60px] border-[1px] border-solid  bg-[white]  shadow-sm " style={{ height: elem.heigh ? '450px' : '' }}>
                            <div className="flex flex-row">

                                <h1 className="w-[800px] mt-[14px] ml-2">{elem.projectname}</h1>
                                <button className=" mt-[6px] mr-2" onClick={() => { expand(elem.id) }}><i class="fa-solid fa-chevron-down fa-xl"></i></button>
                            </div>
                            {elem.heigh &&
                                <div className="flex flex-col ">

                                    <input id={elem.id} name="project name" className="w-[520px] h-[50px] border-[1px] mx-[auto] mt-[40px] border-solid ml-[43px]  px-[8px]  border-[#000000]" placeholder="project name" onChange={Input} value={elem.projectname}></input>

                                    <textarea id={elem.id} name="description" className=" w-[520px] h-[250px] border-[1px] mx-[auto] mt-[20px] border-solid  ml-[43px] px-[8px] ] border-[#000000]" placeholder="description" onChange={Input} value={elem.description}></textarea>
                                </div>
                            }
                        </div >

                    </>)



                }





            })



            }











        </div >
        <button className=" flex-shrink-0 w-[600px] h-[60px] border-solid border-[1px] border-[blue] mx-[auto] shadow-md mt-[10px] rounded-[5px] pl-2 bg-[white] text-left text-[blue] resize-none" onClick={Add1}>Add <i class="fa-solid fa-plus fa-md"></i></button>
        <div className="flow-root w-[482px]  mx-[auto] text-white
        ">

            <button className="float-left w-[100px] h-[40px] bg-[#000000] mt-[40px] " onClick={prev}>Prev</button>
            <button className="float-right w-[100px] h-[40px] bg-[#000000] mt-[40px] " onClick={next}>Next</button>

        </div>





    </>)


}