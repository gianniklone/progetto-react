import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
console.log("API key: ", API_KEY);

const api = axios.create({
  baseURL: 'https://api.spoonacular.com',
  headers: {
    'x-api-key': API_KEY
  }
});

export const cercaRicetteVegetariane = async (query) => {
  const response = await api.get('/recipes/complexSearch', {
    params: {
      diet: 'vegetarian',
      number: 12,
      addRecipeInformation: true,
      query: query,
    },
  });
  return response.data.results;
};

export const getDettaglioRicetta = async (id) => {
  const response = await api.get(`/recipes/${id}/information`, {
    params: {},
  });
  return response.data;
};