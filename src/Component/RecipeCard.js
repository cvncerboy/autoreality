import React from "react";
function RecipeCard({ meal }) {
  return (
    <div>
      <a href={meal.null}>
        <img src={meal.foodImgUrl} alt={meal.foodName} />
        <p>{meal.foodName}</p>
      </a>
    </div>
  );
}
export default RecipeCard;
