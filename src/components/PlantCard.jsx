import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;
  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((prevInStock) => !prevInStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;


