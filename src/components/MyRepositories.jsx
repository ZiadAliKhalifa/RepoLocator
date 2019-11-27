import React, { useState } from "react";
import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import Login from "./Login";

const MyRepositories = () => {
  // Story575}Deep}King

  return (
    <>
      <Login />
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state.userData
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyRepositories);
