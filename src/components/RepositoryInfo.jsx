import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CircularUnderLoad from "./LoadingSpinner";
import { loadRepositoryInfo } from "../redux/actions/repositoryActions";

export default function RepositoryInfo({ item }) {
  console.log(item);

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item>
        <Typography
          variant="body2"
          color="primary"
          component="p"
          style={{ marginInlineStart: "1rem" }}
        >
          <strong>Created: </strong>
          {moment(item.created_at, "YYYY-MM-DDTHH:mm:ssZ").fromNow()}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color="primary"
          component="p"
          style={{ marginInlineStart: "1rem" }}
        >
          <strong>Updated: </strong>
          {moment(item.updated_at, "YYYY-MM-DDTHH:mm:ssZ").fromNow()}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color="primary"
          component="p"
          style={{ marginInlineStart: "1rem" }}
        >
          <strong>Forks: </strong>
          {item.forks_count}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color="primary"
          component="p"
          style={{ marginInlineStart: "1rem" }}
        >
          <strong>Watchers: </strong>
          {item.watchers}
        </Typography>
      </Grid>

      <Grid item sm={12}>
        <CircularUnderLoad />
      </Grid>
    </Grid>
  );
}
