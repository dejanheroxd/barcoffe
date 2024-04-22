import React, { useState } from "react";
import MenuCard from "./MenuCard";
import pattern from "../../../assets/pattern.png";
import Contact from "../../contact/Contact";

export default function Menu() {
  const [clickedMenu, setClickedMenu] = useState("breakfast");
  const [contactAcitve, setContactActive] = useState(false);

  return (
    <div
      id="section3"
      className="flex flex-col items-center justify-center bg-primary pb-20 text-white md:pb-20"
    >
      <div>
        <p className="pb-10 pt-10 text-4xl font-bold">MENU</p>
      </div>
      <div className="flex flex-col gap-2 pb-10 text-center text-xl 2xl:pb-20">
        <p
          onClick={() => setClickedMenu("breakfast")}
          className={`${
            clickedMenu === "breakfast"
              ? "border-b border-white text-white/95"
              : "border-b border-transparent"
          } w-[300px] cursor-pointer text-white/65 duration-100 hover:text-white/100`}
        >
          BREAKFAST
        </p>
        <p
          onClick={() => setClickedMenu("drinks")}
          className={`${
            clickedMenu === "drinks"
              ? "border-b border-white text-white/95"
              : "border-b border-transparent"
          } w-[300px] cursor-pointer text-white/65 duration-100 hover:text-white/100`}
        >
          DRINKS
        </p>
        <p
          onClick={() => setClickedMenu("lunch")}
          className={`${
            clickedMenu === "lunch"
              ? "border-b border-white text-white/95"
              : "border-b border-transparent"
          } w-[300px] cursor-pointer text-white/65 duration-100 hover:text-white/100`}
        >
          LUNCH
        </p>
      </div>
      <div>
        <MenuCard clickedMenu={clickedMenu} />
      </div>
      <button
        onClick={() => setContactActive(true)}
        className="relative mt-20 bg-white"
      >
        <img
          src={pattern}
          className="h-[55px] w-[220px] object-cover  "
          alt=""
        />
        <div className="absolute top-0 flex h-full w-full items-center justify-center text-xl font-bold text-slate-700 duration-300 hover:text-gray-400/70">
          <p>Book Table</p>
        </div>
      </button>
      {contactAcitve && <Contact setContactActive={setContactActive} />}
    </div>
  );
}
