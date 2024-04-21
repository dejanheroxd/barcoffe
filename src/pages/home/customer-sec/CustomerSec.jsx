import React from "react";
import stars from "../../../assets/stars.png";

export default function CustomerSec() {
  return (
    <div className="h-[360px] bg-primary md:h-[440px] 2xl:h-[520px]">
      <div className="flex justify-center pb-9 pt-9 sm:pt-[55px] md:pt-[70px] 2xl:pt-[90px]">
        <img src={stars} alt="" />
      </div>
      <div className="flex justify-center">
        <p className="w-64 text-center text-xl font-bold uppercase text-white sm:w-[450px] sm:text-[25px] sm:leading-8 md:w-[550px] md:text-[30px] md:leading-9 lg:w-[690px] lg:text-[40px] lg:leading-[44px]">
          "I've been a loyal customer of moonshine bay for years now, and I can
          honestly say that it's the best place in town to find all of my
          favorite drinks."
        </p>
      </div>
      <p className="w-full pt-10 text-center text-xl font-bold text-white">
        Charlotte Rodriguez
      </p>
    </div>
  );
}
