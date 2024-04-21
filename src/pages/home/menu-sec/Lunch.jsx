import React from "react";
import OneMeal from "./OneMeal";

export default function Lunch() {
  return (
    <div className="grid-cols-3 gap-y-10 px-[70px] xl:grid">
      <OneMeal
        name="Baked duck burger"
        description="brioche bun, maple bacon, smoked tomato reslish and fries"
        price="24"
      />
      <OneMeal
        name="Herb crusted rockling fillet"
        description="house tartare, cos hearts, cucumber and radish"
        price="18"
      />
      <OneMeal
        name="Grilled broccolini salad"
        description="poached duck egg, peas, sprouts and lemon (GF)"
        price="16"
      />
      <OneMeal
        name="Smoked beetroot salad"
        description="roasted pumpkin, walnuts, chard and goats cheese"
        price="21"
      />
      <OneMeal
        name="Baked millet and vegetable root"
        description="two poached eggs, activated cashew cream & supergreens pesto."
        price="20"
      />
      <OneMeal
        name="Pan seared snapper"
        description="potato galette, broccolini, purple cauliflower & shaved baby heirloom beets."
        price="19"
      />
    </div>
  );
}
