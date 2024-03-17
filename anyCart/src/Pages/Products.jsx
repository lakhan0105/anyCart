import React from "react";
import custFetch from "../utilities/custFetch";
import ProductsGrid from "../Components/ProductsGrid";
import { PaginationContainer, SectionTitle } from "../Components";
import FiltersContainer from "../Components/FiltersContainer";

// url
const url = "/products";

export const loader = async ({ request }) => {
  // grab the params from the url
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const resp = await custFetch.get(url, { params });
  const products = resp.data.data;
  const meta = resp.data.meta;

  return { products: products, meta: meta, params };
};

function Products() {
  return (
    <>
      <SectionTitle title="our products" />
      <div className="products">
        <FiltersContainer />
        <ProductsGrid></ProductsGrid>
      </div>
      <PaginationContainer />
    </>
  );
}

export default Products;
