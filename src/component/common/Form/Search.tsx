import { Box, TextField, Paper, Stack } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "@/component/common/Form/style";

const Search = () => {
  const classes = useStyles;
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
    >
      <form>
        <TextField
          component={Paper}
          fullWidth
          placeholder="Search Weather"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={classes.inputField}
        />
      </form>
    </Stack>
  );
};

export default Search;
