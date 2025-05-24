import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
