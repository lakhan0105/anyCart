import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductsGrid() {
  // grab the products data from loader
  const { products } = useLoaderData();

  // setup loading when state==="loading"
  const nav = useNavigation();
  if (nav.state === "loading") {
    return <h2>Loading...</h2>;
  }

  // if no results found
  if (products.length < 1) {
    return <h2>Sorry, no items matched your search!</h2>;
  }

  return (
    <section className="products-grid-section">
      <div className="products-grid">
        {products.map((product) => {
          const { id, attributes } = product;
          return <ProductCard key={id} {...attributes} id={id}></ProductCard>;
        })}
      </div>
    </section>
  );
}

export default ProductsGrid;
