import React from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CircularUnderLoad from "./LoadingSpinner";
import { loadRepositoryInfo } from "../redux/actions/repositoryActions";

export default function RepositoryInfo({ item, readmeObject }) {
  console.log(item);
  console.log(readmeObject);

  // useEffect((),[readmeObject])

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item>
        <Typography variant="body2" color="primary" component="p">
          <strong>Created: </strong>
          {moment(item.created_at, "YYYY-MM-DDTHH:mm:ssZ").fromNow()}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" color="primary" component="p">
          <strong>Updated: </strong>
          {moment(item.updated_at, "YYYY-MM-DDTHH:mm:ssZ").fromNow()}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" color="primary" component="p">
          <strong>Forks: </strong>
          {item.forks_count}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" color="primary" component="p">
          <strong>Watchers: </strong>
          {item.watchers}
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body2" color="primary" component="p">
          <strong>Default branch: </strong>
          {item.default_branch}
        </Typography>
      </Grid>

      {/* {readmeObject && (
        <Grid item sm={12} xs={12}>
          <CircularUnderLoad />
         </Grid>

         <ReactMarkdown source={readmeObject} />
       )} */}
    </Grid>
  );
}
