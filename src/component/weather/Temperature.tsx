import { Box, Typography } from "@mui/material";
import React from "react";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Temperature = () => {
  return (
    <Box sx={{ mt: 2, px: 4 }}>
      <CloudQueueOutlinedIcon fontSize={"large"} />
      <Typography variant={"h6"} fontWeight={600} fontFamily={"roboto"} pb={0}>
        FOG
      </Typography>
      <Typography
        fontFamily={"roboto"}
        variant={"body2"}
        display="flex"
        alignItems="center"
        pb={2}
      >
        <LocationOnOutlinedIcon fontSize={"12px"} />
        <span> Chakwal</span>
      </Typography>
      <Typography variant={"h3"} fontWeight={600} fontFamily={"roboto"}>
        27 <span>°C</span>
      </Typography>
    </Box>
  );
};

export default Temperature;
