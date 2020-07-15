import React from "react";
import PropTypes from "prop-types";
import { CardColumns, Spinner } from "react-bootstrap";

import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <div>
      <h3>{category}</h3>

      {loading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      <CardColumns>
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </CardColumns>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
