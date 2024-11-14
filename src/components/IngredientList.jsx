import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients, onAddIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onButtonClick={() => onAddIngredient(ingredient)}
          isAdd={true}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
