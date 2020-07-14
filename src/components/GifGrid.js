import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CardColumns } from "react-bootstrap";
import { getGifs } from "../helpers/getGifs";

import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <div>
      <h3>{category}</h3>
      <CardColumns>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </CardColumns>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
