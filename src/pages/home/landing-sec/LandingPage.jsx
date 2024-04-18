import React from "react";
import gin from "../../../assets/gin.jpg";

export default function LandingPage() {
  return (
    <div className="h-96 relative">
      <img className="h-full w-full object-cover" src={gin} alt="" />
      <div className="absolute top-4 w-full text-center">
        <p className="text-white text-3xl font-extrabold">MOONSHINE BAY</p>
      </div>
      <div className="absolute top-16 text-xl w-full text-center">
        <p className="text-white">1-555-555-1212</p>
      </div>
      <div className="absolute bottom-12 left-10 text-5xl font-bold text-white">
        <p>GIN HEAVEN</p>
      </div>
    </div>
  );
}
