"use client";
import Image from "next/image";
import React from "react";
import sikka from "../../public/assets/hero/hero-heading.svg"

const Mobilenav: React.FC = () => {
  return (
    <nav className="  mx-auto flex justify-between items-center mobilenav">
      <div className=" flex items-center justify-center  m-auto  border-yellow-400">
        <Image src={sikka} alt="img" className="h-[30px] pb-1 " />
      </div>
    </nav>
  );
};

export default Mobilenav;
