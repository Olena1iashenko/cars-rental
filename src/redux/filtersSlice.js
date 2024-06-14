import { createSlice } from "@reduxjs/toolkit";
import makes from "../../public/makes.json";
const models = makes.map((make) => ({
  id: make,
  make: make,
}));

const initialState = {
  priceRange: "",
  models,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setModel(state, action) {
      state.models = action.payload;
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    },
  },
});

export const { setModel, setPriceRange } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
