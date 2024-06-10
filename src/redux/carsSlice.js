import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, filterCarsThunk } from "./operations";

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(filterCarsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addMatcher(
        isAnyOf(fetchAllCarsThunk.pending, filterCarsThunk.pending),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchAllCarsThunk.fulfilled, filterCarsThunk.fulfilled),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchAllCarsThunk.rejected, filterCarsThunk.rejected),
        (state, { error }) => {
          state.loading = false;
          state.error = error;
        }
      );
  },
});

export const carsReducer = carsSlice.reducer;
