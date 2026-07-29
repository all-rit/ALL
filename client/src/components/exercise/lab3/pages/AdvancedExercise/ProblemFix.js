/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { Typography } from "@mui/material";
import "../../../../../assets/stylesheets/prism.scss";
import Prism from "prismjs";
import { navigate } from "@reach/router";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/material/SvgIcon/SvgIcon";
import clsx from "clsx";
import Snackbar from "@mui/material/Snackbar";
import { amber, green, red, yellow } from "@mui/material/colors";
import { EXERCISE_PLAYING } from "../../../../../constants/lab3/index";
import HTMLTag from "../../../../all-components/CodeBlock/StyleComponents/HTMLTag";
import CodeLine from "../../../../all-components/CodeBlock/Components/CodeLine";
import CommentText from "../../../../all-components/CodeBlock/StyleComponents/CommentText";

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
        <span
          id="client-snackbar"
          className={classes.message}
          color={amber}
          aria-label={message}
        >
          <Typography variant={"body2"} style={messageStyle} gutterBottom>
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
          size="large"
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

class ProblemFix extends Component {
  handleEnd() {
    navigate("/Lab3/Exercise/AdvancedExerciseConclusion");
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    ProblemFix.renderButton = ProblemFix.renderButton.bind(this);
    if (window.location.state === undefined) {
      window.location.state = { endAdvancedActivityButtonEnabled: false };
      this.state = { textValue: "", textValue1: "" };
    } else {
      window.location.state = {
        endAdvancedActivityButtonEnabled: true,
        aria1: window.location.state.aria1,
        aria2: window.location.state.aria2,
      };
      this.state = {
        textValue: window.location.state.aria1,
        textValue1: window.location.state.aria2,
      };
    }
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    Prism.highlightAll();
    if (
      window.location.state.aria1 !== undefined &&
      window.location.state.aria2 !== undefined
    ) {
      const el0 = document.getElementById("first");
      el0.value = window.location.state.aria1;
      ProblemFix.doEvent(el0, "input");
      const el1 = document.getElementById("second");
      el1.value = window.location.state.aria2;
      ProblemFix.doEvent(el1, "input");
    }
  }

  handleChange(event) {
    this.setState({ textValue: event.target.value }, () => {
      console.log("handled change value: " + this.state.textValue);
      Prism.highlightAll();
    });
  }

  handleChange1(event) {
    this.setState({ textValue1: event.target.value }, () => {
      console.log("handled change value: " + this.state.textValue1);
      Prism.highlightAll();
    });
  }

  handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false }, () => {
      console.log("SnackBar Closed");
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Cat Alt Tag updated as: " + this.state.textValue);
    console.log("Car Alt Tag updated as: " + this.state.textValue1);
    if (
      window.location.state.aria1 != null &&
      window.location.state.aria2 != null &&
      window.location.state.aria1 !== "" &&
      window.location.state.aria2 !== ""
    ) {
      window.location.state = {
        aria1: this.state.textValue,
        aria2: this.state.textValue1,
      };
      navigate("/Lab3/Exercise/ViewFix");
    } else if (this.state.textValue === "" || this.state.textValue1 === "") {
      this.setState({ open: true });
    } else {
      window.location.state = {
        aria1: this.state.textValue,
        aria2: this.state.textValue1,
      };
      navigate("/Lab3/Exercise/ViewFix");
    }
    Prism.highlightAll();
  }

  static doEvent(obj, event) {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  }

  static renderButton() {
    const buttonEnabled =
      window.location.state.endAdvancedActivityButtonEnabled;
    if (buttonEnabled) {
      return (
        <button
          onClick={() => navigate("/Lab3/Exercise/AdvancedExerciseConclusion")}
          aria-label={"End Activity"}
          className={
            "btn btn-xl tw-shadow-md tw-bg-secondary-gray tw-m-3 hover:tw-bg-primary-yellow hover:tw-shadow-lg"
          }
        >
          Complete Activity
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <h2 className={"tw-title tw-text-left"}>Advanced Exercise Repair</h2>
        <br />
        <div>
          <p
            className={"tw-body-text tw-font-medium tw-text-left"}
            aria-label={
              "First make changes to the code, if not satisfied try again.\n" +
              "                    Then click the 'End Activity' button which will appear when you have made changes " +
              "at least once."
            }
          >
            First make changes to the code, if not satisfied try again. Then
            click the 'End Activity' button, which will appear when you have
            made changes at least once.
          </p>
        </div>
        <br />
        <ul className={"tw-px-10"}>
          <li
            className={"tw-body-text tw-font-medium tw-text-left tw-list-disc"}
            aria-label={"Subtitle Instructions"}
          >
            Update the aria-tags to repair the accessibility issues.
          </li>
          <li
            className={"tw-body-text tw-font-medium tw-text-left tw-list-disc"}
            aria-label={"Body Instructions"}
          >
            Make changes and then press update code.
          </li>
        </ul>
        <br />
        <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"}>
          <div
            className={
              "tw-bg-secondary-gray tw-rounded-lg tw-min-h-[10rem] tw-p-6"
            }
          >
            <CodeLine>
              <CommentText>&#47;&#47; Aria Label for the Ok Button</CommentText>
            </CodeLine>
            <CodeLine>
              <HTMLTag>&#60;button aria-label="</HTMLTag>
              <input
                className={
<<<<<<< HEAD
                  "tw-bg-black tw-rounded-md tw-text-primary-yellow code_editor code_editor__input"
=======
                  "tw-bg-secondary-gray tw-rounded-md tw-text-primary-yellow code_editor code_editor__input"
>>>>>>> a1f93297d5b58032f71a700b729806cd88f14691
                }
                type={"text"}
                value={this.state.textValue}
                onChange={this.handleChange}
                aria-label={"Please type in alt tag contents for text field"}
                id={"first"}
              />
              <HTMLTag>"&#62;Ok&#60;/button&#62;</HTMLTag>
            </CodeLine>
            <br />
            <CodeLine>
              <CommentText>
                &#47;&#47; Aria Label for the Cancel Button
              </CommentText>
            </CodeLine>
            <CodeLine>
              <HTMLTag>&#60;button aria-label="</HTMLTag>
              <input
                className={
<<<<<<< HEAD
                  "tw-bg-secondary-black tw-rounded-md tw-text-primary-yellow"
=======
                  "tw-bg-secondary-gray tw-rounded-md tw-text-primary-yellow"
>>>>>>> a1f93297d5b58032f71a700b729806cd88f14691
                }
                type={"text"}
                value={this.state.textValue1}
                onChange={this.handleChange1}
                aria-label={"Please type in alt tag contents for text field"}
                id={"second"}
              />
              <HTMLTag>"&#62;Cancel&#60;/button&#62;</HTMLTag>
            </CodeLine>
          </div>
          <br />
          <button
            type={"submit"}
            aria-label={"Update Code"}
            className={
              "btn btn-xl tw-shadow-md tw-bg-secondary-gray tw-m-3 hover:tw-bg-primary-yellow hover:tw-shadow-lg"
            }
          >
            Update Code
          </button>
          {ProblemFix.renderButton()}
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="warning"
            message="Please type code before updating code!"
          />
        </Snackbar>
      </div>
    );
  }
}

export default ProblemFix;
