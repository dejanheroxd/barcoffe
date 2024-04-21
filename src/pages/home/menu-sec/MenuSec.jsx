import React from "react";
import more from "../../../assets/more.jpg";
import Menu from "./Menu";

export default function MenuSec() {
  return (
    <>
      <div className="relative h-48 w-full overflow-hidden md:h-60 lg:h-96">
        <img
          src={more}
          alt=""
          className="h-full w-full scale-150 object-cover brightness-75"
        />
        <div className="absolute top-0 flex h-full w-full items-center justify-center">
          <p className="w-60 text-center text-4xl font-bold uppercase text-white sm:w-[730px] sm:text-5xl md:text-7xl lg:text-8xl">
            more than just a drink
          </p>
        </div>
      </div>
      <Menu />
    </>
  );
}
