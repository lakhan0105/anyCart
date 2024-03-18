import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";

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

// importing loaders
import { loader as featuredProductsLoader } from "./Pages/Landing.jsx";
import { loader as productsLoader } from "./Pages/Products.jsx";
import { loader as singleProductLoader } from "./Pages/SingleProductPage.jsx";
import SingleErrorEl from "./Pages/SingleErrorEl.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";

// actions
import { action as registerAction } from "./Pages/Register.jsx";
import { action as loginAction } from "./Pages/Login.jsx";
import Checkout from "./Pages/Checkout.jsx";

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
        errorElement={<SingleErrorEl />}
      ></Route>
      <Route path="/about" element={<About />}></Route>

      <Route
        path="/products"
        element={<Products />}
        loader={productsLoader}
      ></Route>

      <Route
        path="/products/:id"
        element={<SingleProductPage />}
        loader={singleProductLoader}
      ></Route>
      <Route path="/cart" element={<Cart />}></Route>

      <Route
        path="/login"
        element={<Login />}
        action={loginAction(store)}
      ></Route>

      <Route
        path="/register"
        element={<Register />}
        action={registerAction}
      ></Route>

      <Route path="/checkout" element={<Checkout />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
