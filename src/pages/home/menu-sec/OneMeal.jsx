import React from "react";

export default function OneMeal({ name, description, price }) {
  return (
    <div className="px-6">
      <div className="text-center">
        <p className="text-xl">{name}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
