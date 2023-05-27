import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const HandleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <u1 className=" hidden md:flex">
        <i className="p-4"> name</i>
        <i className="p-4"> company</i>
        <i className="p-4"> resources</i>
        <i className="p-4"> details</i>
        <i className="p-4"> about</i>
      </u1>
      <div onClick={HandleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed   left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <u1 className="uppercase p-4 list-none">
          <li className="p-4 border-b border-b-gray-700"> name</li>
          <li className="p-4 border-b border-b-gray-700"> company</li>
          <li className="p-4 border-b border-b-gray-700"> resources</li>
          <li className="p-4 border-b border-b-gray-700"> details</li>
          <li className="p-4"> about</li>
        </u1>
      </div>
    </div>
  );
}

export default Navbar;
