import React from "react";
import { NavLink, redirect } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

function NavContainer() {
  const totalCartItems = useSelector((state) => state.cartState.totalCartItems);
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  // handleLogout
  function handleLogout() {
    dispatch(clearCart());
    dispatch(logout());
  }

  return (
    <div className="nav-container">
      <nav className="nav center">
        {/* LOGO */}
        <div className="logo">
          <span>anyCart</span>
        </div>

        {/* PAGE LINKS */}
        <ul className="page-links">
          <li className="page-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="page-link">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="page-link">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="page-link">
            <NavLink to="/cart">Cart</NavLink>
          </li>
          {user && (
            <>
              <li className="page-link">
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
            </>
          )}
        </ul>

        {/* OTHER LINKS */}
        <ul className="other-links">
          {/* IF USER IS LOGGED IN, THEN ONLY SHOW THE CART and LOGOUT LINK*/}
          {user ? (
            <>
              {/* CART LINK */}
              <li className="cart-link">
                <NavLink to="/cart">
                  <FaShoppingCart />
                  <span>{totalCartItems}</span>
                </NavLink>
              </li>

              {/* LOGOUT LINK*/}
              <li className="logout-link">
                <NavLink to="/">
                  <button onClick={handleLogout} className="btn hero-btn">
                    logout
                  </button>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="cart-link">
                <NavLink to="/cart">
                  <FaShoppingCart />
                  <span>{totalCartItems}</span>
                </NavLink>
              </li>
              <li className="login-link">
                <NavLink to="/login">login</NavLink>
              </li>
              <li className="register-link">
                <NavLink to="/register">register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavContainer;
