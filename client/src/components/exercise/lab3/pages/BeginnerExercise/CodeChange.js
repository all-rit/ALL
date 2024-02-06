import React, { useEffect } from "react";
import CodeUpdateHeader from "../../components/CodeUpdateHeader";
import "../../../../../assets/stylesheets/prism.scss";
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
import Repair from "../../components/Repair";
import ExerciseButtons from "../../components/ExerciseButtons";
import Popup from "../../../../all-components/Popup";
import useLab3StateContext from "src/reducers/lab3/Lab3Context";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

/**
 * Wrapper component for displaying a snackbar content.
 *
 * @param {Object} props - The component props.
 * @param {string} props.className - The class name for the component.
 * @param {string} props.message - The message to be displayed in the snackbar.
 * @param {function} props.onClose - The callback function to be called when the snackbar is closed.
 * @param {string} props.variant - The variant of the snackbar (success, error, info, warning).
 * @param {Object} props.other - Additional props to be passed to the SnackbarContent component.
 * @returns {JSX.Element} The rendered MySnackbarContentWrapper component.
 */
const MySnackbarContentWrapper = (props) =>{
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

/**
 * Renders the CodeChange component.
 * This component is responsible for displaying the code change section of the exercise.
 * It allows the user to make changes to the code and provides buttons for ending the activity and applying repairs.
 *
 * @returns {JSX.Element} The rendered CodeChange component.
 */
const CodeChange = () => {
  const { actions: mainActions } = useMainStateContext();
  const { state, actions } = useLab3StateContext();

  useEffect(() => {
    mainActions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const doEvent = (obj, event) => {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  };

  return (
    <div>
      <CodeUpdateHeader
        heading={"Make Code Changes"}
        justifyAlignment={"space-between"}
      />
      <div style={{ display: "block", marginBottom: "10px" }}>
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
          click the &rsquo;End Activity&lsquo; button, which will appear when you have
          made changes at least once.
        </Typography>
      </div>
      <div style={{ textAlign: "center" }}>
        <Repair
          visible={state.repairVisible}
          data={state.repair3}
          handlers={actions}
        />

        <Popup
          message={state.popupMessage}
          handler={actions.updatePopup}
          error={state.repairError}
        />

        <ExerciseButtons
          repairApplied={state.changesApplied}
          openRepairHandler={actions.openRepair}
          endEnabled={state.exercise3.end}
          disabled={state.repairError}
        />
      </div>
    </div>
  );
};

export default CodeChange;
