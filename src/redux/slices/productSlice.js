import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async action
export const getAllproducts = createAsyncThunk(
  'products/getAllproducts',
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
   sessionStorage.setItem("products", JSON.stringify(result.data.products))

    return result.data.products;
  }
);

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    allproducts: [],
    loading: false,
    error: ""
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllproducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAllproducts.fulfilled, (state, action) => {
        state.allproducts = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(getAllproducts.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong! API call failed...";
      });
  }
});

export default ProductSlice.reducer;
