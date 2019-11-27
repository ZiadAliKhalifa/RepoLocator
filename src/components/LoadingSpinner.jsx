import React from "react";

import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

export function LoadingSkeleton() {
  return (
    <Grid item xl={12} sm={12} xs={12}>
      <Skeleton variant="rect" width={900} height={130} />
      <Box pt={0.5}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Grid>
  );
}

export function LoadingSpinner() {
  return <CircularProgress />;
}
