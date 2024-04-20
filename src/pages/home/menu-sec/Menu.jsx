import React, { useState } from "react";
import MenuCard from "./MenuCard";

export default function Menu() {
  const [clickedMenu, setClickedMenu] = useState("breakfast");

  return (
    <div className="flex bg-primary text-white flex-col justify-center items-center">
      <div>
        <p className="text-4xl font-bold pb-10 pt-10">MENU</p>
      </div>
      <div className="text-center text-xl flex flex-col gap-2 pb-10">
        <p
          onClick={() => setClickedMenu("breakfast")}
          className={`${
            clickedMenu === "breakfast"
              ? "border-b border-white text-white/100"
              : "border-b border-transparent"
          } w-[300px] cursor-pointer text-white/65 hover:text-white/100 duration-100`}
        >
          BREAKFAST
        </p>
        <p
          onClick={() => setClickedMenu("drinks")}
          className={`${
            clickedMenu === "drinks"
              ? "border-b border-white text-white/100"
              : "border-b border-transparent"
          } w-[300px] cursor-pointer hover:text-white/100 duration-100 text-white/65`}
        >
          DRINKS
        </p>
        <p
          onClick={() => setClickedMenu("lunch")}
          className={`${
            clickedMenu === "lunch"
              ? "border-b border-white text-white/100"
              : "border-b border-transparent"
          } w-[300px] cursor-pointer hover:text-white/100 duration-100 text-white/65`}
        >
          LUNCH
        </p>
      </div>
      <div>
        <MenuCard clickedMenu={clickedMenu} />
      </div>
    </div>
  );
}
