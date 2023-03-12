import React, { useState } from "react";
import Logo from "../../public/SVG/Recurso 6.svg";
import Github from "../assets/github.svg";
export const Navbar = () => {
  const [showGithub, setshowGithub] = useState(false)
  const handleSwitchGithub=()=>{
    setshowGithub(!showGithub)
  }
  return (
    <div className="mt-2 flex items-center justify-between px-4  top-0 z-50 bg-white py-3 xs:mx-8 xs:mt-6">
      <div className="flex items-center ">
        <img src={Logo} alt="" className="w-12" />
        <a href="" className="ml-2 font-medium text-xl">
          <span className="text-xl font-bold">D</span>iego{" "}
          <span className="text-xl font-bold">C</span>ode
        </a>
      </div>
      <div className="relative ">
        <button className="cursor-pointer" onClick={handleSwitchGithub}>
          <img src={Github} alt="" />
        </button>
        <div className={`w-28 h-12 absolute z-50 bg-black text-white rounded-md  text-center shadow-xl top-50 right-4 transition-all delay-100 ease-in  ${showGithub?'opacity-100':'opacity-0'} `
      
      }>
          <div className="">
            <a target="_blank" href="https://github.com/DiezerDiego/CanawayBackend" className="hover:font-semibold">Backend</a></div>
            <hr />
          <div><a target="_blank" href="https://github.com/DiezerDiego/CanawayFrontend" className="hover:font-semibold">Frontend</a></div>
        </div>
      </div>
    </div>
  );
};
