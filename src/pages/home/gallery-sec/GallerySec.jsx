import React from "react";
import barman from "../../../assets/barman.jpg";
import champagne from "../../../assets/champagne.jpg";
import together from "../../../assets/together.jpg";
import grapes from "../../../assets/grapes.jpg";
import table from "../../../assets/table.jpg";

export default function GallerySec() {
  return (
    <div className="bg-secondary px-5 py-10">
      <div className="grid-row-3 grid-cols-2 md:grid-cols-3 gap-3 grid">
        <img
          className="col-span-2 md:row-span-2 h-full object-cover"
          src={barman}
          alt=""
        />
        <img src={champagne} alt="" />
        <img src={table} alt="" />
        <img src={grapes} alt="" />
        <img src={together} alt="" />
      </div>
    </div>
  );
}
