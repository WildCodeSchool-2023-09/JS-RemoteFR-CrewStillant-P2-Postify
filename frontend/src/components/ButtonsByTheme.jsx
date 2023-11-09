import PropTypes from "prop-types";
import data from "../data/data.json";
import "./buttonsbytheme.css";

function ButtonByTheme(setQuery) {
  return (
    <div className="btn_block">
      {data &&
        data.map((r) =>
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
