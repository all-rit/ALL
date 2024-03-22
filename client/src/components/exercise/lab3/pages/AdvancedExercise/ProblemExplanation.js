/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/material/SvgIcon/";
import { amber, green, red, yellow } from "@mui/material/colors";
import SnackbarContent from "@mui/material/SnackbarContent";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab3/index";
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

function MySnackbarContentWrapper(props) {
  const classes = {
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: red,
    },
    info: {
      backgroundColor: yellow,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 10,
    },
    iconVariant: {
      opacity: 0.9,
    },
    message: {
      display: "flex",
      alignItems: "center",
    },
  };
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
  const messageStyle = { marginLeft: "10px" };
  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message} color={amber}>
          <Typography
            variant={"body2"}
            style={messageStyle}
            aria-label={message}
            gutterBottom
          >
            <Icon className={clsx(classes.icon, classes.iconVariant)} />{" "}
            {message}
          </Typography>
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired,
};
class ProblemExplanation extends Component {
  handleSubmit() {
    navigate("/Lab3/Exercise/ProblemFix");
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }
  render() {
    const textToSpeech = (e, text) => {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };

    return (
      <div>
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography
                  variant={"h4"}
                  aria-label={"Problem Explanation"}
                  gutterBottom
                  tabindex={"0"}
                  onFocus={(e) => textToSpeech(e, "Problem Explanation")}
                >
                  Problem Explanation
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <br></br>
        <Typography
          variant={"subtitle1"}
          aria-label={"Subtitle Instructions"}
          gutterBottom
          tabindex={"0"}
          onFocus={(e) =>
            textToSpeech(e, "How do we make the page more accessible?")
          }
        >
          How do we make the page more accessible?
        </Typography>
        <br />
        <Typography
          variant={"body1"}
          aria-label={"Body Instructions"}
          paragraph={true}
          gutterBottom
          tabindex={"0"}
          onFocus={(e) =>
            textToSpeech(
              e,
              "The problem with the page is that we do not have the required ARIA attributes that make the buttons accessible. They cannot be effectively described by the screenreaders. Specifically, we do not have the aria-label attribute that screenreaders can make use of to read text effectively.",
            )
          }
        >
          The problem with the page is that we do not have the required ARIA
          attributes that make the buttons accessible. They cannot be
          effectively described by the screenreaders. Specifically, we do not
          have the aria-label attribute that screenreaders can make use of to
          read text effectively.
        </Typography>
        <br />
        <Typography
          variant={"body1"}
          aria-label={"Aria Label definition"}
          paragraph={true}
          gutterBottom
          tabindex={"0"}
          onFocus={(e) =>
            textToSpeech(
              e,
              "As per developer.mozilla.org " +
                "The aria-label attribute is used to define a string " +
                "that labels the current element. Use it in cases where a text label is not visible on the screen. " +
                "If there is visible text labeling the element, use aria-labelled by instead. This attribute can be " +
                "used with any typical HTML element; it is not limited to elements that have an ARIA role assigned.",
            )
          }
        >
          As per{" "}
          <Link
            target="_blank"
            href={
              "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/" +
              "ARIA_Techniques/Using_the_aria-label_attribute"
            }
            tabindex={"1"}
          >
            developer.mozilla.org
          </Link>
          :
          <br />
          The aria-label attribute is used to define a string that labels the
          current element. Use it in cases where a text label is not visible on
          the screen. If there is visible text labeling the element, use
          aria-labelledby instead. This attribute can be used with any typical
          HTML element; it is not limited to elements that have an ARIA role
          assigned.
        </Typography>
        <br />
        <Button variant={"text"} onFocus={(e) => textToSpeech(e, "Ok button")}>
          Ok
        </Button>
        <Button
          variant={"text"}
          onFocus={(e) => textToSpeech(e, "Cancel button")}
        >
          Cancel
        </Button>
        <br />
        <Button
          href="#"
          onClick={this.handleSubmit}
          variant={"contained"}
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onFocus={(e) => textToSpeech(e, "Next")}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default ProblemExplanation;
