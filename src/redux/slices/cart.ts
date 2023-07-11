import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {typeProduct} from '@/types/products'
import {toast} from 'react-toastify'

interface CartState {
  cartItems: typeProduct[];
  cartTotalQuantity: number;
  cartTotalPrice: number;
}

const cartData: string | null = localStorage.getItem("cartData");

const emptyInitialState: CartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

const initialState: CartState = cartData ? (JSON.parse(cartData) as CartState) : emptyInitialState;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<typeProduct>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const productData = action.payload
        const addProduct = {
          id: productData.id,
          title: productData.title,
          price: productData.price,
          image: productData.image,
          quantity: 1
        }
        state.cartItems.push(addProduct);
      }
      state.cartTotalQuantity += 1;
      state.cartTotalPrice += action.payload.price;
      localStorage.setItem('cartData', JSON.stringify(state));
    },

    increaseQuantity(state, action: PayloadAction<typeProduct>){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity += 1;
      state.cartTotalQuantity += 1;
      state.cartTotalPrice += state.cartItems[itemIndex].price;
      localStorage.setItem('cartData', JSON.stringify(state));
    },

    decreaseQuantity(state, action: PayloadAction<typeProduct>){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity -= 1;
      state.cartTotalQuantity -= 1;
      state.cartTotalPrice -= state.cartItems[itemIndex].price;
      if(state.cartItems[itemIndex].quantity == 0){
        toast.success(`Product ${state.cartItems[itemIndex].title} removed from CART`)
        state.cartItems.splice(itemIndex, 1);
      }
      localStorage.setItem('cartData', JSON.stringify(state));
    },

    removeItemFromCart(state, action: PayloadAction<typeProduct>){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const quantity = state.cartItems[itemIndex].quantity;
      const totalPrice = state.cartItems[itemIndex].price * quantity;
      state.cartTotalQuantity -= quantity;
      state.cartTotalPrice -= totalPrice;
      state.cartItems.splice(itemIndex, 1);
      localStorage.setItem('cartData', JSON.stringify(state));
    },

    removeAllItemsFromCart(state){
      state.cartItems = [];
      state.cartTotalPrice = 0;
      state.cartTotalQuantity = 0;
      localStorage.setItem('cartData', JSON.stringify(state));
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItemFromCart, removeAllItemsFromCart } = cartSlice.actions
export default cartSlice.reducer