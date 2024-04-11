import React from "react";

export default function Template2({item,type})
{
console.log(item)
return(
    <>
    
    {  type == "1" ? (

                                
<div className="  mx-[auto] h-[400px] w-[200px]   flex flex-row bg-[white] shadow-xl">

<div className="flex flex-col mx-[auto] bg-[black] text-[white] w-[140px]">
    {
        item?.map((elem) => {
            if (elem.id == '1') {

                return (<>
                    <h1 className="text-[5px] mx-[auto] ">{elem.name}</h1>
                    <h1 className="text-[5px] mx-[auto]">{elem.email}</h1>
                    <a className="text-[5px] mx-[auto] text-blue-500" href={elem.linkedin}> {elem.linkedin}</a>
                    <h1 className="text-[5px] mx-[auto]">{elem.contact}</h1>

                </>)
            }



        })

    }
</div>
<div className="flex flex-col ">

    <h1 className="text-[8px] text-[darkblue] ml-[5px]" style={{ display: item[1].visible1 ? '' : 'none' }}>Education</h1>
    <hr className="ml-[5px] h-[1px]  bg-[black] border-0 mr-[10px] mt-[4px]" style={{ display: item[1].visible1 ? '' : 'none' }}></hr>


    {
        item.map((elem) => {
            if (elem.name == "education")
                return (<>
                    <div style={{ display: item[1].visible1 ? '' : 'none' }}>

                        <h1 className="text-[6px] ml-[5px] mt-[2px] font-bold">{elem.institutename}</h1>
                        <div className="flex flex-row">
                            <span className="ml-[5px] mt-[2px] text-[4px]">{elem.degree}</span>
                            <span className="ml-[2px] mt-[2px] text-[4px]">{elem.yearofgraduation}</span>
                            <span className="ml-[2px] mt-[2px] text-[4px] ">{elem.description}</span>
                        </div>

                        


                    </div>




                </>)



        })
    }


    <h1 className="text-[8px] text-[darkblue] ml-[5px] mt-[10px]" style={{ display: item[1].visible2 ? '' : "none" }}>Project</h1>
    <hr className="ml-[5px] h-[1px]  bg-[black] border-0 mr-[10px] mt-[4px]" style={{ display: item[1].visible2 ? '' : "none" }}></hr>




    {
        item?.map((elem) => {
            if (elem.name == "project")

                return (<>
                    <div className="" style={{ display: item[1].visible2 ? '' : 'none' }}>
                        <h1 className="text-[6px] ml-[5px] mt-[4px] font-bold">{elem.projectname}</h1>
                        <h1 className="text-[4px] ml-[5px] mt-[2px]">{elem.description}</h1>

                    </div>



                </>)



        })
    }
</div>



</div>




):(


<div className=" mt-[10px] mx-[auto] h-[943px] w-[700px]   flex flex-row bg-[white] shadow-xl">

<div className="flex flex-col bg-[black]  w-[200px] text-[white]">
   
        
                    <h1 className="text-[20px] mt-[10px]  mx-[auto]">{item.personal.name}</h1>
                    <h1 className="text-[15px] mx-[auto]">{item.personal.email}</h1>
                    <a className="text-[15px] mx-[auto] text-blue-500" href={item.personal.linkedin}> {item.personal.linkedin}</a>
                    <h1 className="text-[15px] mx-[auto]">{item.personal.contact}</h1>

              
            
</div>
<div className="flex flex-col  w-[500px]">

    <h1 className="text-[20px] text-[darkblue] ml-[20px]" style={{ display: item.visible1 ? '' : 'none' }}>Education</h1>
    <hr className="ml-[20px] h-[2px]  bg-[black] border-0 mr-[14px]" style={{ display: item.visible1 ? '' : 'none' }}></hr>


    {/*
        item.map((elem) => {
            if (elem.name == "education")
                return (<>
                    <div style={{ display: item[1].visible1 ? '' : 'none' }}>

                        <h1 className="text-[5px] ml-[20px] mt-[2px] font-bold">{elem.institutename}</h1>
                        <div className="flex flex-row">
                            <span className="ml-[20px] mt-[2px] text-[6px]">{elem.degree}</span>
                            <span className="ml-[20px] mt-[2px] text-[6px]">{elem.yearofgraduation}</span>
                        </div>

                        <span className="ml-[20px] mt-[2px] text-[6px] ">{elem.description}</span>


                    </div>




                </>)



        })
    */}


    <h1 className="text-[20
        px] text-[darkblue] ml-[20px] mt-[10px]" style={{ display: item.visible2 ? '' : "none" }}>Project</h1>
    <hr className="ml-[20px] h-[2px]  bg-[black] border-0 mr-[12px]" style={{ display: item.visible2 ? '' : "none" }}></hr>




    {/*
        item?.map((elem) => {
            if (elem.name == "project")

                return (<>
                    <div className="" style={{ display: item[1].visible2 ? '' : 'none' }}>
                        <h1 className="text-[6px] ml-[20px] mt-[10px] font-bold">{elem.projectname}</h1>
                        <h1 className="text-[6px] ml-[20px] mt-[2px]">{elem.description}</h1>

                    </div>



                </>)



        })
    */}
</div>



</div>
)
    




}
 </>
)
    
}