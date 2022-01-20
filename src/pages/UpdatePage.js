import React, { useState } from "react";

const UpdatePage = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: 0,
    // description: "",
    // category: "",
    // quantity: 0,
    // photoURL: "",
    // sold: 0,
    // shipping: false,
  });

  const [product, setProduct] = useState({
    id: "",
    name: "",
    // price: 0,
    // description: "",
    // category: "",
    // quantity: 0,
    // photoURL: "",
    // sold: 0,
    // shipping: false,
  });
  const showProductInfo = (evt) => {
    evt.preventDefault();

    fetch(`http://localhost:5000/products/${product.id}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("id:" + product.id);
        setProduct(json.data);
        // setFormData(json.data);
        console.log(product);
        // console.log(formData);
        // alert(json.message);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });

    fetch(`http://localhost:5000/products/${product.id}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("id:" + product.id);
        // setProduct(json.data);
        setFormData(json.data);
        // console.log(product);
        console.log(formData);
        // alert(json.message);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  };

  const updateProduct = (evt) => {
    evt.preventDefault();

    fetch(
      `https://shopify-inventory-backend.herokuapp.com/products/${formData.id}`,
      {
        method: "PUT",
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
          <h1>Update</h1>

          <form action="" onSubmit={showProductInfo}>
            <div className="form-control">
              <label htmlFor="id">
                Enter the product ID you want to Update
              </label>
              <input
                type="text"
                id="id"
                value={product.id}
                onChange={(evt) => {
                  setProduct({ ...product, id: evt.target.value });
                }}
              />
            </div>

            <div className="form-control">
              <button className="btn" type="submit">
                Show Info
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* ///////////////////////////// ///////////////////////////////////////////////////////////*/}
      <form action="" onSubmit={updateProduct}>
        <div className="form-control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={product.name}
            onChange={(evt) => {
              setFormData({ name: evt.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">price</label>
          <input
            type="number"
            id="price"
            value={product.price}
            onChange={(evt) => {
              setFormData({ price: evt.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <button className="btn" type="submit">
            Update Item
          </button>
        </div>
      </form>

      {/*   <div className="form-control">
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
            </div> */}
      {/* <div className="form-control">
              <button className="btn" type="submit">
                Update Item
              </button>
            </div> */}
      {/* </form>
        </div>
      </section> */}
    </div>
  );
};

export default UpdatePage;
