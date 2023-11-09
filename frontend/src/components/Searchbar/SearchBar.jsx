import React, { useEffect, useState } from "react";
import "./searchBar.css";

function SearchBar() {
  const [query, setQuery] = useState(null);
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    useEffect(
      fetch(
        `https://api.pexels.com/v1/search?query=${query}&page=1&per_page=10`,
        {
          headers: {
            Authorization:
              "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setResults(data.photos))
        .catch((err) => {
          console.error(err);
        }),
      []
    );
  };

  return (
    <>
      <div>
        <div className="search-box">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="input-search"
            placeholder="Type to Search..."
          />
          <button type="button" className="btn-search" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="grid-container">
        {results.map((photo) => (
          <img
            key={photo.id}
            src={photo.src.medium}
            alt={photo.url}
            className="image-results"
          />
        ))}
      </div>
    </>
  );
}

export default SearchBar;
