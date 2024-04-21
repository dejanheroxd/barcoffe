import React from "react";
import gin from "../../../assets/gin.jpg";

export default function LandingPage() {
  return (
    <div id="section1" className="relative h-96 md:h-[520px] lg:h-screen">
      <img className="h-full w-full object-cover" src={gin} alt="" />
      <div className="absolute top-4 w-full sm:flex lg:hidden">
        <div className="flex w-full justify-center sm:justify-normal sm:pl-20">
          <p className="mt-[2px] text-3xl font-extrabold text-white sm:text-4xl md:mt-7">
            MOONSHINE BAY
          </p>
        </div>
        <div className=" flex w-full items-center justify-center text-center text-xl sm:justify-end sm:pr-20 md:mt-7">
          <p className="text-white">1-555-555-1212</p>
        </div>
      </div>
      <div className="absolute bottom-12 left-10 text-5xl font-bold text-white sm:pl-[85px] sm:text-8xl md:left-5 md:text-[155px] lg:w-80 lg:text-[235px] lg:leading-[205px] 2xl:bottom-44 2xl:left-36 2xl:text-[260px]">
        <p>GIN HEAVEN</p>
      </div>
    </div>
  );
}
