/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import { navigate } from "@reach/router";
import {
  Paper,
  Snackbar,
  SnackbarContent,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/material/SvgIcon/SvgIcon";
import { amber, green, red, yellow } from "@mui/material/colors";
import clsx from "clsx";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";
import PropTypes from "prop-types";
import RepairService from "../../../../services/lab4/RepairService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

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

const CodeChangeAccessible = () => {
  const { actions } = useMainStateContext();
  const [textValue, setTextValue] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [message, setMessage] = useState(
    "Please type code before updating code!",
  );

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    Prism.highlightAll();
    if (window.location.state.hint !== undefined) {
      const el0 = document.getElementById("first");
      el0.value = window.location.state.hint;
      doEvent(el0, "input");
    }
  }, []);

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
    console.log("hint updated as: " + textValue);
    if (textValue === "") {
      setMessage("Please type code before updating code!");
      setSnackBarOpen(true);
    } else if (parseInt(textValue) !== 0) {
      setMessage("Please enter value 0");
      setSnackBarOpen(true);
    } else if (!/^\d+$/.test(textValue)) {
      setMessage("Please enter numeric value");
      setSnackBarOpen(true);
    } else {
      window.location.state = {
        hint: textValue,
      };
      RepairService.submitRepairHint(textValue);
      navigate("/Lab4/Exercise/FormHintAccessible");
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
  return (
    <div>
      <h2 className="playthrough__title">Repair</h2>
      <p className="app__instructions">
        The intent of this code repair is to ensure that, wherever possible,
        content can be operated through a keyboard or keyboard interface.
        <br />
        Tabindex=&quot;-1&quot; prevents access through keyboard navigation.
        Tabindex=&quot;2&quot; (positive non-zero) means focusable in sequential
        keyboard navigation, with its order defined by the value of the number.
        Tabindex=&quot;0&quot; means that the element should be focusable in
        sequential keyboard navigation.
      </p>
      <form onSubmit={handleSubmit} noValidate autoComplete={"off"}>
        <Paper style={paperStyle}>
          <pre>
            <code className="language-html">
              {`<form>
  <div>
      <label>Favorite Animal</label>
      <input>
  </div>
  <div>
      <label>Favorite Color</label>
      <div>
          <span tabindex= `}
            </code>
            <input
              type={"text"}
              id="first"
              value={textValue}
              placeholder=""
              onChange={handleChange}
              aria-label={
                "set tab-index to 0 so tooltip can be keyboard accessible"
              }
            />
            <code className="language-html">
              {`>hint</span> /* set tab-index to 0 so tooltip can be keyboard accessible*/
      </div>

      <input>
  </div>
  <div>
      <label>Favorite Candy</label>
      <input>
  </div>
  <div>
      <label>Favorite City</label>
      <input>
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

export default CodeChangeAccessible;
