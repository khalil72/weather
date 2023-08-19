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
import { toast } from "react-toastify";

const Common = () => {
  const { weatherData, loading, error } = useAppSelector(
    (state) => state.weather
  );

  useEffect(() => {
    if (error) {
      toast.error(error?.message);
    }
  }, [error]);
  return (
    <BackgroundContainer>
      <Container maxWidth="lg">
        <Search />
        {loading ? (
          <Typography>Loading</Typography>
        ) : (
          weatherData && (
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
          )
        )}
      </Container>
    </BackgroundContainer>
  );
};

export default Common;
