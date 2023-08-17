import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
}
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
const initialState: WeatherState = {
  data: null,
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
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default weatherSlice;
