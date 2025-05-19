import React, { useState } from 'react';



// Componente della  SearchBar ovvero la barra di ricerca
// onSearch: funzione da chiamare quando  si   invia la ricerca
// resetError: funziona per resettare eventuali errori
const SearchBar = ({ onSearch, resetError }) => {
  // Statio locale per gestire il testo inserito nella barra di ricerca
  const [input, setInput] = useState('');

  // FUnzione chiamata quando si  invia il form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // CHiamata alla funzione passata come prop se l'input non è vuoto
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Cerca un' ingrediente..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='search-bar'
        onFocus={resetError}
      />
      <button type="submit">Cerca</button>
    </form>
  );
};

export default SearchBar;