import { Box, Grid, Stack, Typography, List, ListItem } from "@mui/material";
import React, { FC } from "react";
import { map } from "lodash";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import StormOutlinedIcon from "@mui/icons-material/StormOutlined";
import { HumidityLabel, HumidityProps } from "@/types";

const Humidity: FC<HumidityProps> = ({
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
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 2) {
    chunkedData.push(data.slice(i, i + 2));
  }

  return (
    <Box sx={{ pt: 4, pb: 4 }}>
      <List>
        {data.map((item: HumidityLabel) => (
          <ListItem
            key={item.id}
            disableGutters
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {item.icons}
              <Box ml={1}>
                <Typography variant="caption">{item.label}</Typography>
                <Typography variant="h6" fontWeight={600}>
                  {item.value}
                </Typography>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Humidity;
