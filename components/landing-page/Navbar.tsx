"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar: React.FC = () => {
  return (
    <nav className="mx-auto  px-[1rem]  items-center flex justify-between shape">
      <div className="flex px-[1rem] justify-center items-center">
        <GiHamburgerMenu className="text-2xl   text-white cursor-pointer" />
      </div>

      <div className="text-white w-[20%] font-bold ">
        <p className=" float-right text-white sm:text-2xl lg:text-3xl game-text">
          Logo
        </p>
      </div>

      <div className="flex justify-center px-[1rem] items-center space-x-4 ">
        <button className=" text-white py-[.3rem] px-[.8rem] text-lg rounded  bg-opacity-15  border-white border-[0.5px]">
          Login
        </button>
        <button className="bg-white-500 text-lg py-[.3rem] px-[1.2rem]  rounded bg-white text-[#ad0b40]  border-white border-[0.5px]">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
