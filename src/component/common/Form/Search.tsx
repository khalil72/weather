import { TextField, Paper, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "@/component/common/Form/style";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux/hooks";
import { fetchWeather } from "@/redux/Reducer/weatherSlice";

const Search = () => {
  const classes = useStyles;
  const [SearchQuery, setQuery] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather("pakistan"));
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SearchQuery:", SearchQuery);

    try {
      await dispatch(fetchWeather(SearchQuery));
    } catch (error) {
      toast.error("Error fetching weather data");
    }
  };
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
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
      </Grid>
    </Grid>
  );
};

export default Search;
