import React from "react";
import { Link } from "react-router-dom";

const Csv = () => {
  return (
    <div>
      <div class="d-grid gap-2">
        <Link to="/by/category" class="btn btn-primary" type="submit">
          Filter by Category
        </Link>

        <Link to="/create" class="btn btn-primary" type="submit">
          Create an Item
        </Link>

        <Link to="/update" class="btn btn-primary" type="submit">
          Edit the quantity of an Item
        </Link>

        <Link to="/delete" class="btn btn-primary" type="submit">
          Delete an Item
        </Link>

        <a
          href="https://shopify-inventory-backend.herokuapp.com/products"
          class="btn btn-primary"
          type="submit"
        >
          Get a list of Items
        </a>
      </div>
    </div>
  );
};

export default Csv;
