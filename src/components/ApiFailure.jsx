import React from "react";
import Grid from "@material-ui/core/Grid";
import wall from "../assets/wall.jpg";

export default function ApiFailure() {
  return (
    <>
      <Grid container justify="center" style={{ marginTop: "2rem" }}>
        <Grid item sm={8}>
          <p style={{ fontSize: "1rem" }}>
            Appears that I have hit a brick wall
          </p>
        </Grid>
        <Grid item sm={4}>
          <img
            src={wall}
            alt="Red wall"
            style={{ height: "4rem", width: "7rem" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
