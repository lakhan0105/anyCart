import React, { useState } from "react";
import { Form, useLoaderData, useLocation } from "react-router-dom";

function SingleProduct() {
  const { product } = useLoaderData();
  const { id, attributes } = product;

  const { colors, company, description, image, price, title } = attributes;

  const [selectedColor, setSelectedColor] = useState();
  const [productCount, setProductCount] = useState(1);

  // handleColor
  function handleColor(colorName) {
    setSelectedColor(colorName);
  }

  // handleProductCount
  function handleProductCount(e) {
    const count = Number(e.target.value);
    setProductCount(count);
  }

  return (
    <section className="single-product-section">
      <div className="single-product page-center">
        <div className="img-container">
          <img src={image} alt={title} />
        </div>

        <div className="right">
          <h2 className="title">{title}</h2>
          <p className="company">{company}</p>
          <p className="price">${price / 100}</p>
          <p className="desc">{description}</p>

          <div className="colors">
            <p>colors</p>

            {colors.map((color) => {
              // check for active color
              const activeColor = color === selectedColor;

              return (
                <button
                  className="color-el"
                  style={{
                    backgroundColor: color,
                    outline: `${activeColor ? "2px solid #000" : "none"}`,
                  }}
                  onClick={() => {
                    handleColor(color);
                  }}
                  key={color}
                ></button>
              );
            })}
          </div>

          <div className="product-count">
            <p>Amount</p>
            <Form method="post">
              <select
                name=""
                value={productCount}
                onChange={handleProductCount}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
