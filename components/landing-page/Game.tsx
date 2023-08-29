import { GameCardDetails } from "@/constants";
import React from "react";
import GameCard from "./GameCard";
import gamelogo from "../../public/assets/game/Gamelogo.svg"
import Image from "next/image";


const Game = () => {
  return (
    <div className="bg-[#0C0C0C]  relative w-[100vw]  py-12 px-3 text-white">
      <div className="m-5 border-yellow-600 ">
        <div className="mx-auto   flex items-center justify-center text-white font-bold text-center text-2xl border-pink-500 ">
          <Image src={gamelogo} alt="gamelogo" className="" />
        </div>
        <div className="relative top-[-58px] game-text ">
          <p className="flex justify-center  items-center  text-white expl-text text-4xl font-normal leading-[3rem] tracking-[0em] text-center ">
            {" "}
            Games
          </p>
        </div>
      </div>

      <img
        src="/assets/game/pink-chip.svg"
        alt=""
        className="w-14 sm:w-16 sm:h-16 lg:w-24 h-12 lg:h-24 top-8 right-[-0.5em] absolute"
      />

      <img
        src="/assets/game/abs-1.svg"
        alt=""
        className="w-14 sm:w-16 sm:h-16 lg:w-24 h-12 lg:h-24  top-8 left-1 absolute"
      />

      <div className="game-card-container  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7   my-3 lg:my-12 sm:my-6  sm:justify-between sm:px-2  ">
        {GameCardDetails.map((card) => {
          return (
            <div
              key={card.id}
              className="basis-full p-6 sm:basis-[40%] md:basis-[48%] lg:basis-[30%]  "
            >
              <GameCard card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
