import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from "react-share";
import React from "react";

function CardGeneration({ savedColor, savedFontColor }) {
  const selectedPicture = useLoaderData();

  return (
    selectedPicture && (
      <>
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
        <div className="share-buttons">
          <EmailShareButton url={selectedPicture.src.medium}>
            <EmailIcon size={40} round />
          </EmailShareButton>
          <FacebookShareButton url={selectedPicture.src.medium}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <FacebookMessengerShareButton url={selectedPicture.src.medium}>
            <FacebookMessengerIcon size={40} round />
          </FacebookMessengerShareButton>
          <TwitterShareButton url={selectedPicture.src.medium}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
        </div>
      </>
    )
  );
}

CardGeneration.propTypes = {
  savedColor: PropTypes.string.isRequired,
  savedFontColor: PropTypes.string.isRequired,
};

export default CardGeneration;
