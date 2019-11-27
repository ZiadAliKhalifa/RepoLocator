import React, { useState } from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setUserToken, getUserRepos } from "../redux/actions/userActions";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const Login = ({ data, getUserRepos, setUserToken }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGoButtonClick = async () => {
    if (username.length < 3 || password.length < 3) {
      toast.error("Username and password are invalid", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }

    //valid username and password
    let basicToken = btoa(username + ":" + password);
    // setUserToken(basicToken);
    getUserRepos(basicToken);
  };

  // Story575}Deep}King

  return (
    <>
      <Grid
        container
        justify="center"
        spacing={0}
        direction="column"
        alignItems="center"
      >
        <Grid item sm={12} xs={12} m={12}>
          <Typography variant="h6" color="textPrimary" component="p">
            Github Credentials
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <TextField
            id="standard-name"
            label="Username"
            className={classes.textField}
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
            margin="normal"
            error={username.length < 3 && username !== ""}
          />
        </Grid>
        <Grid item sm={3}>
          <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            autoComplete="current-password"
            margin="normal"
            error={password.length < 3 && password !== ""}
          />
        </Grid>

        <Grid item sm={12} style={{ marginTop: "2rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGoButtonClick}
          >
            Go!
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = {
  getUserRepos,
  setUserToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
