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
import React from "react";
import { map } from "lodash";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import StormOutlinedIcon from "@mui/icons-material/StormOutlined";

interface WeatherData {
  id: number;
  label: string;
  value: string;
  icons: JSX.Element;
}
const Humidity = () => {
  const data: WeatherData[] = [
    {
      id: 1,
      label: "Humidity",
      value: "50%",
      icons: <WbSunnyIcon />,
    },
    {
      id: 2,
      label: "Air Pressure",
      value: "1016",
      icons: <StormOutlinedIcon />,
    },
    {
      id: 3,
      label: "Chance of Rain",
      value: "50%",
      icons: <ThunderstormOutlinedIcon />,
    },
    {
      id: 4,
      label: "Wind Speed",
      value: "7.72",
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
