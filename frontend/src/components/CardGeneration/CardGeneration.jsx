import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

function CardGeneration({ savedColor, savedFontColor }) {
  const selectedPicture = useLoaderData();

  return (
    selectedPicture && (
      <div className="gen-card">
        <div className="text-card">
          <input style={{ background: savedColor, color: savedFontColor }} />
        </div>
        <div className="picture-card">
          {selectedPicture.src && (
            <img src={selectedPicture.src.medium} alt={selectedPicture.alt} />
          )}
        </div>
      </div>
    )
  );
}

CardGeneration.propTypes = {
  savedColor: PropTypes.string.isRequired,
  savedFontColor: PropTypes.string.isRequired,
};

export default CardGeneration;
