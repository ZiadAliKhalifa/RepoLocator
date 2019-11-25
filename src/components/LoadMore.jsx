import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

const handleLoadMoreClick = () => {
  console.log("I have been clicked!");
};

const LoadMore = () => {
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
  //   incrementPageCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore);
