import { Box, TextField, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "@/component/common/Form/style";
import { toast } from "react-toastify";

const Search = () => {
  const classes = useStyles;
  const [SearchQuery, setQuery] = useState<string>("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SearchQuery:", SearchQuery);
    const dummyData = [
      { id: 1, name: "New York", weather: "Cloudy" },
      { id: 2, name: "Los Angeles", weather: "Sunny" },
      { id: 3, name: "Chicago", weather: "Rainy" },
    ];
    const filteredData = dummyData.filter((item) =>
      item.name.toLowerCase().includes(SearchQuery.toLowerCase())
    );

    if (filteredData.length > 0) {
      console.log("Search results:", filteredData);
    } else {
      toast.error("No matching results found");
    }
  };
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
    >
      <form onSubmit={handleSearch}>
        <TextField
          component={Paper}
          fullWidth
          placeholder="Search Weather"
          value={SearchQuery}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
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
