import { Stack } from "@mui/material";
import React from "react";

const Humidity = () => {
  const data =[{
    id:1,
    label:"Humidity",
    value:"50%",
    icons:""
  },
{
    id:2,
    label:"Humidity",
    value:"50%",
    icons:""
  },
  {
    id:3,
    label:"Chance of Rain",
    value:"50%",
    icons:""
  },
   {
    id:4,
    label:"Wind Speed",
    value:"50%",
    icons:""
  },

]
  return <Stack direction={"column"} spacing={2}>

  </Stack>;
};

export default Humidity;
