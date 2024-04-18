import React from "react";
import more from "../../../assets/more.jpg";
import Menu from "./Menu";

export default function MenuSec() {
  return (
    <>
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={more}
          alt=""
          className="h-full brightness-75 scale-150 object-fill w-full"
        />
        <div className="absolute w-full h-full top-0 flex justify-center items-center">
          <p className="uppercase w-60 text-center text-4xl text-white font-bold">
            more than just a drink
          </p>
        </div>
      </div>
      <Menu />
    </>
  );
}
