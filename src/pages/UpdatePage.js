import React, { useState } from "react";

const UpdatePage = () => {
  const [formData, setFormData] = useState({
    // id: "",
    // name: "",
  });

  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    description: "",
    category: "",
    quantity: 0,
    photoURL: "",
    sold: 0,
    shipping: false,
  });

  const updateProduct = (evt) => {
    evt.preventDefault();

    fetch(
      `https://shopify-inventory-backend.herokuapp.com/products/${formData.id}`
    )
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.data);

        console.log("---" + product);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });

    fetch(
      `https://shopify-inventory-backend.herokuapp.com/products/${formData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...product, quantity: formData.quantity }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        alert(json.message);
        // setFormData({
        //   name: "",
        // });
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  };

  return (
    <div>
      <section id="register-section">
        <div className="container">
          <h1>Update</h1>

          <form action="" onSubmit={updateProduct}>
            <div className="form-control">
              <label htmlFor="id">
                Enter the product ID you want to Update
              </label>
              <input
                type="text"
                id="id"
                value={formData.id}
                onChange={(evt) => {
                  setFormData({ ...formData, id: evt.target.value });
                }}
              />
            </div>

            <div className="form-control">
              <label htmlFor="name">new name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(evt) => {
                  setProduct({ ...formData, name: evt.target.value });
                }}
              />
            </div>
            <div className="form-control">
              <button className="btn" type="submit">
                Update the Quantity
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdatePage;
