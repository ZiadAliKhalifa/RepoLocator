import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import {
  searchGitHubRepos,
  setCentralSearchPhrase
} from "../redux/actions/searchActions";

const SearchBar = ({ data, searchGitHubRepos }) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const typingStoppedInterval = 1000; //App will wait for a second and a half after user stopped typing to search
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
    searchGitHubRepos(searchPhrase.trim(), data.pageNumber);
    setCentralSearchPhrase(searchPhrase);
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

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = {
  searchGitHubRepos,
  setCentralSearchPhrase
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
