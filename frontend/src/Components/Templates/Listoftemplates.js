import React, { useState } from "react";
import Template2 from "./Template2/Template2";
import Template1 from "./Template1/Template1";
import { useLocation } from "react-router-dom";

import dataContext from "../../context/datacontext";
import { useContext } from "react";

export default function Listoftemplates() {
  const { item, setitem } = useContext(dataContext);
  const [selectedTemplate, setselectedTemplate] = useState(
    item?.selectedtemplate
  );

  const Template = [
    { id: "0", src: require("./Image/template1.png"), alt: "template 1" },
    { id: "1", src: require("./Image/template2.png"), alt: "tempplate 2" },
  ];

  const changeTemplate = (e) => {
    localStorage.setItem("selectedtemplate", JSON.stringify(e.target.id));
  };
  return (
    <>
      <div className="h-[70%]  w-[90%] grid grid-cols-2 gap-4 pl-[100px] mt-[40px] overflow-y-auto no-scrollbar  mx-auto mt-[10px] ">
        {Template.map((elem, id) => {
          return (
            <>
              <div className="relative rounded-[10px] w-[190px] h-[250px] mt-[20px]  border-[1px] border-[#a7aaac85] aspect-square duration-300 cursor-pointer hover:shadow-2xl hover:scale-110 shadow-black">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[10px] "
                  style={{ filter: "grayscale(100%)" }}
                  src={elem.src}
                  alt={elem.alt}
                  id={id}
                  onClick={changeTemplate}
                  onMouseEnter={(e) =>
                    (e.target.style.filter = "grayscale(0%)")
                  } // Show color on hover
                  onMouseLeave={(e) =>
                    (e.target.style.filter = "grayscale(100%)")
                  }
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
