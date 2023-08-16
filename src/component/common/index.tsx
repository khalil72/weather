import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "@/component/common/style";
import BackgroundContainer from "@/component/common/BackgroundContainer";
import Temperature from "@/component/weather/Temperature";
import Humidity from "@/component/weather/Humidity";
import Search from "@/component/common/Form/Search";
import History from "@/component/weather/History";

const Common = () => {
  const classes = useStyles;
  return (
    <BackgroundContainer>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={4}
        >
          <Temperature />
          <Humidity />
        </Stack>

        <Search />

        <History />
      </Container>
    </BackgroundContainer>
  );
};

export default Common;
