import axios from "axios";
import React from "react";
import custFetch from "../utilities/custFetch";
import ProductsGrid from "../Components/ProductsGrid";
import { useNavigation } from "react-router-dom";

const url = "";

export const loader = async () => {
  const resp = await custFetch.get(url);
  return { products: resp.data.data };
};

function Products() {
  return (
    <>
      <ProductsGrid></ProductsGrid>
    </>
  );
}

export default Products;
