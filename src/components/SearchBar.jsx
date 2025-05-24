import React, { useState } from "react";

// SearchBar component - the search input bar
// onSearch: function to call when submitting the search
// resetError: function to reset any error messages
const SearchBar = ({ onSearch, resetError }) => {
  // Local state to manage the text input value
  const [input, setInput] = useState("");

  // Function called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Call the onSearch prop function if input is not empty
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search for an ingredient..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-bar"
        onFocus={resetError}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
