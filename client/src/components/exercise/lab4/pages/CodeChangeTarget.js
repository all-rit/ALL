/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import Prism from "prismjs";
import { Paper, Button, Snackbar } from "@mui/material";
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
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};
const minMax = {
  min: 44,
  max: 200,
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

const CodeChangeTarget = () => {
  const { actions } = useMainStateContext();

  const [state, setState] = useState({
    textValue: "",
    textValue1: "",
    snackBarOpen: false,
    message: "Please type code before updating code!",
  });

  useEffect(() => {
    if (window.location.state !== undefined) {
      setState({
        textValue: window.location.state.width,
        textValue1: window.location.state.height,
        snackBarOpen: false,
        message: "Please type code before updating code!",
      });
      window.location.state = {
        width: window.location.state.width,
        height: window.location.state.height,
      };
    } else {
      window.location.state = {
        width: null,
        height: null,
      };
    }
    actions.updateUserState(EXERCISE_PLAYING);
    Prism.highlightAll();
    if (
      window.location.state.height !== undefined &&
      window.location.state.width !== undefined
    ) {
      const el0 = document.getElementById("first");
      el0.value = window.location.state.width;
      doEvent(el0, "input");
      const el1 = document.getElementById("second");
      el1.value = window.location.state.height;
      doEvent(el1, "input");
    }
  }, []);

  const handleChange = (event) => {
    setState({ ...state, textValue: event.target.value });
    Prism.highlightAll();
  };

  const handleChange1 = (event) => {
    setState({ ...state, textValue1: event.target.value });
    Prism.highlightAll();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ ...state, snackBarOpen: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Width updated as: " + state.textValue);
    console.log("Height updated as: " + state.textValue1);
    if (state.textValue === "" || state.textValue1 === "") {
      setState({
        ...state,
        message: "Please type code before updating code!",
        snackBarOpen: true,
      });
    } else if (
      parseInt(state.textValue) < minMax.min ||
      parseInt(state.textValue1) < minMax.min
    ) {
      setState({
        ...state,
        message: "Please enter value greater than or equal to " + minMax.min,
        snackBarOpen: true,
      });
    } else if (
      parseInt(state.textValue) > minMax.max ||
      parseInt(state.textValue1) > minMax.max
    ) {
      setState({
        ...state,
        message: "Please enter value less than or equal to " + minMax.max,
        snackBarOpen: true,
      });
    } else if (
      !/^\d+$/.test(state.textValue) ||
      !/^\d+$/.test(state.textValue1)
    ) {
      setState({
        ...state,
        message: "Please enter numeric value",
        snackBarOpen: true,
      });
    } else {
      window.location.state = {
        width: state.textValue,
        height: state.textValue1,
      };
      RepairService.submitRepairButton(state.textValue1, state.textValue);
      navigate("/Lab4/Exercise/SubmitUpdated");
    }
    Prism.highlightAll();
  };

  const doEvent = (obj, event) => {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  };

  const paperStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px",
  };
  console.log("in codechangetarget");
  return (
    <div>
      <h2 className="playthrough__title">Repair</h2>
      <p className="app__instructions">
        The intent of this code repair is to ensure that target sizes are large
        enough for users to easily activate them, especially those with limited
        dexterity. Mice and similar pointing devices can be hard to use for
        these users, and a larger target will help them activate the target.
      </p>
      <form onSubmit={handleSubmit} noValidate autoComplete={"off"}>
        <Paper style={paperStyle}>
          <pre>
            <code className="language-css">
              {`
.button {
  marginRight: 10px;
  marginLeft: 10px;
  min-width: `}
            </code>{" "}
            <input
              type={"text"}
              id="first"
              value={state.textValue}
              placeholder="20"
              onChange={handleChange}
              aria-label={"Please set min width to 40px"}
            />
            <code className="language-css">{` px; /*Set to at least 44px*/
  min-height:`}</code>{" "}
            <input
              type={"text"}
              id="second"
              value={state.textValue1}
              placeholder="17"
              onChange={handleChange1}
              aria-label={"Please set min height to 40px"}
            />
            <code className="language-css">
              {` px; /*Set to at least 44px*/
  fontSize: 10px;
}
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
        open={state.snackBarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="warning"
          message={state.message}
        />
      </Snackbar>
    </div>
  );
};

export default CodeChangeTarget;
