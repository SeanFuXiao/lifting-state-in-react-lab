const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.onRemoveIngredient(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
