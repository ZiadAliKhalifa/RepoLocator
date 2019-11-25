import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import CircularUnderLoad from "./LoadingSpinner";
import { loadRepositoryInfo } from "../redux/actions/repositoryActions";

export default function RepositoryInfo() {
  useEffect(() => {
    loadRepositoryInfo("gionkunz", "chartist-js");
  }, []);

  return (
    <Grid container justify="center">
      <CircularUnderLoad />
    </Grid>
  );
}
