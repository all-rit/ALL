/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "../../../../../assets/stylesheets/prism.scss";
import { CheckCircleIcon } from "@mui/material";
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
import { EXERCISE_PLAYING } from "../../../../../constants/lab3/index";
import Repair from "../../components/Repair";
import ExerciseButtons from "../../components/ExerciseButtons";
import Popup from "../../../../all-components/Popup";

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

class CodeChange extends Component {
  constructor(props) {
    super(props);
    document.body.style = "background: white";
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }

  static doEvent(obj, event) {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  }

  render() {
    const { data, actions } = this.props;
    return (
      <div className={"tw-p-10 tw-text-left tw-flex tw-flex-col"}>
        <h2 className={"tw-title"}> Repair </h2>
        <br />
        <div>
          <p
            className={"tw-body-text tw-font-medium"}
            aria-label="First make changes to the code, if not satisfied try again. Then
              click the 'End Activity' button which will appear when you have made
              changes at least once."
          >
            First make changes to the code, if not satisfied try again. Then
            click the 'End Activity' button, which will appear when you have
            made changes at least once.
          </p>
        </div>
        <br />
        <Popup
          message={data.app3.popupMessage}
          handler={actions.updatePopup}
          error={data.repair3.repairError}
        />

        <div className={"tw-flex tw-flex-row tw-justify-center tw-gap-x-4"}>
          <ExerciseButtons
            repairApplied={data.repair3.changesApplied}
            openRepairHandler={actions.openRepair}
            endEnabled={data.exercise3.end}
            disabled={this.props.data.repair3.repairError}
          />
        </div>
        <div className={"tw-flex tw-flex-col tw-justify-around"}>
          <Repair
            visible={data.repair3.repairVisible}
            data={data.repair3}
            handlers={actions}
          />
        </div>
      </div>
    );
  }
}

export default CodeChange;
