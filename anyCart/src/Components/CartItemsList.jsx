import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { editItem, removeItem } from "../features/cart/cartSlice";

function CartItemsList() {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  const dispatch = useDispatch();

  // handleRemove
  function handleRemove(cartID) {
    dispatch(removeItem({ cartID }));
  }

  //  handleEditItem
  function handleEditItem(cartID, productCount) {
    dispatch(editItem({ cartID, productCount }));
  }

  return (
    <div className="cart-items-list">
      <h2 style={{ marginBottom: "1em" }}>Your Cart</h2>

      {cartItems.map((cartItem) => {
        const {
          cartID,
          company,
          image,
          price,
          productCount,
          productID,
          selectedCOlor,
          title,
        } = cartItem;

        return (
          <div key={cartID}>
            <article className="cart-item">
              <div className="img-container">
                <img src={image} alt={title} />
              </div>
              <div className="info">
                <h3 className="cart-item-title">{title}</h3>
                <p className="cart-item-company">{company}</p>

                <Form>
                  <select
                    name="productCount"
                    id="productCount"
                    defaultValue={productCount}
                    onChange={(e) => {
                      const newCount = parseInt(e.target.value);
                      handleEditItem(cartID, newCount);
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </Form>

                <button
                  className="btn remove-btn"
                  onClick={() => {
                    handleRemove(cartID);
                  }}
                >
                  remove
                </button>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

export default CartItemsList;
