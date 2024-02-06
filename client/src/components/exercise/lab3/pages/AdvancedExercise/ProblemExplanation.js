import React, { useEffect } from "react";
import { AppBar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import CheckCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { amber, green, red, yellow } from "@material-ui/core/colors";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import Link from "@material-ui/core/Link";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

/**
 * Renders a custom Snackbar content wrapper component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.className - The class name for the component.
 * @param {string} props.message - The message to be displayed in the Snackbar.
 * @param {function} props.onClose - The function to be called when the Snackbar is closed.
 * @param {string} props.variant - The variant of the Snackbar (success, error, info, warning).
 * @param {Object} props.other - Additional props to be spread to the underlying SnackbarContent component.
 * @returns {JSX.Element} The rendered MySnackbarContentWrapper component.
 */
const MySnackbarContentWrapper = (props) => {
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
};

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired,
};

/**
 * Renders the problem explanation page.
 *
 * @returns {JSX.Element} The problem explanation component.
 */
const ProblemExplanation = () => {
  const { actions } = useMainStateContext();
  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  /**
   * Handles the form submission and navigates to the "/Lab3/Exercise/ProblemFix" page.
   */
  const handleSubmit = () => {
    navigate("/Lab3/Exercise/ProblemFix");
  };

  /**
   * Converts the given text to speech using the browser's speech synthesis API.
   * @param {Event} e - The event object.
   * @param {string} text - The text to be converted to speech.
   */
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
                tabIndex={"0"}
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
        tabIndex={"0"}
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
        tabIndex={"0"}
        onFocus={(e) =>
          textToSpeech(
            e,
            "The problem with the page is that we do not have the required ARIA attributes that make the buttons accessible. They cannot be effectively described by the screenreaders. Specifically, we do not have the aria-label attribute that screenreaders can make use of to read text effectively."
          )
        }
      >
        The problem with the page is that we do not have the required ARIA
        attributes that make the buttons accessible. They cannot be effectively
        described by the screenreaders. Specifically, we do not have the
        aria-label attribute that screenreaders can make use of to read text
        effectively.
      </Typography>
      <br />
      <Typography
        variant={"body1"}
        aria-label={"Aria Label definition"}
        paragraph={true}
        gutterBottom
        tabIndex={"0"}
        onFocus={(e) =>
          textToSpeech(
            e,
            "As per developer.mozilla.org " +
              "The aria-label attribute is used to define a string " +
              "that labels the current element. Use it in cases where a text label is not visible on the screen. " +
              "If there is visible text labeling the element, use aria-labelled by instead. This attribute can be " +
              "used with any typical HTML element; it is not limited to elements that have an ARIA role assigned."
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
          tabIndex={"1"}
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
        onClick={handleSubmit}
        variant={"contained"}
        className="btn btn-second btn-xl text-uppercase  leftButton"
        onFocus={(e) => textToSpeech(e, "Next")}
      >
        Next
      </Button>
    </div>
  );
};

export default ProblemExplanation;
