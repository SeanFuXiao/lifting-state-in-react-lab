import { useState } from "react";
import "./App.css";
import IngredientList from "./components/IngredientList";
import BurgerStack from "./components/BurgerStack";

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

const App = () => {
  const [stackedIngredients, setStackedIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setStackedIngredients([...stackedIngredients, ingredient]);
  };

  const removeIngredient = (index) => {
    setStackedIngredients(stackedIngredients.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          onAddIngredient={addIngredient}
        />
        <BurgerStack
          ingredients={stackedIngredients}
          onRemoveIngredient={removeIngredient}
        />
      </section>
    </main>
  );
};

export default App;
