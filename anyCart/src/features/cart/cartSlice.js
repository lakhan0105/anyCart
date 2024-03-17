import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  totalCartItems: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getLS = JSON.parse(localStorage.getItem("cart")) || defaultState;

const cartSlice = createSlice({
  name: "cart",
  initialState: getLS,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      // find item
      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );

      // inc productCOunt if item is already present
      if (item) {
        item.productCount += product.productCount;
      } else {
        // add item if its not present
        state.cartItems.push(product);
      }

      // change other values
      state.totalCartItems += product.productCount;
      state.cartTotal += product.price * product.productCount;
      state.tax += state.cartTotal * 0.1;
      state.orderTotal += state.tax + state.cartTotal + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      // change other values
      state.totalCartItems -= product.productCount;
      state.cartTotal -= product.price * product.productCount;

      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.tax + state.cartTotal + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    editItem: (state, action) => {
      const { cartID, productCount } = action.payload;

      const item = state.cartItems.find((item) => item.cartID === cartID);

      state.totalCartItems += productCount - item.productCount;
      state.cartTotal += item.price * (productCount - item.productCount);
      item.productCount = productCount;

      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.tax + state.cartTotal + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
