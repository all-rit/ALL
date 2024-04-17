/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import Button from "@mui/material/Button";
import { navigate } from "@reach/router";
import Typography from "@mui/material/Typography";

class CatClickFirstNavigate extends Component {
  constructor(props) {
    super(props);
    const { path } = this.props;
    CatClickFirstNavigate.handleOnclick =
      CatClickFirstNavigate.handleOnclick.bind(this, path);
  }

  static handleOnclick(path) {
    console.log(path);
    navigate(path);
  }

  render() {
    const typographyStyle = { color: "white" };
    return (
      <div id={"catClickMessage"}>
        <Typography
          variant={"h6"}
          aria-label={
            "Cat clicked! Please click the 'next' button to continue."
          }
          tabIndex={"0"}
          style={typographyStyle}
        >
          Cat clicked! Please click the 'next' button to continue.
        </Typography>
        <br />
        <Button
          onClick={CatClickFirstNavigate.handleOnclick}
          variant="contained"
          className="btn btn-second btn-xl text-uppercase  leftButton"
        >
          Next
        </Button>
      </div>
    );
  }
}

export default CatClickFirstNavigate;
