import React from "react";
import Grid from "@material-ui/core/Grid";
import mario from "../assets/mario.png";

export default function NoReposFound() {
  return (
    <>
      <Grid container justify="center" style={{ marginTop: "2rem" }}>
        <Grid item sm={8}>
          <p style={{ fontSize: "1rem" }}>
            Your princess must be in another castle!
          </p>
        </Grid>
        <Grid item sm={4}>
          <img
            src={mario}
            alt="Mario"
            style={{ height: "5rem", width: "3rem" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
