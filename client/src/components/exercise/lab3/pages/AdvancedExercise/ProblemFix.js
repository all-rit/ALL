import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "../../../../../assets/stylesheets/prism.scss";
import Prism from "prismjs";
import { navigate } from "@reach/router";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import clsx from "clsx";
import Snackbar from "@material-ui/core/Snackbar";
import { amber, green, red, yellow } from "@material-ui/core/colors";
import CodeUpdateHeader from "../../components/CodeUpdateHeader";
import Paper from "@material-ui/core/Paper";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const  MySnackbarContentWrapper = (props) =>{
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

const ProblemFix = () =>{
  const [textValue, setTextValue] = useState("");
  const [textValue1, setTextValue1] = useState("");
  const [open, setOpen] = useState(false);
  const { actions } = useMainStateContext();

  const handleEnd = () => {
    navigate("/Lab3/Exercise/AdvancedExerciseConclusion");
  };

  const handleChange = (event) => {
    setTextValue(event.target.value);
    console.log("handled change value: " + event.target.value);
    Prism.highlightAll();
  };

  const handleChange1 = (event) => {
    setTextValue1(event.target.value);
    console.log("handled change value: " + event.target.value);
    Prism.highlightAll();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    console.log("SnackBar Closed");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Cat Alt Tag updated as: " + textValue);
    console.log("Car Alt Tag updated as: " + textValue1);
    if (
      window.location.state.aria1 != null &&
      window.location.state.aria2 != null &&
      window.location.state.aria1 !== "" &&
      window.location.state.aria2 !== ""
    ) {
      window.location.state = {
        aria1: textValue,
        aria2: textValue1,
      };
      navigate("/Lab3/Exercise/ViewFix");
    } else if (textValue === "" || textValue1 === "") {
      setOpen(true);
    } else {
      window.location.state = {
        aria1: textValue,
        aria2: textValue1,
      };
      navigate("/Lab3/Exercise/ViewFix");
    }
    Prism.highlightAll();
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    const el0 = document.getElementById("first");
    el0.value = window.location.state.aria1;
    doEvent(el0, "input");
    const el1 = document.getElementById("second");
    el1.value = window.location.state.aria2;
    doEvent(el1, "input");
  }, []);

  const doEvent = (obj, event) => {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  };

  const renderButton = () => {
    const buttonEnabled = window.location.state.endAdvancedActivityButtonEnabled;
    const buttonStyle = { marginLeft: "10px" };
    if (buttonEnabled) {
      return (
        <Button
          href="#"
          onClick={handleEnd}
          aria-label={"End Activity"}
          variant={"contained"}
          color={"secondary"}
          style={buttonStyle}
        >
          End Activity
        </Button>
      );
    }
  };

  const paperStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px",
  };

  return (
    <div>
      <CodeUpdateHeader
        heading={"Problem Repair"}
        justifyAlignment={"space-between"}
        helpMessage={"#Placeholder"}
      />
      <Paper style={paperStyle}>
        <Typography
          variant={"subtitle"}
          aria-label={
            "First make changes to the code, if not satisfied try again.\n" +
            "                    Then click the 'End Activity' button which will appear when you have made changes " +
            "at least once."
          }
          color={"inherit"}
          tabIndex={"0"}
        >
          First make changes to the code, if not satisfied try again. Then
          click the &lsquo;End Activity&rsquo; button, which will appear when you have
          made changes at least once.
        </Typography>
      </Paper>
      <Paper style={paperStyle}>
        <Typography
          variant={"subtitle1"}
          aria-label={"Subtitle Instructions"}
          gutterBottom
        >
          Update the aria-tags to repair the accessibility issues.
        </Typography>
        <Typography
          variant={"body1"}
          aria-label={"Body Instructions"}
          gutterBottom
        >
          Make changes and then press update code.
        </Typography>
      </Paper>
      <form onSubmit={handleSubmit} noValidate autoComplete={"off"}>
        <pre>
          <code className="language-html">
            {`
<button aria-label="`}
          </code>
          <input
            type={"text"}
            value={textValue}
            onChange={handleChange}
            aria-label={"Please type in alt tag contents for text field"}
            id={"first"}
          />
          <code>{`">Ok</button>
<button aria-label="`}</code>
          <input
            type={"text"}
            value={textValue1}
            onChange={handleChange1}
            aria-label={"Please type in alt tag contents for text field"}
            id={"second"}
          />
          <code>
            {`">Cancel</button>
`}
          </code>
        </pre>
        <br />
        <Button
          type={"submit"}
          aria-label={"Update Code"}
          variant={"contained"}
          className="btn btn-second btn-xl text-uppercase  leftButton"
        >
          Update Code
        </Button>
        {renderButton()}
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="warning"
          message="Please type code before updating code!"
        />
      </Snackbar>
    </div>
  );
}

export default ProblemFix;
