import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import {
  searchGitHubRepos,
  incrementPageCounter
} from "../redux/actions/actionCreators";

const LoadMore = ({ data, searchGitHubRepos }) => {
  const handleLoadMoreClick = () => {
    searchGitHubRepos(data.searchPhrase, data.pageNumber + 1);
    incrementPageCounter();
  };

  return (
    <Button size="large" color="primary" onClick={handleLoadMoreClick}>
      <strong>Load more...</strong>
    </Button>
  );
};

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = {
  searchGitHubRepos,
  incrementPageCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore);
