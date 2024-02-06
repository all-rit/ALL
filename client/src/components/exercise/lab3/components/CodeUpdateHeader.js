import React from "react";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

/**
 * Renders a header component with a title.
 * @param {Object} props - The component props.
 * @param {string} props.heading - The heading text.
 * @param {string} props.justifyAlignment - The alignment of the heading.
 * @returns {JSX.Element} The rendered header component.
 */
const CodeUpdateHeader = ({ heading, justifyAlignment }) => {
  const appBarStyle = { flexGrow: "1", backgroundColor: "#484848" };
  return (
    <div>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <Grid justifyContent={justifyAlignment} container spacing={10}>
            <Grid item>
              <Typography variant={"h4"} color={"inherit"} aria-label={heading}>
                {heading}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <br />
    </div>
  );
};

CodeUpdateHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  justifyAlignment: PropTypes.string.isRequired,
};

export default CodeUpdateHeader;
