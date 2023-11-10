import { useState } from "react";
import SearchBar from "../components/Searchbar/SearchBar";

function Images() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  return (
    <div>
      <SearchBar
        query={query}
        setQuery={setQuery}
        results={results}
        setResults={setResults}
      />
    </div>
  );
}

export default Images;
