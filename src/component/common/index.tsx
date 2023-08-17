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
  // console.log(" weatherData", weatherData);
  // console.log("loading", loading);
  // console.log("error", error);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
  return (
    <BackgroundContainer>
      <Container maxWidth="lg">
        <Search />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={4}
        >
          <Temperature
            location={weatherData?.location.name}
            condition={weatherData?.current.condition.text}
            icon={weatherData.current.condition.icon}
            temperatureC={weatherData.current.temp_c}
          />
          <Humidity
            humidity={weatherData.current.humidity}
            airPressure={weatherData.current.pressure_mb}
            chanceOfRain={weatherData.current.precip_mm}
            windSpeed={weatherData.current.wind_kph}
          />
        </Stack>
        {/* <h2>Current Weather in {weatherData?.location.name}</h2> */}

        {/* <History /> */}
      </Container>
    </BackgroundContainer>
  );
};

export default Common;
