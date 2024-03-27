/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

class CodeUpdateHeader extends Component {
  render() {
    const appBarStyle = { flexGrow: "1", backgroundColor: "#484848" };
    const { heading, justifyAlignment } = this.props;
    return (
      <div>
        <AppBar position="static" style={appBarStyle}>
          <Toolbar>
            <Grid justifyContent={justifyAlignment} container spacing={10}>
              <Grid item>
                <Typography
                  variant={"h4"}
                  color={"inherit"}
                  aria-label={heading}
                >
                  {heading}
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <br />
      </div>
    );
  }
}
CodeUpdateHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  justifyAlignment: PropTypes.string.isRequired,
};
export default CodeUpdateHeader;
