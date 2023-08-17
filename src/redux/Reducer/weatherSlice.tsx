import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

interface WeatherState {
  weatherData: any;
  loading: boolean;
  error: any;
}
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    try {
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=pakistan&aqi=yes`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
const initialState: WeatherState = {
  weatherData: null,
  loading: false,
  error: null,
};
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice;
