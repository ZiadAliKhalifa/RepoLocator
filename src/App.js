import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeaderBar from "./components/Header";
import SearchBar from "./components/SearchBar";
import CircularUnderLoad from "./components/LoadingSpinner";
import RepositoryCard from "./components/RepositoryCard";
import NoReposFound from "./components/NoReposFound";
import ApiFailure from "./components/ApiFailure";
import LoadMore from "./components/LoadMore";
import FrontPage from "./components/FrontPage";
import LoadingSkeleton from "./components/LoadingSpinner";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App({ data }) {
  const classes = useStyles();

  return (
    <div className="App">
      <HeaderBar />
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          spacing={0}
          direction="column"
          alignItems="center"
        >
          <Grid item className={classes.paper} xl={12} sm={12} xs={12}>
            <SearchBar />
          </Grid>
          {!data.isFetching && !data.isError && !data.apiReturn.items && (
            <Grid item className={classes.paper} xl={12} sm={12} xs={12}>
              <FrontPage />
            </Grid>
          )}

          {data.isFetching && (
            <>
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </>
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
              <ApiFailure />
            </Grid>
          )}
          <Grid item>
            {data.apiReturn.items &&
              !data.apiReturn.items.length &&
              !data.isFetching && <NoReposFound />}
            {data.apiReturn.items &&
              data.apiReturn.items.map(item => {
                return (
                  <RepositoryCard item={item} key={item.node_id} id={item.id} />
                );
              })}
          </Grid>
          {data.apiReturn.items && data.apiReturn.items.length > 0 && (
            <Grid item sm={12}>
              <LoadMore />
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
