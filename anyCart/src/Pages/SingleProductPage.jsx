import React, { useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import { useLocation } from "react-router-dom";
import custFetch from "../utilities/custFetch";
import Products from "./Products";

export const loader = async ({ params }) => {
  const id = params.id;
  const resp = await custFetch(`/products/${id}`);
  return { product: resp.data.data };
};

function SingleProductPage() {
  return (
    <div>
      <SingleProduct />
    </div>
  );
}

export default SingleProductPage;
