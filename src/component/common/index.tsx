import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useStyles } from "@/component/common/style";
import BackgroundContainer from "@/component/common/BackgroundContainer";
import Temperature from "@/component/weather/Temperature";
import Humidity from "@/component/weather/Humidity";
import Search from "@/component/common/Form/Search";
import History from "@/component/weather/History";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchWeather } from "@/redux/Reducer/weatherSlice";

const Common = () => {
  const dispatch = useAppDispatch();
  const { weatherData, loading, error } = useAppSelector(
    (state) => state.weather
  );
  console.log(" weatherData", weatherData);
  console.log("loading", loading);
  console.log("error", error);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
  return (
    <BackgroundContainer>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={4}
        >
          <Temperature />
          <Humidity />
        </Stack>
        <h2>Current Weather in {weatherData?.location.name}</h2>

        <Search />

        {/* <History /> */}
      </Container>
    </BackgroundContainer>
  );
};

export default Common;
