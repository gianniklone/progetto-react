import { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [ricette, setRicette] = useState([]);

  return (
    <RecipeContext.Provider value={{ ricette, setRicette }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRicette = () => useContext(RecipeContext);