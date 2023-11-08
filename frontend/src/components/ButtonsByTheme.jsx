import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import data from "../data/data.json";
import "./ButtonsByTheme.css";

function ButtonByTheme(setQuery) {
  const [themButton, setthemButton] = useState([]);
  useEffect(() => {
    setthemButton(data);
  }, []);
  return (
    <div className="btn_block">
      {themButton &&
        themButton.map((r) =>
          r.id <= 4 ? (
            <button
              className="btn_theme"
              type="button"
              key={r.id}
              onClick={() => setQuery(r.description)}
            >
              {r.description.toUpperCase()}
            </button>
          ) : null
        )}
    </div>
  );
}
ButtonByTheme.proTypes = {
  setQuery: PropTypes.string.isRequired,
};
export default ButtonByTheme;
