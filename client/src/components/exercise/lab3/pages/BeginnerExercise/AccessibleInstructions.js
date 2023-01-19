/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab3/index";

class AccessibleInstructions extends Component {
  constructor(props) {
    super(props);
    document.body.style = "background: white";
  }

  handleSubmit() {
    navigate("/Lab3/Exercise/CodeChange");
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }
  render() {
    const paperStyle = {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "20px",
    };
    return (
      <div>
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Typography
              variant={"h4"}
              aria-label={"Instructions"}
              tabIndex={"0"}
              color={"inherit"}
            >
              Instructions
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper style={paperStyle}>
          <Typography
            variant={"h6"}
            aria-label={"Exercise Instructions"}
            tabIndex={"0"}
            paragraph={true}
            display={"block"}
          >
            You clicked on an image. However, without the ability to see, it may
            be difficult to decipher what these images represent. The previous
            page demonstrated how difficult it was to use a page that was
            inaccessible. In order to make the pages readable by a screenreader
            we need to be add 'alt' attributes to content which will help
            improve accessibility.
            <br />
          </Typography>
        </Paper>
        <Paper style={paperStyle}>
          <Typography display={"inline"} variant={"h5"}>
            Note:
          </Typography>
          <Typography
            variant={"h6"}
            aria-label={"Note:"}
            tabIndex={"0"}
            paragraph={true}
            display={"block"}
          >
            In the actual project we will show instructions on how to make the
            page more accessible to users. Participants will also be lead
            through the activity of repairing the code.
          </Typography>
        </Paper>
        <Button
          href="#"
          onClick={this.handleSubmit}
          variant={"contained"}
          className="btn btn-second btn-xl text-uppercase  leftButton"
        >
          Next
        </Button>
      </div>
    );
  }
}

export default AccessibleInstructions;
