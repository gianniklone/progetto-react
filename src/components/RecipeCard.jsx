import React from "react";
import { Link } from "react-router-dom";

// Component that receives a "recipe" object as prop
// Displays an image and the recipe title in a card
const RecipeCard = ({ recipe }) => {
  return (
    // HTML code for displaying the search result
    <div className="card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.title} />
        <div className="card-content">
          <h3>{recipe.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
