import { createSlice, createAction } from "@reduxjs/toolkit";

const filterInitialState = {
  items: [],
  liked: true,
  loading: false,
  error: null,
};
export const toggleLike = createAction("toggleLike");

export const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  // reducers: {
  //   toggleLike(state, action) {
  //     const item = state.items.find((item) => item.id === action.payload);
  //     if (item) {
  //       item.liked = !item.liked;
  //     }
  //   },
  // },
});

// export const { toggleLike } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// export const selectAllCars = (state) => state.cars.items;
// export const selectFilter = (state) => state.filters.name;

// export const selectFilteredContacts = createSelector(
//   [selectAllCars, selectFilter],
//   (contacts, filterName) => {
//     if (!filterName) {
//       return contacts;
//     }
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filterName.toLowerCase())
//     );
//   }
// );

// export const { SetFilterName } = filtersSlice.actions;
