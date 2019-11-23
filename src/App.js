import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import SearchBar from "./common/SearchBar";
import CircularUnderLoad from "./common/LoadingSpinner";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  SearchBar: {
    padding: "1rem",
    marginBottom: 2
  }
}));

function App({ data }) {
  const classes = useStyles();
  console.log(data);

  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item className={classes.paper} xl={12} sm={12} xs={12}>
            <SearchBar />
          </Grid>
          {data.isFetching && (
            <Grid
              item
              className={classes.paper}
              xl={12}
              sm={12}
              xs={12}
              style={{ marginTop: "2rem" }}
            >
              <CircularUnderLoad />
            </Grid>
          )}
          {data.isError && (
            <Grid
              item
              className={classes.paper}
              xl={12}
              sm={12}
              xs={12}
              style={{ marginTop: "2rem" }}
            >
              {/* Implement Error Page */}
            </Grid>
          )}
          {data.apiReturn.items && (
            <Grid
              item
              className={classes.paper}
              xl={12}
              sm={12}
              xs={12}
              style={{ marginTop: "2rem" }}
            >
              {/* Implement Display List */}
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(App);
