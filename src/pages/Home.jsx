import React, { useState } from "react";
import { searchRecipeVegetarian } from "../api/spoonacular";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { Helmet } from "react-helmet";

// Main component for the homepage
const Home = () => {
  // State to store recipes returned from the API call
  const [recipes, setRecipes] = useState([]);
  // State to handle error messages
  const [error, setError] = useState(null);
  // State to show loading indicator during API calls
  const [loading, setLoading] = useState(false);

  // Async function to handle recipe search
  const handleRecipe = async (query) => {
    setLoading(true); // Start loading
    try {
      const result = await searchRecipeVegetarian(query);
      if (result.length === 0) {
        // If array is empty, show error
        setError("No recipes found for this ingredient.");
      } else {
        setRecipes(result); // Save the recipes
        setError(null); // Clear any previous errors
      }
    } catch (err) {
      // Generic error if search fails
      setError("Search error, please try again.");
      console.error("Search error:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Function to reset error when the search bar is focused
  const resetError = () => {
    setError(null);
  };

  return (
    <div className="container">
      <Helmet>
        <title>Ricette Vegetariane | Ricetta Vegetariana</title>
        <meta
          name="description"
          content="Cerca e scopri ricette vegetariane gustose e salutari."
        />
      </Helmet>
      <h1>Vegetarian Recipes</h1>
      <SearchBar onSearch={handleRecipe} resetError={resetError} />

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}

      <div className="grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
