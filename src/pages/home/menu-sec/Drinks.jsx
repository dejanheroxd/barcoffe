import React from "react";
import OneMeal from "./OneMeal";

export default function Drinks() {
  return (
    <>
      <OneMeal
        name="Milkshae"
        description="salted caramel, vanilla bean"
        price="7"
      />
      <OneMeal
        name="Iced coffe"
        description="vanilla bean ice cream"
        price="4"
      />
      <OneMeal
        name="Single origin coffe"
        description="latte, cappucino"
        price="5"
      />
      <OneMeal
        name="Freshly squeezed juice"
        description="orange, apple, watermelon"
        price="2"
      />
      <OneMeal
        name="Organic green tea"
        description="sourced locally"
        price="7"
      />
      <OneMeal
        name="Aperol Spritz"
        description="Ice and slice of orange, prosecco, aperol, soda"
        price="4"
      />
      <OneMeal
        name="Campari"
        description="Campari's, lush grapefruit notes, soda"
        price="6"
      />
      <OneMeal
        name="Tormentoso Bush Vine Pintoage"
        description="This wine has typical Pinotage aromas of black cherries"
        price="12"
      />
    </>
  );
}
