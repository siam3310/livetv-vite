import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      className="form-control mb-4"
      placeholder="Search channels..."
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
