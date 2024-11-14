import Ingredient from "./Ingredient";

const BurgerStack = ({ ingredients, onRemoveIngredient }) => {
  return (
    <ul>
      {ingredients.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onButtonClick={() => onRemoveIngredient(index)}
            isAdd={false}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
