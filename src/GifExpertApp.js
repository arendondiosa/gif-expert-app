import React, { useState } from "react";
import { Container, Jumbotron, Navbar } from "react-bootstrap";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <Container>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">GifExpertApp</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
      <div className="content">
        <Jumbotron>
          <h1>GifExpertApp</h1>
          <p>
            Search all the GIFs and Stickers. <code>Powered by GIPHY</code>
          </p>
          <AddCategory setCategories={setCategories} />
        </Jumbotron>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </Container>
  );
};
