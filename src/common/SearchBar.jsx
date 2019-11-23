import React, { useState } from "react";
import { Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const typingStoppedInterval = 1500; //App will wait for a second and a half after user stopped typing to search
  let timer = null;

  const handleKeyPress = () => {
    if (timer) {
      clearTimeout(timer);
    }
    if (searchPhrase) {
      timer = setTimeout(doneTyping, typingStoppedInterval);
    }
  };

  const handleTextChange = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  const doneTyping = () => {
    //Trigger API call
  };

  return (
    <>
      <Input
        id="searchBar"
        value={searchPhrase}
        style={{ fontSize: 40 }}
        onChange={e => {
          setSearchPhrase(e.target.value);
          handleTextChange();
        }}
        onKeyUp={handleKeyPress}
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
