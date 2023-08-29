"use client"
import { faqData } from '@/constants';
import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from "lucide-react";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleAccordionClick = (index: any) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <section className="mx-auto p-16 pb-28 sm:pb-32  lg:p-40  bg-[#0c0c0c] text-white relative ">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" text-xl md:text-3xl lg:text-5xl expl-text font-normal leading-10 text-white  text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer border-[#B40E0D] border-t-[1px]  transition-all duration-160"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => handleAccordionClick(index)}
              >
                <span className="flex text-start text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-160" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-160" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-160 text-xs sm:text-sm md:text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <img
        src={"/assets/faq/AceCard.svg"}
        alt="img"
        className="w-16 h-16 lg:w-[100px] lg:h-[100px] absolute top-[-4rem] right-8"
      />
      <img
        src={"/assets/faq/BlackChip.svg"}
        alt="img"
        className="w-16 h-16 lg:w-[100px] lg:h-[100px] absolute top-1 left-2 lg:left-12"
      />
      <img
        src={"/assets/faq/PinkChip.svg"}
        alt="img"
        className="w-16 h-16 lg:w-[100px] lg:h-[100px] absolute bottom-[-2rem] sm:bottom-[-2.5rem] md:bottom-[-2.8rem] lg:bottom-[-3rem] left-8"
      />
      <img
        src={"/assets/faq/GreenChip.svg"}
        alt="img"
        className="w-20 h-20 lg:w-[140px] lg:h-[140px] absolute bottom-8 right-4 lg:right-8"
      />
      <img
        src={"/assets/faq/AceCard.svg"}
        alt="img"
        className=" rotate-180 w-16 h-16 lg:w-[110px] lg:h-[110px] absolute bottom-[4rem] left-4 lg:left-28"
      />
    </section>
  );
}

export default Faq