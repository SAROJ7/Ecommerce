import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auctionService } from "./auctionService";
import { toast } from "react-toastify";

export const createAuction = createAsyncThunk(
  "auctions/create-auction",
  async (auctionData, thunkAPI) => {
    try {
      return await auctionService.createAuction(auctionData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAuctions = createAsyncThunk(
  "auction/get-auctions",
  async (thunkAPI) => {
    try {
      return await auctionService.getAuctions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  auctions: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const auctionSlice = createSlice({
  name: "auctions",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAuction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAuction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdAuction = action.payload;
        if (state?.isSuccess) {
          toast.success("Product Deleted from Cart Successfully");
        }
      })
      .addCase(createAuction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("Something went wrong");
        }
      })
      .addCase(getAuctions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAuctions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.auctions = action.payload;
      })
      .addCase(getAuctions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default auctionSlice.reducer;
