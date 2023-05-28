import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cartState: false,
  cartItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    setRemoveItemFromCart: (state, action) => {
      const removeitem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItem = removeitem;
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
      toast.success(`${action.payload.title} Removed from cart`);
    },
  },
  setIncreasedItemQyt: (state, action) => {
    const itemIndex = state.cartItem.findIndex(
      (item) => item.id === action.payload.id
    );
    if (itemIndex >= 0) {
      state.cartItem[itemIndex].cartQuantity += 1;
      toast.success(`Item QTY increased`);
    }
    localStorage.setItem("cart", JSON.stringify(state.cartItem));
  },
  setDeccreasedItemQyt: (state, action) => { 
     const itemIndex = state.cartItem.findIndex(
          (item) => item.id === action.payload.id
        );
        if (state.cartItem[itemIndex].cartQuantity>1) {
          state.cartItem[itemIndex].cartQuantity -= 1;
          toast.success(`Item QTY Decreased`);
        }
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
  },
  setClearItemQyt: (state, action) => {
       state.cartItem=[]
       toast.success('cart cleared')
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setClearItemQyt,
  setIncreasedItemQyt,
  setDeccreasedItemQyt,
} = CartSlice.actions;
export const selectCartstate = (state) => state.cart.cartState;
export const selectCartItem = (state) => state.cart.cartItem;
export default CartSlice.reducer;
