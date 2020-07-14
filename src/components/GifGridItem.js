import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

export const GifGridItem = ({ title, url }) => {
  return (
    <Card>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
