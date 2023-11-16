import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../Searchbar/searchBar.css";
import { NavLink } from "react-router-dom";

function ImageSample({ pictures, setPictures }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = fetch(
          "https://api.pexels.com/v1/curated?page=1&per_page=10",
          {
            headers: {
              Authorization:
                "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
            },
          }
        );
        const data = response.json();
        setPictures(data.photos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid-container">
      {pictures.map((pics) => (
        <NavLink to={`/postcard/${pics.id}`} key={pics.id}>
          <img
            key={pics.id}
            src={pics.src.medium}
            alt={pics.alt}
            className="image-results"
          />{" "}
        </NavLink>
      ))}
    </div>
  );
}

ImageSample.propTypes = {
  pictures: PropTypes.string.isRequired,
  setPictures: PropTypes.func.isRequired,
};

export default ImageSample;
