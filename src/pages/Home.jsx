import React, { useState } from 'react';
import { cercaRicetteVegetariane } from '../api/spoonacular';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import Errore from '../components/Errore';


// Componente principale della homepage
const Home = () => {
  // Stato per salvare le ricette  restituite dalla chiamata API
  const [ricette, setRicette] = useState([]);
  // Stato per gestire i messaggi di errore
  const [errore, setErrore] = useState(null);
  // Stato per la visualizzazione del  caricamento durante la chiamata  API
  const [loading, setLoading] = useState(false);

  // Funzione asincrona per gestire la ricerca delle ricette
  const gestisciRicerca = async (query) => {
    setLoading(true) // Caricamento
    try {
      const risultati = await cercaRicetteVegetariane(query);
      if (risultati.length === 0) {     // Se l'array è vuoto, mostra errore
        setErrore("Nessuna ricetta trovata per questo ingrediente.")
      }
      else 
      {setRicette(risultati);   // Salva le ricette
      setErrore(null);}         // Rimuove gli evenntuali errori 
    } catch (err) {
      // Errore generico se la ricerca fallisce
      setErrore('Errore nella ricerca, riprova');
      console.error('Errore nella ricerca:', err);
    } finally{
      setLoading(false);  // Nasconde il caricamento
    }
  };

  // Funzione per resettare la barra di ricerca dopo aver ricevuto il messaggio d'errore
  const resetError = () => {
    setErrore(null)
  };

  return (

                            //Codice HTML della Home
        <div className="container">
        <h1>Ricette Vegetariane</h1>
        <SearchBar onSearch={gestisciRicerca} resetError={resetError}/>

        {loading && <Loading />}
        {errore && <Errore messaggio={errore} />}

        <div className="grid">
            {ricette.map((ricetta) => (
            <RecipeCard key={ricetta.id} ricetta={ricetta} />
            ))}
        </div>
        </div>
  );
};

export default Home;