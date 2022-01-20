import React, { useState } from "react";

const DeletePage = () => {
  const [formData, setFormData] = useState({
    id: "",
  });

  const onCreateAccount = (evt) => {
    evt.preventDefault();
    fetch(
      `https://shopify-inventory-backend.herokuapp.com/products/${formData.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        alert(json.message);
        setFormData({
          id: "",
        });
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  };

  // console.log("---->" + formData.id);

  return (
    <div>
      <section id="register-section">
        <div className="container">
          <h1>Enter ID</h1>

          <form action="" onSubmit={onCreateAccount}>
            <div className="form-control">
              <label htmlFor="id">ID</label>
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
              <button className="btn" type="submit">
                Delete
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DeletePage;
