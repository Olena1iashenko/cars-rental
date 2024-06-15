import { createSlice, createAction, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, filterCarsThunk } from "./operations";

const carsInitialState = {
  items: [],
  liked: false,
  loading: false,
  error: null,
};

export const toggleLike = createAction("toggleLike");
function saveLike(id) {
  let likes = JSON.parse(localStorage.getItem("likes")) || [];
  if (!likes.includes(id)) {
    likes.push(id);
    localStorage.setItem("likes", JSON.stringify(likes));
  }
}

function removeLike(id) {
  let likes = JSON.parse(localStorage.getItem("likes")) || [];
  if (likes.includes(id)) {
    likes = likes.filter((item) => item !== id);
    localStorage.setItem("likes", JSON.stringify(likes));
  }
}

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(toggleLike, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload);
        if (item) {
          item.liked = !item.liked;
          if (item.liked) {
            saveLike(item.id);
          } else {
            removeLike(item.id);
          }
        }
      })
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

// export const { setCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
