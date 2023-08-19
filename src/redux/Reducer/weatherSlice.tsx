import { WeatherData } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface WeatherState {
  weatherData: WeatherData | null;
  loading: boolean;
  error: any;
}
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (query: string) => {
    try {
      const apiKey = "b8bde6f5c8564f8c9eb111632231908";
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`
      );
      return data;
    } catch (error) {
      return { status: false, ...error?.response?.data?.error };
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
        state.weatherData = null;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload;
        // console.log("🚀 ~ file: weatherSlice.tsx:42 ~ .addCase ~ data:", data);

        if (data?.status === false) {
          state.error = data;
        } else {
          state.weatherData = action.payload;
        }
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default weatherSlice;
