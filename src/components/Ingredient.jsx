const Ingredient = ({ ingredient, onButtonClick, isAdd }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}

      <button onClick={onButtonClick}>{isAdd ? "+" : "X"}</button>
    </li>
  );
};

export default Ingredient;
