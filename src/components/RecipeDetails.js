import React from "react";
import { v4 as uuidv4 } from "uuid";
import FadeIn from 'react-fade-in';
const RecipeDetails = ({ ingredients }) => {
  return ingredients.map(ingredient => {
    return (
    	<FadeIn>
      <ul key={uuidv4()} className="ingredient-list">
        <li className="ingredient-text">{ingredient.text}</li>
        <li className="ingredient-weight">Weight - {ingredient.weight}</li>
      </ul>
      </FadeIn>
    );
  });
};

export default RecipeDetails;