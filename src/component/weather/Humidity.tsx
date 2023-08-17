import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { map } from "lodash";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import StormOutlinedIcon from "@mui/icons-material/StormOutlined";
import { HumidityProps } from "@/component/common/type";

interface WeatherData {
  id: number;
  label: string;
  value: string;
  icons: JSX.Element;
}
const Humidity: FC<HumidityProps> = ({
  humidity,
  airPressure,
  chanceOfRain,
  windSpeed,
}) => {
  const data: WeatherData[] = [
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
    <Stack direction={"column"} spacing={2} pt={5}>
      {map(data, (item: WeatherData) => (
        <Box key={item.id}>
          <Stack direction={"row"} spacing={1}>
            {item.icons}
            <Box>
              <Typography variant={"caption"}>{item.label}</Typography>
              <Typography variant={"h6"} fontWeight={600}>
                {item.value}
              </Typography>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default Humidity;
