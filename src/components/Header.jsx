import React, { useState, useEffect } from "react";
import { PiFlowerLotusLight } from "react-icons/pi";
import { GiLotus } from "react-icons/gi";
const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300 `}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <div className="flex items-center " >
        {" "}
          <a href="/">
            {header ? (
              <PiFlowerLotusLight className="text-5xl  w-[70px] " />
            ) : (
              <PiFlowerLotusLight className="text-5xl text-amber-500 w-[70px]" />
            )}
          </a>
          <h1 className={`${header ? 'text-black' :'text-white'} text-2xl font-bold text-center `}>LOTUS HOTEL</h1>
        </div>
        <nav className={`${header ? 'text-black' : 'text-white'} gap-x-4 tracking-[3px] text-[15px] lg:gap-x-9`}>
          <a className="hover:text-amber-500 transition-all px-3 text-xl duration-300" href="">Home </a>
          <a className="hover:text-amber-500 transition-all text-xl px-3 duration-300" href="">Rooms </a>
          <a className="hover:text-amber-500 transition-all text-xl px-3 duration-300" href="">Restaurant </a>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
