import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ image, price, company, title, id }) {
  return (
    <Link to={`/products/${id}`}>
      <article className="product-card">
        <div className="img-container">
          <img src={image} alt={title} />
        </div>
        <div className="info">
          <div className="basic-info">
            <p className="title">{title}</p>
            <span>${price / 100}</span>
          </div>
          <p className="company">{company}</p>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
