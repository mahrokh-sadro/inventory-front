import React from "react";

const Card = ({ products }) => {
  return (
    <div>
      {products.map((e) => e.name + " " + e.category + " " + e.price + "  |  ")}
    </div>
  );
};

export default Card;
