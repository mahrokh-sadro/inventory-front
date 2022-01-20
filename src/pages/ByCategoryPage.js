import React, { useState } from "react";
import Card from "./Card";
const ByCategoryPage = () => {
  const [formData, setFormData] = useState({
    cat: "",
  });

  const [products, setProducts] = useState([]);

  const onCreateAccount = (evt) => {
    evt.preventDefault();
    fetch(
      `https://shopify-inventory-backend.herokuapp.com/products/by/${formData.cat}`
    )
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.data);

        setFormData({
          cat: "",
        });
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  };

  return (
    <>
      <div>
        <section id="register-section">
          <div className="container">
            <h1>Enter Category</h1>

            <form action="" onSubmit={onCreateAccount}>
              <div className="form-control">
                <label htmlFor="cat">Category</label>
                <input
                  type="text"
                  id="cat"
                  value={formData.cat}
                  onChange={(evt) => {
                    setFormData({ ...formData, cat: evt.target.value });
                  }}
                />
              </div>

              <div className="form-control">
                <button className="btn" type="submit">
                  Show Items
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Card products={products} />
    </>
  );
};

export default ByCategoryPage;
