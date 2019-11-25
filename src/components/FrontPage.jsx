import React from "react";
import Grid from "@material-ui/core/Grid";
import KeyboardIcon from "@material-ui/icons/Keyboard";

export default function FrontPage() {
  return (
    <Grid container justify="center" style={{ marginTop: "4rem" }}>
      <Grid item sm={1} style={{ marginRight: "1rem" }}>
        <KeyboardIcon fontSize="large" color="primary" />
      </Grid>
      <Grid item sm={11}>
        <h2>Just type in a repo name</h2>
      </Grid>
    </Grid>
  );
}
