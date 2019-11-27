import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SearchBar from "./SearchBar";
import RepositoryCard from "./RepositoryCard";
import NoReposFound from "./NoReposFound";
import ApiFailure from "./ApiFailure";
import LoadMore from "./LoadMore";
import FrontPage from "./FrontPage";
import { LoadingSkeleton } from "./LoadingSpinner";

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

const SearchComponent = ({ data }) => {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(SearchComponent);
