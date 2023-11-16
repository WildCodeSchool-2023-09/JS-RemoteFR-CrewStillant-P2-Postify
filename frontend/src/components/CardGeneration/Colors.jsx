import PropTypes from "prop-types";

function Colors({
  savedColor,
  setSavedColor,
  savedFontColor,
  setSavedFontColor,
}) {
  return (
    <div>
      <input
        onChange={(e) => setSavedColor(e.target.value)}
        type="color"
        value={savedColor}
        className="bg-color"
      />

      <input
        onChange={(e) => setSavedFontColor(e.target.value)}
        type="color"
        value={savedFontColor}
        className="font-color"
      />
    </div>
  );
}

Colors.propTypes = {
  savedColor: PropTypes.string.isRequired,
  setSavedColor: PropTypes.func.isRequired,
  savedFontColor: PropTypes.string.isRequired,
  setSavedFontColor: PropTypes.func.isRequired,
};

export default Colors;
