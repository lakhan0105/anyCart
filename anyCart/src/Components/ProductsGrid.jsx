import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductsGrid() {
  const { products } = useLoaderData();
  console.log(products);

  const nav = useNavigation();
  console.log(nav);

  if (nav.state === "loading") {
    return <h2>Loading...</h2>;
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
