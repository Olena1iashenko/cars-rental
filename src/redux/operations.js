import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { setCars } from "./carsSlice";

const instance = axios.create({
  baseURL: "https://6666c3d9a2f8516ff7a4cd74.mockapi.io/advert/",
});

export const fetchAllCarsThunk = createAsyncThunk(
  "cars/fetchAllCars",
  async (page, thunkApi) => {
    try {
      const { data } = await instance.get(`cars?page=${page}&limit=12`);
      // const { data } = await instance.get(`cars`);
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

// export const filterCarsThunk = (filters) => async (dispatch) => {
//   try {
//     const { data } = await instance.get(`cars`, { params: filters });
//     dispatch(setCars(data));
//   } catch (error) {
//     console.error("Error fetching cars:", error);
//   }
// };
