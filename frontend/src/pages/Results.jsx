import { useState } from "react";
import SearchBar from "../components/Searchbar/SearchBar";

function Images() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  return (
    <>
      <div>
        <SearchBar
          query={query}
          setQuery={setQuery}
          results={results}
          setResults={setResults}
        />
      </div>
      <div className="grid-container">
        {results &&
          results.map((photo) => (
            <img
              key={photo.id}
              src={photo.src.medium}
              alt={photo.description}
              className="image-results"
            />
          ))}
      </div>
    </>
  );
}

export default Images;
