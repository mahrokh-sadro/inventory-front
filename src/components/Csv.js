import React from "react";

const Csv = () => {
  return (
    <div>
      <div class="d-grid gap-2">
        <a
          href="https://shopify-inventory-front.netlify.app/by/category"
          class="btn btn-primary"
          type="submit"
        >
          Filter by Category
        </a>

        <a href="/create" class="btn btn-primary" type="submit">
          Create an Item
        </a>

        <a href="/update" class="btn btn-primary" type="submit">
          Edit the quantity of an Item
        </a>

        <a href="/delete" class="btn btn-primary" type="submit">
          Delete an Item
        </a>

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
