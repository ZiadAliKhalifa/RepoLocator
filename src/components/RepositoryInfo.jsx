import React from "react";
import Grid from "@material-ui/core/Grid";

import CircularUnderLoad from "./LoadingSpinner";

export default function RepositoryInfo() {
  return (
    <Grid container justify="center">
      <CircularUnderLoad />
    </Grid>
  );
}
