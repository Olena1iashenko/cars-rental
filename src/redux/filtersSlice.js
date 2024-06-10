import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    SetFilterName(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectAllContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filterName) => {
    if (!filterName) {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);

export const { SetFilterName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
