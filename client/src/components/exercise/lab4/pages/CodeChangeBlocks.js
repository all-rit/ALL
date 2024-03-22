/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import { navigate } from "@reach/router";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import CheckCircleIcon from "@mui/material/SvgIcon/SvgIcon";
import { amber, green, red, yellow } from "@mui/material/colors";
import SnackbarContent from "@mui/material/SnackbarContent";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import RepairService from "../../../../services/lab4/RepairService";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

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

const CodeChangeBlocks = () => {
  const { actions } = useMainStateContext();

  const [textValue, setTextValue] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [message, setMessage] = useState(
    "Please type code before updating code!",
  );

  const handleChange = (event) => {
    setTextValue(event.target.value);
    console.log("handled change value: " + textValue);
    Prism.highlightAll();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
    console.log("SnackBar Closed");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textValue === "" || textValue === null) {
      setMessage("Please type code before updating code!");
      setSnackBarOpen(true);
    } else {
      window.location.state = {
        role: textValue,
      };
      RepairService.submitRepairSkip(textValue);
      navigate("/Lab4/Exercise/FormSkipToMainFixed");
    }
    Prism.highlightAll();
  };

  const doEvent = (obj, event) => {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    Prism.highlightAll();
    if (window.location.state.role !== undefined) {
      const el0 = document.getElementById("first");
      el0.value = window.location.state.role;
      doEvent(el0, "input");
    }
  }, []);

  const paperStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px",
  };

  return (
    <div>
      <h2 className="playthrough__title">Repair</h2>
      <p className="app__instructions">
        The intent of this code repair is to allow people who navigate
        sequentially through content more direct access to the primary content
        of the Web page and skip over repeated blocks. These include but are not
        limited to navigation links, heading graphics, and advertising frames.
      </p>
      <form onSubmit={handleSubmit} noValidate autoComplete={"off"}>
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
              value={textValue}
              placeholder=""
              onChange={handleChange}
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
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="warning"
          message={message}
        />
      </Snackbar>
    </div>
  );
};

export default CodeChangeBlocks;
