import { useState } from "react";
import ButtonByTheme from "../components/FilterButton/ButtonsByTheme";
import SearchBar from "../components/Searchbar/SearchBar";

function Nature() {
  const [natQuery, setNatQuery] = useState("");
  const [natResults, setNatResults] = useState([]);
  return (
    <>
      <ButtonByTheme
        natQuery={natQuery}
        setNatQuery={setNatQuery}
        natResults={natResults}
        setNatResults={setNatResults}
      />
      <SearchBar
        natQuery={natQuery}
        setNatQuery={setNatQuery}
        natResults={natResults}
        setNatResults={setNatResults}
      />
      <div className="grid-container">
        {natResults &&
          natResults.map((photo) => (
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

export default Nature;
