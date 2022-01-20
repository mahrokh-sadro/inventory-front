import React, { useState } from "react";

const CreatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    quantity: 0,
    photoURL: "",
    sold: 0,
    shipping: false,
  });

  const onCreateAccount = (evt) => {
    evt.preventDefault();

    fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((json) => {
        alert(json.message);
        setFormData({
          name: "",
          price: 0,
          description: "",
          category: "",
          quantity: 0,
          photoURL: "",
          sold: 0,
          shipping: false,
        });
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  };

  return (
    <div>
      <section id="register-section">
        <div className="container">
          <h1>Create</h1>

          <form action="" onSubmit={onCreateAccount}>
            <div className="form-control">
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(evt) => {
                  setFormData({ ...formData, name: evt.target.value });
                }}
              />
            </div>

            <div className="form-control">
              <label htmlFor="price">price</label>
              <input
                type="number"
                id="price"
                value={formData.price}
                onChange={(evt) => {
                  setFormData({ ...formData, price: evt.target.value });
                }}
              />
            </div>

            <div className="form-control">
              <label htmlFor="description">description</label>
              <input
                type="text"
                id="description"
                value={formData.description}
                onChange={(evt) => {
                  setFormData({ ...formData, description: evt.target.value });
                }}
              />
            </div>

            <div className="form-control">
              <label htmlFor="category">category</label>
              <input
                type="text"
                id="category"
                valeu={formData.category}
                onChange={(evt) => {
                  setFormData({ ...formData, category: evt.target.value });
                }}
              />
            </div>

            <div className="form-control">
              <label htmlFor="quantity">quantity</label>
              <input
                type="number"
                id="quantity"
                value={formData.quantity}
                onChange={(evt) => {
                  setFormData({
                    ...formData,
                    quantity: evt.target.value,
                  });
                }}
              />
            </div>

            <div className="form-control">
              <label htmlFor="photoURL">photoURL</label>
              <input
                type="text"
                id="photoURL"
                value={formData.photoURL}
                onChange={(evt) => {
                  setFormData({
                    ...formData,
                    photoURL: evt.target.value,
                  });
                }}
              />
            </div>
            <div className="form-control">
              <label htmlFor="sold">sold</label>
              <input
                type="number"
                id="sold"
                value={formData.sold}
                onChange={(evt) => {
                  setFormData({
                    ...formData,
                    sold: evt.target.value,
                  });
                }}
              />
            </div>
            <div className="form-control">
              <label htmlFor="shipping">shipping</label>
              <input
                type="text"
                id="shipping"
                value={formData.shipping}
                onChange={(evt) => {
                  setFormData({
                    ...formData,
                    shipping: evt.target.value,
                  });
                }}
              />
            </div>
            <div className="form-control">
              <button className="btn" type="submit">
                Create Item
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreatePage;
