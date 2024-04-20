import React from "react";
import Breakfast from "./Breakfast";
import Drinks from "./Drinks";
import Lunch from "./Lunch";

export default function MenuCard({ clickedMenu }) {
  return (
    <div>
      {clickedMenu === "breakfast" ? (
        <Breakfast />
      ) : clickedMenu === "drinks" ? (
        <Drinks />
      ) : clickedMenu === "lunch" ? (
        <Lunch />
      ) : (
        <Breakfast />
      )}
    </div>
  );
}
