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
      
      <div className="flex flex-col my-[40PX] mx-[auto] w-[623px] h-[1200px] overflow-y-auto flex-shrink-0 no-scrollbar">
        <div className="flex flex-row " onClick={prev}>
          <i className="fa-solid fa-arrow-left-long text-[21px] mt-[6px]"></i>
          <h1 className="text-[20px] ml-[5px]">Back</h1>
        </div>
       
        <h1 className="text-[40px] mx-[auto] bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text">Project</h1>
        <div className="flex flex-row w-[full]  h-[100px] mt-[30px] bg-[#1b1fab0f]">

        <i className="fa-solid fa-user-graduate text-[70px] ml-[20px] mt-[10px] mr-[20px]"></i>
        <div className="flex flex-col">
           <h1 className="text-[25px] ml-[10px]">Add your Personal Details</h1>
           <p className="ml-[10px]">Adding personal details along with linkedin help review to view your profile perfectly</p>
        </div>
          
        </div>
        <div className="flex flex-row mt-[30px]">
          <div className="flex flex-col">
            <label className="text-[19px]">Project name</label>
            <input name="name" className="h-[40px] w-[260px] border-solid border-[1px] my-[20px] rounded-[2px] pl-2 border-[#1e1e70]" onChange={Input} placeholder="eg harray"></input>
          </div>
        </div>
       
        <div className="flex flex-row mt-[20px]">
          <div className="flex flex-col">
            <label className="text-[19px]">Description</label>
            <textarea name="contact" className="h-[200px] w-[623px] border-solid border-[1px] my-[30px] rounded-[2px] pl-2 border-[#1e1e70]" onChange={Input} type="number"  ></textarea>
          </div>
          
        </div>
        {/* <button className="mx-[auto] mt-[60px] w-[200px] h-[50px] bg-[#141441] text-[white] rounded-[5px] text-[20px]" onClick={next}>Next</button> */}
      </div>
      





    </>)


}