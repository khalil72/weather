import { Container, Stack, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";

import BackgroundContainer from "@/component/common/BackgroundContainer";
import Temperature from "@/component/weather/Temperature";
import Humidity from "@/component/weather/Humidity";
import Search from "@/component/common/Form/Search";

import { useAppSelector } from "@/redux/hooks";

import { toast } from "react-toastify";
import Loader from "@/component/common/loader";
import MobileHumidity from "./Mobile";

const Common = () => {
  const { weatherData, loading, error } = useAppSelector(
    (state) => state.weather
  );

  useEffect(() => {
    if (error) {
      toast.error(error?.message);
    }
  }, [error]);

  const isMobileScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  return (
    <BackgroundContainer>
      <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 10 } }}>
        <Search />
        {loading ? (
          <Loader />
        ) : (
          weatherData && (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Temperature
                location={weatherData?.location.name}
                condition={weatherData?.current.condition.text}
                icon={weatherData.current.condition.icon}
                temperatureC={weatherData.current.temp_c}
              />

              {isMobileScreen ? (
                <MobileHumidity
                  humidity={weatherData.current.humidity}
                  airPressure={weatherData.current.pressure_mb}
                  chanceOfRain={weatherData.current.precip_mm}
                  windSpeed={weatherData.current.wind_kph}
                />
              ) : (
                <Humidity
                  humidity={weatherData.current.humidity}
                  airPressure={weatherData.current.pressure_mb}
                  chanceOfRain={weatherData.current.precip_mm}
                  windSpeed={weatherData.current.wind_kph}
                />
              )}
            </Stack>
          )
        )}
      </Container>
    </BackgroundContainer>
  );
};

export default Common;
