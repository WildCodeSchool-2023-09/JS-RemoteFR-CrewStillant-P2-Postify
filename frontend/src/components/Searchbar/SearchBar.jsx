import PropTypes from "prop-types";
import "./searchBar.css";
import { NavLink } from "react-router-dom";

function SearchBar({ query, setQuery, setResults }) {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
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
      });
  };

  return (
    <div className="search-box">
      <input
        type="text"
        onChange={handleInputChange}
        className="input-search"
        placeholder="Type to Search..."
      />
      <NavLink to="/results" className="nav-search" onClick={handleSearch}>
        Search
      </NavLink>
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
};

export default SearchBar;
