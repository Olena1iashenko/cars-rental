import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://6666c3d9a2f8516ff7a4cd74.mockapi.io/advert/",
});

export const fetchAllCarsThunk = createAsyncThunk(
  "cars/fetchAllCars",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("cars");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const filterCarsThunk = createAsyncThunk(
  "cars/filterCars",
  async (carId, thunkApi) => {
    try {
      const { data } = await instance.get(`cars/${carId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const addContactThunk = createAsyncThunk(
//   "contacts/addContact",
//   async (contact, thunkApi) => {
//     try {
//       const { data } = await instance.post("contacts", contact);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkApi) => {
//     try {
//       const { data } = await instance.delete(`contacts/${contactId}`);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
