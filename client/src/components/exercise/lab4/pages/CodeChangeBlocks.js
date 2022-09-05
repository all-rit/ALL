import React, { Component } from "react";
import Prism from "prismjs";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { amber, green, red, yellow } from "@material-ui/core/colors";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { EXERCISE_PLAYING } from "../../../../constants/lab4";
import RepairService from "../../../../services/lab4/RepairService";

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

class CodeChangeBlocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      snackBarOpen: false,
      message: "Please type code before updating code!",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    if (window.location.state !== undefined) {
      this.state = {
        textValue: window.location.state.role,
        snackBarOpen: false,
        message: "Please type code before updating code!",
      };
      window.location.state = {
        role: window.location.state.role,
      };
    } else {
      window.location.state = {
        role: null,
      };
    }
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    Prism.highlightAll();
    if (window.location.state.role !== undefined) {
      const el0 = document.getElementById("first");
      el0.value = window.location.state.role;
      CodeChangeBlocks.doEvent(el0, "input");
    }
  }

  handleChange(event) {
    this.setState({ textValue: event.target.value }, () => {
      console.log("handled change value: " + this.state.textValue);
      Prism.highlightAll();
    });
  }

  handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackBarOpen: false }, () => {
      console.log("SnackBar Closed");
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.textValue === "" || null) {
      this.setState({
        message: "Please type code before updating code!",
        snackBarOpen: true,
      });
    } else {
      window.location.state = {
        role: this.state.textValue,
      };
      RepairService.submitRepairSkip(this.state.textValue);
      navigate("/Lab4/Exercise/FormSkipToMainFixed");
    }
    Prism.highlightAll();
  }

  static doEvent(obj, event) {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  }

  render() {
    const paperStyle = {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "20px",
    };
    return (
      <div>
        {/* <CodeUpdateHeader
                    heading={"Make Code Changes"}
                    justifyAlignment={"space-between"}
                    helpMessage={"Copy the code from the comment at the top of the code editor, and paste it into the input field in the code editor."}
                /> */}
        <h2 className="playthrough__title">Repair</h2>
        <p className="app__instructions">
          The intent of this code repair is to allow people who navigate
          sequentially through content more direct access to the primary content
          of the Web page and skip over repeated blocks. These include but are
          not limited to navigation links, heading graphics, and advertising
          frames.
        </p>
        <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"}>
          <Paper style={paperStyle}>
            <pre>
              <code className="language-html">
                {`/* add the following in the input: <a className="skip-main" href="#main">Skip to main content</a> */
`}
              </code>
              <input
                type={"text"}
                id="first"
                style={{ width: "600px" }}
                value={this.state.textValue}
                placeholder=""
                onChange={this.handleChange}
                aria-label={
                  'add the following: <a className="skip-main" href="#main">Skip to main content</a>'
                }
              />

              <code className="language-html">
                {`
<div>
    <header>...</header>
</div>
<div>
    <nav>...</nav>
</div>
    <form id="main">...</form>
</div>
                        `}
              </code>
            </pre>
          </Paper>
          <br />
          <br />
          <Button
            type={"submit"}
            aria-label={"Update Code"}
            variant={"contained"}
            color={"primary"}
          >
            Update Code
          </Button>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.snackBarOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="warning"
            message={this.state.message}
          />
        </Snackbar>
      </div>
    );
  }
}

export default CodeChangeBlocks;
