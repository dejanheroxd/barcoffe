import React from "react";
import Breakfast from "./Breakfast";
import Drinks from "./Drinks";
import Lunch from "./Lunch";

export default function MenuCard() {
  return (
    <div>
      <Breakfast />
      <Drinks />
      <Lunch />
    </div>
  );
}
