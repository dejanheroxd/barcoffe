import React from "react";
import OneMeal from "./OneMeal";

export default function Breakfast() {
  return (
    <div className="grid-cols-3 gap-y-10 px-[70px] xl:grid">
      <OneMeal
        name="French omelette"
        description="fresh herbs, Spanish onion, roasted peppers, spinach & fetta served with brioche"
        price="14"
      />
      <OneMeal
        name="Sweet corn fritters"
        description="avocado mash, fetta & chicory dressed with crème fraiche"
        price="15"
      />
      <OneMeal
        name="Dukkah toast"
        description="roasted vine tomatoes, dukkah with marinated goats cheese & avocado on toast"
        price="11"
      />
      <OneMeal
        name="Feast"
        description="eggs to your liking w mushrooms, roasted tomatoes, chorizo, istra bacon & house relish on toast"
        price="17"
      />
      <OneMeal
        name="Fried duck eggs"
        description="toast, parma prosciutto, roasted tomato, green olives and parmesan"
        price="15"
      />
      <OneMeal
        name="Ricotta hotcakes"
        description="banana, vanilla yoghurt, pistachio, chestnut flower honey"
        price="14"
      />
    </div>
  );
}
