import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../assets/Logo.png";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import URLs from "../consts/URLs";

export default function HeaderBar() {
  const goToZiadLinkedIn = () => {
    window.open(URLs.ZIAD_LINKEDIN);
  };

  return (
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
      <Toolbar>
        <img src={logo} alt="Repolocator logo" style={{ height: "6rem" }} />

        <Button disableRipple style={{ color: "#ffffff" }} href="/">
          Home
        </Button>
        <Button disableRipple style={{ color: "#ffffff" }} href="/my-repos">
          My Repositories
        </Button>

        <IconButton
          justify="right"
          color="inherit"
          aria-label="linkedIn"
          style={{ marginLeft: "auto" }}
          onClick={goToZiadLinkedIn}
        >
          <LinkedInIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
