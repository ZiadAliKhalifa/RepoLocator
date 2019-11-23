import React from "react";
import Grid from "@material-ui/core/Grid";

import SearchBar from "./common/SearchBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Grid container justify="center">
        <Grid item sm={6}>
          <SearchBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
