import React from "react";
import { CircularProgress, Container } from "@mui/material";
import { useStyles } from "@/component/common/style";

const Loader = () => {
  const classes = useStyles;
  return (
    <Container sx={classes.loader}>
      <CircularProgress color="success" />
    </Container>
  );
};

export default Loader;
