import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDettaglioRicetta } from '../api/spoonacular';
import { Link } from 'react-router-dom';
import '../style/RecipeDetail.css';
import Loading from '../components/Loading'



const RecipeDetail = () => {
  const { id } = useParams();
  const [ricetta, setRicetta] = useState(null);
  const [errore, setErrore] = useState(null);

  useEffect(() => {
    // Quando il componente si monta o cambia l'id
    const fetchData = async () => {
      try {
        const dettaglio = await getDettaglioRicetta(id); // Chiamata API
        setRicetta(dettaglio); // Aggiorna lo stato con la ricetta
      } catch (err) {
        console.error('Errore nel caricamento dettagli:', err);
        setErrore('Errore nel caricamento dei dettagli della ricetta.');
      }
    };
    fetchData();
  }, [id]);

  // Gestione errore
  if (errore) return <p>{errore}</p>;
  // Stato di caricamento
  if (!ricetta) return <Loading />;

                        // Codice HTML della 
  return (
    <div className="recipe-detail-container">
      <Link to="/">
        <button className="back-link" style={{ marginBottom: '1rem' }}>Torna alla ricerca</button>
      </Link>
      <h2 className='recipe-summary'>{ricetta.title}</h2>
      <img src={ricetta.image} alt={ricetta.title} />
      <p><strong>Tempo di preparazione:</strong> {ricetta.readyInMinutes} minuti</p>
      <p><strong>Porzioni:</strong> {ricetta.servings}</p>
      <h3>Ingredienti</h3>
      <ol>
        {ricetta.extendedIngredients.map((ingr) => (
          <li key={ingr.id}>{ingr.original}</li>
        ))}
      </ol>
      {ricetta.instructions && (
        <>
          <h3>Istruzioni</h3>
          <p>{ricetta.instructions}</p>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
