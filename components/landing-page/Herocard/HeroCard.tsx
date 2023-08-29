
import Image from 'next/image';
import React from 'react'
import sikka from "../../../public/assets/hero/hero-heading.svg"
import heroimage from "../../../public/assets/hero/hero-image.svg";
import heroshadow from "../../../public/assets/hero/heroboxshadow.png";

const HeroCard = () => {


  return (
    <div className="max-w-6xl  sm:py-[.6rem] sm:px-[.8rem] md:py-[.5rem] md:px-[1.2rem] lg:py-[1rem] lg:px-[2rem] m-auto flex justify-between gap-4">
      <div className="w-[60%]  m-auto border-yellow-500">
        <div
          className="
            w-[80%]
          md:py-[.7rem] 
          md:px-[.4rem] lg:py-[1rem] 
             lg:px-[.5rem]
         border-pink-500"
        >
          <Image
            src={sikka}
            alt="Sikkafont"
            className="sm:w-[80%] md:w-[100%] lg:w-[100%]"
          />
        </div>

        <div
          className=" w-[80%]  sm:py-[.4rem]
          sm:px-[.1rem]
        md:py-[.3rem] md:px-[.4rem]  lg:py-[.6rem] lg:px-[.5rem]   border-pink-500"
        >
          <p className="text-white  leading-[2rem] font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] sm:text-base text-lg">
            Experience boundless amusement on ultimate betting platform! Unfold
            endless entertainment.
          </p>
        </div>
        <div className=" md:px-[.3rem] lg:px-[.5rem]   text-left border-pink-500">
          <button className="text-white py-[.5rem]  px-[1rem] sm:text-sm text-lg rounded-[5px] join-button">
            Join Now!
          </button>
        </div>
      </div>

      <div className="w-[40%] sm:pt-[1rem] md:pt-[1rem] lg:py-[1rem]  m-auto border-pink-500">
        <div className="heroshadow  relative top-[-60px] h-[1px] z-1">
          <Image src={heroshadow} alt="heroshadow" />
        </div>
        <div className="flex justify-center items-center ">
          <div className="lg:py-[.6rem] lg:px-[.3rem] border-green-600  m-auto rounded-t-lg z-10 ">
            <Image src={heroimage} alt="Image" className=" m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard