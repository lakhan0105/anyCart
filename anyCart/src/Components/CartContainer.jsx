import React from "react";
import CartItemsList from "./CartItemsList";
import CartTotalsContainer from "./CartTotalsContainer";
import SectionTitle from "./SectionTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartContainer() {
  const { totalCartItems } = useSelector((state) => state.cartState);

  // if there are no items in the cart
  if (totalCartItems < 1) {
    return (
      <div style={{ textAlign: "center" }}>
        <SectionTitle title={"Your cart is empty!"} />
        <Link to={"/products"}>
          <button className="btn hero-btn">find products</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <CartItemsList />
      <CartTotalsContainer />
    </div>
  );
}

export default CartContainer;
