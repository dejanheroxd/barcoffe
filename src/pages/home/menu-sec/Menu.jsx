import React from "react";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <div className="flex bg-primary text-white flex-col justify-center items-center">
      <div>
        <p className="text-4xl font-bold pb-10 pt-10">MENU</p>
      </div>
      <div className="text-center text-xl flex flex-col gap-2 pb-10">
        <p className="border-b border-white pb-[6px] w-[300px]">BREAKFAST</p>
        <p>DRINKS</p>
        <p>LUNCH</p>
      </div>
      <div>
        <MenuCard />
      </div>
    </div>
  );
}
