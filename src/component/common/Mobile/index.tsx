import React, { FC } from "react";
import { Box, Grid, Stack, Typography, List, ListItem } from "@mui/material";

import { map } from "lodash";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import StormOutlinedIcon from "@mui/icons-material/StormOutlined";
import { HumidityLabel, HumidityProps } from "@/types";
const MobileHumidity: FC<HumidityProps> = ({
  humidity,
  airPressure,
  chanceOfRain,
  windSpeed,
}) => {
  const data: HumidityLabel[] = [
    {
      id: 1,
      label: "Humidity",
      value: `${humidity}%`,
      icons: <WbSunnyIcon />,
    },
    {
      id: 2,
      label: "Air Pressure",
      value: `${airPressure} mb`,
      icons: <StormOutlinedIcon />,
    },
    {
      id: 3,
      label: "Chance of Rain",
      value: `${chanceOfRain} mm`,
      icons: <ThunderstormOutlinedIcon />,
    },
    {
      id: 4,
      label: "Wind Speed",
      value: `${windSpeed} km/h`,
      icons: <AirOutlinedIcon />,
    },
  ];
  return (
    <Grid container spacing={2} pt={4}>
      {data.map((item: HumidityLabel) => (
        <Grid item key={item.id} xs={6} sm={12}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: "center",
              textAlign: "start",
            }}
          >
            {item.icons}
            <Box>
              <Typography variant="caption">{item.label}</Typography>
              <Typography variant="h6" fontWeight={600}>
                {item.value}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default MobileHumidity;
