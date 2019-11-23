import React, { useState } from "react";
import { Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <>
      <Input
        id="searchBar"
        value={searchPhrase}
        onChange={e => {
          setSearchPhrase(e.target.value);
        }}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
    </>
  );
};

export default SearchBar;
