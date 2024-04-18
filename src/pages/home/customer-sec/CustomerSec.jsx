import React from "react";
import stars from "../../../assets/stars.png";

export default function CustomerSec() {
  return (
    <div className="bg-primary h-[330px]">
      <div className="flex justify-center pb-9 pt-9">
        <img src={stars} alt="" />
      </div>
      <div className="flex justify-center">
        <p className="uppercase text-center w-64 text-white text-xl font-bold">
          "I've been a loyal customer of moonshine bay for years now, and I can
          honestly say that it's the best place in town to find all of my
          favorite drinks."
        </p>
      </div>
    </div>
  );
}
