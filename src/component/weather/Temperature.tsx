import { Box, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { temperature } from "@/types";
import Image from "next/image";

const Temperature: FC<temperature> = ({
  location,
  condition,
  icon,
  temperatureC,
}) => {
  const iconUrl = icon && `https:${icon}`;

  return (
    <Stack
      direction={"column"}
      spacing={0}
      mt={2}
      px={{ xs: 1, sx: 4 }}
      textAlign={"start"}
    >
      <Box height={"66px"}>
        {icon ? (
          <Image
            src={iconUrl}
            width={100}
            height={100}
            style={{ marginBottom: 0 }}
          />
        ) : (
          <CloudQueueOutlinedIcon fontSize={"small"} />
        )}
      </Box>

      <Typography variant={"h6"} fontWeight={600} fontFamily={"roboto"} pt={3}>
        {condition}
      </Typography>
      <Typography
        fontFamily={"roboto"}
        variant={"body2"}
        display="flex"
        alignItems="center"
        pb={2}
      >
        <LocationOnOutlinedIcon fontSize={"12px"} />
        <span> {location}</span>
      </Typography>
      <Typography variant={"h3"} fontWeight={600} fontFamily={"roboto"}>
        {temperatureC} <span>°C</span>
      </Typography>
    </Stack>
  );
};

export default Temperature;
