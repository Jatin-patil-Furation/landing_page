"use client";
import React from "react";


const Mobileh: React.FC = () => {
  return (
    <section>
      <div className="w-[100%] border-2 border-red-700 relative  ">
        <div className="z-0 w-full border-yellow-600 bg-[#0C0C0C]  object-fill">
          <img
            src="/assets/hero/hero-background.svg"
            alt=""
            className="z-10 border-2 border-yellow-700   "
          />
        </div>

        {/* <div
            className="m-auto  
             relative border-2
             top-[5rem]
              mobilehero 
              ">
            </div> */}
      </div>
    </section>
  );
};

export default Mobileh;
