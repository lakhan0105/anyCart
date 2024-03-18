import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Link, NavLink } from "react-router-dom";

function CartTotalsContainer() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  const { user } = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  // handleClearCart
  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div>
      <div className="cart-totals-container">
        <p>
          cart total: <span>${cartTotal / 100}</span>
        </p>
        <p>
          shipping: <span>${(shipping / 100).toFixed(2)}</span>
        </p>
        <p>
          tax: <span>${(tax / 100).toFixed(2)}</span>
        </p>
        <p className="order-total">
          Order total: <span>${(orderTotal / 100).toFixed(2)}</span>
        </p>
      </div>

      {/* CLEAR CART */}
      <button className="btn clear-cart-btn" onClick={handleClearCart}>
        clear cart
      </button>

      {/* PAYMENT */}
      {user ? (
        <Link to={"/checkout"}>
          <button className="btn hero-btn">Proceed to payment</button>
        </Link>
      ) : (
        <>
          <NavLink to="/login">
            <button className="btn">please login</button>
          </NavLink>
        </>
      )}
    </div>
  );
}

export default CartTotalsContainer;
