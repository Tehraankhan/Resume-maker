import React, { useState } from 'react'

export default function Templates() {
    const [movement, setmovement] = useState(0);
    const [backwardmove, setbackwardmovement] = useState(movement)


    const forward = () => {


        setmovement(movement + 360);

        const e = document.getElementById("ghd");
        e.scrollLeft = movement + 360;
        console.log(movement)

    }


    const backward = () => {
        const e = document.getElementById("ghd");
        setmovement(movement - 360)
        e.scrollLeft = movement - 360;
        console.log(movement)


    }

    return (
        <div className='flex flex-col w-[full]'>
            <div className='w-full  h-[10rem]'>

                <button className='ml-[4px]  h-[3rem] bg-[#c8c8ff] text-[black]  rounded-[30px]' onClick={backward}><i className="fa-solid fa-chevron-left w-[49px]" ></i></button>
                <button className='ml-[4px]  h-[3rem] bg-[#ababe1] text-[black] rounded-[30px]' onClick={forward}><i className="fa-solid fa-chevron-right w-[49px]" ></i></button>


                <div className=' mx-[auto] w-[1100px]  h-[30rem] flex flex-row overflow-x-auto no-scrollbar scroll-smooth' id="ghd" name="jdfkf">

                    <ul className='flex flex-row my-[auto]'>
                        <li>
                            <div className='w-[300px] border-[1px]  h-[20rem] mx-[30px]  hover:shadow-2xl hover:mt-[-20px]   shadow-md'>1</div>
                        </li>
                        <li>
                            <div className='w-[300px] border-[1px]  h-[30rem]  mx-[30px] hover:shadow-2xl hover:mt-[-20px]  shadow-md'>2</div>
                        </li>
                        <li>
                            <div className='w-[300px] border-[1px]  h-[20rem]  mx-[30px] hover:shadow-2xl hover:mt-[-20px] shadow-md'>3</div>
                        </li>
                        <li>
                            <div className='w-[300px] border-[1px]  h-[20rem]  mx-[30px] hover:shadow-2xl hover:mt-[-20px] shadow-md'>4</div>
                        </li>
                        <li>
                            <div className='w-[300px] border-[1px]  h-[20rem]  mx-[30px] hover:shadow-2xl hover:mt-[-20px] shadow-md'>5</div>
                        </li>


                    </ul>

                </div>
            </div>

        </div>
    )
}
