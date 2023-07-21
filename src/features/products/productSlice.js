import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { productService } from "./productservice";

export const getALLProducts = createAsyncThunk(
  "auth/register",
  async (thunkAPI) => {
    try {
      return await productService.getProducts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
const productState ={
    product:"",
    isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}
export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getALLProducts.pending, (state) => {
        state.isLoading = true;
      }).addCase(getALLProducts.fulfilled, (state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.product=action.payload;
      }).addCase(getALLProducts.rejected, (state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.isSuccess=false;
        state.message=action.error;
      })
  },
});
export default productSlice.reducer;
 