import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/productSlice";
import wishlistSlice from './slices/wishlistSlice'

const cartStore = configureStore({
  reducer: {
    productReducer: ProductSlice,
    wishlistReducer: wishlistSlice
  }
});

export default cartStore;
