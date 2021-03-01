import React, { Component } from "react";
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
import {GAME_PLAYING} from "../../../../../constants/lab3/index";
import Repair from "../../components/Repair";
import GameButtons from "../../components/GameButtons";
import Popup from "../../components/Popup";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

function MySnackbarContentWrapper(props) {
  const classes = {
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: red
    },
    info: {
      backgroundColor: yellow
    },
    warning: {
      backgroundColor: amber[700]
    },
    icon: {
      fontSize: 10
    },
    iconVariant: {
      opacity: 0.9
    },
    message: {
      display: "flex",
      alignItems: "center"
    }
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
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

class CodeChange extends Component {
  constructor(props) {
    super(props);
    document.body.style = "background: white";
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(GAME_PLAYING);
  }

  static doEvent(obj, event) {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  }

  render() {
    const {
      data, actions
    } = this.props;
    return (
      <div>
        <CodeUpdateHeader
            heading={"Make Code Changes"}
            justifyAlignment={"space-between"}
        />
        <div style={{display:'block', marginBottom:'10px'}}>
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
          First make changes to the code, if not satisfied try again. Then click
          the 'End Activity' button, which will appear when you have made
          changes at least once.
          </Typography>
        </div>
        <div style={{textAlign:'center'}}>
          <Popup message={data.app3.popupMessage} handler={actions.updatePopup} />
          <Repair
            visible={data.repair3.repairVisible}
            data={data.repair3}
            handlers={actions}
        />
        <GameButtons
            repairApplied={data.repair3.changesApplied}
            openRepairHandler={actions.openRepair}
            endEnabled={data.game3.end}
        />
        </div>
      </div>
    );
  }
}

export default CodeChange;
