import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import {
  searchGitHubRepos,
  incrementPageCounter,
  decrementPageCounter
} from "../redux/actions/searchActions";
import { Chip } from "@material-ui/core";

const LoadMore = ({ data, searchGitHubRepos }) => {
  const handleNextPageClick = () => {
    searchGitHubRepos(data.searchPhrase, data.pageNumber + 1);
    incrementPageCounter();
  };

  const handlePrevPageClick = () => {
    searchGitHubRepos(data.searchPhrase, data.pageNumber - 1);
    decrementPageCounter();
  };

  return (
    <>
      {data.pageNumber > 1 && (
        <>
          <Button size="large" color="primary" onClick={handlePrevPageClick}>
            <strong>Previous page</strong>
          </Button>
          <Chip label={data.pageNumber} color="primary" size="small" />
        </>
      )}

      {data.apiReturn.items.length > 29 && (
        <Button size="large" color="primary" onClick={handleNextPageClick}>
          <strong>Next page</strong>
        </Button>
      )}
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
  incrementPageCounter,
  decrementPageCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore);
