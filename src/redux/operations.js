import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://6666c3d9a2f8516ff7a4cd74.mockapi.io/advert/",
});

export const fetchAllCarsThunk = createAsyncThunk(
  "cars/fetchAllCars",
  async (page, thunkApi) => {
    try {
      const { data } = await instance.get(`cars?page=${page}&limit=12`);
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
