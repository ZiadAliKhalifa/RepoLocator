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
import Footer from "./components/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  fixer: {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  },
  footer: {
    display: "block",
    padding: "20px",
    height: "40px",
    width: "100%"
  }
}));

function App({ data }) {
  const classes = useStyles();
  console.log(data);

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
          {/* <Grid item className={classes.paper} xl={12} sm={12} xs={12}>
            <div className={classes.fixer}>
              <Footer className={classes.footer} />
            </div>
          </Grid> */}
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
