import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import FadeIn from 'react-fade-in';
const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;



   
  return (
   
   
   <div className="recipe zoom myLogo">
    <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <FadeIn><RecipeDetails ingredients={ingredients} /></FadeIn>}
    </div>
  
  );
};

export default Recipe;
