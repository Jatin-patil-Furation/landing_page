import Image from "next/image";
import React from "react";
import sikka from "../../../public/assets/hero/hero-heading.svg";
import heroimage from "../../../public/assets/hero/hero-image.svg";

const Mobilehero = () => {
  return (
    <div className="max-w-4xl   border-yellow-700  ">
      <div className=" py-[.1rem] ">
        <div className="w-[100px] sm:w-[400px]  m-auto flex items-center justify-center  border-yellow-400">
          <Image
            src={heroimage}
            alt="Image"
            className="h-[70px] sm:h-[100px] sikka"
          />
        </div>
        <div className=" border-red-400">
          <div className="w-[80%] m-auto">
            <p className="text-white text-center text-[.6rem] font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] heroparagrapgh">
              Experience boundless amusement on ultimate betting platform!
              Unfold endless entertainment.
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-1 items-center space-x-4 ">
          <button className="px-[.3rem] py-[.3rem] text-white  text-[.4rem] rounded  bg-opacity-15  border-white border-[0.5px] herologin">
            Login
          </button>
          <button className="bg-white-500 py-[.3rem] px-[.3rem] text-[.5rem]  rounded bg-white text-[#ad0b40]  border-white border-[0.5px] herosign">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobilehero;
