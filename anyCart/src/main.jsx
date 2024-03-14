import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Products,
  Cart,
  SingleProductPage,
  Error,
} from "./Pages/index.js";

import { loader as featuredProductsLoader } from "./Pages/Products.jsx";
import { loader as productsLoader } from "./Pages/Products.jsx";

// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<HomeLayout></HomeLayout>}
      errorElement={<Error></Error>}
    >
      <Route
        index
        element={<Landing></Landing>}
        loader={featuredProductsLoader}
      ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/products"
        element={<Products />}
        loader={productsLoader}
      ></Route>
      <Route path="/products/:id" element={<SingleProductPage />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);