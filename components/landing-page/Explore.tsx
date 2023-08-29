import { Exploredetails } from "@/constants";
import React from "react";

const Explore = () => {
  return (
    <div className="bg-gradient-to-br from-[#150f1c] to-[#2d1930]  text-white py-[4rem] px-6 border border-y-[#B40E0D] border-y-2">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center w-full relative top-[-2rem] expl-text">
        Explore Sikka Play
      </h2>
      <div className="flex  justify-center items-center lg:max-w-7xl">
        <div className="basis-full sm:basis-[60%] flex flex-wrap items-center justify-center gap-4">
          {Exploredetails.map((explore) => {
            return (
              <div
                className="basis-[40%] sm:basis-[33%] md:basis-[30%] text-center lg:basis-[23%]"
                key={explore.id}
              >
                <img
                  src={explore.exploreImage}
                  alt=""
                  className="w-20 h-20 object-fill mx-auto"
                />
                <h3 className="text- sm:text- md:text- lg:text-xl expl-text">
                  {explore.exploreHeading}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="sm:basis-[23%] hidden sm:block  ">
          <img
            src="/assets/explore/GIF.gif"
            className="bg-transparent px-6"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
