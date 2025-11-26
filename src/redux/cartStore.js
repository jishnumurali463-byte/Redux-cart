import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/productSlice";
import wishlistSlice from './slices/wishlistSlice'
import cartSlice from './slices/cartSlice'




const cartStore = configureStore({
  reducer: {
    productReducer: ProductSlice,
    wishlistReducer: wishlistSlice,
    cartReducer:cartSlice
  }
});

export default cartStore;
