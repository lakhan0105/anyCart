import React from "react";
import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <SectionTitle title="Featured Products" />
      <ProductsGrid></ProductsGrid>
    </section>
  );
}

export default FeaturedProducts;
