import React, { useState, Component } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

import Login from "./Login";
import LoadingSkeleton from "../components/LoadingSpinner";
import RepositoryCard from "../components/RepositoryCard";
import NoReposFound from "./NoReposFound";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

const MyRepositories = ({ data }) => {
  const classes = useStyles();
  const [userSubmittedCredentials, setUserSubmittedCredentials] = useState(
    false
  );

  return (
    <>
      <Grid
        container
        justify="center"
        spacing={0}
        direction="column"
        alignItems="center"
      >
        {userSubmittedCredentials && (
          <Grid item className={classes.paper} xl={12} sm={12} xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={e => {
                setUserSubmittedCredentials(false);
              }}
            >
              Change Credentials
            </Button>
          </Grid>
        )}
        {!userSubmittedCredentials && (
          <Grid item className={classes.paper} xl={12} sm={12} xs={12}>
            <Login setUserSubmittedCredentials={setUserSubmittedCredentials} />
          </Grid>
        )}
        <Grid item xl={12} sm={12} xs={12}>
          {userSubmittedCredentials &&
            !data.userData.userApiReturn.length &&
            data.userData.isFetchingUserRepos && (
              <>
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
              </>
            )}
        </Grid>
        {userSubmittedCredentials && (
          <Grid item className={classes.paper} xl={12} sm={12} xs={12}>
            {data.userData.userApiReturn &&
              data.userData.userApiReturn.length &&
              data.userData.userApiReturn.map(item => {
                return (
                  <RepositoryCard item={item} key={item.node_id} id={item.id} />
                );
              })}
          </Grid>
        )}

        {userSubmittedCredentials && (
          <Grid item className={classes.paper} xl={12} sm={12} xs={12}>
            {data.userData.userApiReturn &&
              !data.userData.userApiReturn.length && <NoReposFound />}
          </Grid>
        )}
      </Grid>
    </>
  );
};

// Right here the userData is being shallow clones with {...} spread operator
// Which means that it is being copied by Reference.
// That is why I have to bring the whole state into this Component, to detect
// change in the state

// That was less over head than implementing deep clone

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyRepositories);
