import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../api/spoonacular";
import { Link } from "react-router-dom";
import "../style/RecipeDetail.scss";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await getRecipeDetails(id);
        setRecipe(details);
      } catch (err) {
        console.error("Error loading details:", err);
        setError("Error loading recipe details.");
      }
    };
    fetchData();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!recipe) return <Loading />;

  return (
    <>
      <Helmet>
        <title>{recipe.title} | Ricetta Vegetariana</title>
        <meta
          name="description"
          content={`Scopri come preparare ${recipe.title} in modo semplice e gustoso.`}
        />
      </Helmet>

      <div className="recipe-detail-container">
        <Link to="/">
          <button className="back-link" style={{ marginBottom: "1rem" }}>
            Back to search
          </button>
        </Link>
        <h2 className="recipe-summary">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>
          <strong>Preparation time:</strong> {recipe.readyInMinutes} minutes
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
        <h3>Ingredients</h3>
        <ol>
          {recipe.extendedIngredients.map((ingr) => (
            <li key={ingr.id}>{ingr.original}</li>
          ))}
        </ol>
        {recipe.instructions && (
          <>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
          </>
        )}
      </div>
    </>
  );
};

export default RecipeDetail;
