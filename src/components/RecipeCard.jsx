import React from 'react';
import { Link } from 'react-router-dom';

// Componente che riceve uun oggetto  "ricetta" come prop
// Mostra un immagine e il titolo dela ricetta in una card
const RecipeCard = ({ricetta}) => {
    return (

                // Codice HTML  della visualizzazione della ricerca
                
        <div className="card">
            <Link to={`/ricetta/${ricetta.id}`}>
                <img src={ricetta.image} alt={ricetta.title} />
            <div className='card-content'>
                <h3>{ricetta.title}</h3>
            </div>
            </Link>
        </div>
    )
}

export default RecipeCard;