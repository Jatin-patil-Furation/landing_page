 import { offerDeatils } from "@/constants";
import React from "react";
import gamelogo from "../../public/assets/game/Gamelogo.svg"
import Image from "next/image";

const Offer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="m-5 border-yellow-600">
        <div className="mx-auto   flex items-center justify-center text-white font-bold text-center text-2xl border-pink-500 ">
          <Image src={gamelogo} alt="gamelogo" className="" />
        </div>
        <div className="relative top-[-58px]  ">
          <p className="flex justify-center  items-center  text-white expl-text text-4xl font-normal leading-[3rem] tracking-[0em] text-center">
            {" "}
            Exclusive Offers
          </p>
        </div>
      </div>

      <div className="flex w-[95%] m-auto  justify-center items-center flex-wrap px-[2rem] py-3 gap-4 ">
        {offerDeatils.map((offer) => {
          return (
            <div
              key={offer.id}
              className="basis-full  object-fill sm:basis-[45%] md:basis-[30%] "
            >
              <div className="w-[90%] mx-auto ">
                <img
                  src={offer.offerImage}
                  alt=""
                  className="w-full "
                  style={{
                    filter: "drop-shadow(0px 0px 20px rgba(255, 192, 0, 0.30))",
                  }}
                />
                <button className="font-lato font-semibold bg-gradient-to-t from-[#AD0B40] to-[#FF1917] py-3 px-2 w-full rounded-b-xl ">
                  Play Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
