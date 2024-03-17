import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavContainer() {
  const totalCartItems = useSelector((state) => state.cartState.totalCartItems);

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
        </ul>

        {/* OTHER LINKS */}
        <ul className="other-links">
          <li className="cart-link">
            <NavLink to="/cart">
              <FaShoppingCart />
              <p>{totalCartItems}</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavContainer;
