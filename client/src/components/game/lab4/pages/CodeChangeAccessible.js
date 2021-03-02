import React, { Component } from "react";
import CodeUpdateHeader from "../components/CodeUpdateHeader";
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
import {GAME_PLAYING} from "../../../../constants/lab4";

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

class CodeChangeAccessible extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: "",
            textValue1: "",
            snackBarOpen: false,
            message: "Please type code before updating code!"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        if (window.location.state !== undefined) {
            this.state = {
                textValue: window.location.state.hint,
                snackBarOpen: false,
                message: "Please type code before updating code!"
            };
            window.location.state = {
                hint: window.location.state.hint
            };
        } else {
            window.location.state = {
                hint: null
            };
        }
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_PLAYING);
        Prism.highlightAll();
        if (window.location.state.hint !== undefined) {
            const el0 = document.getElementById("first");
            el0.value = window.location.state.hint;
            CodeChangeAccessible.doEvent(el0, "input");
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
        console.log("hint updated as: " + this.state.textValue);
        if (this.state.textValue === "") {
            this.setState({
                message: "Please type code before updating code!",
                snackBarOpen: true
            });
        } else if (parseInt(this.state.textValue) !== 0) {
            this.setState({ message: "Please enter value 0", snackBarOpen: true });
        } else if (!/^\d+$/.test(this.state.textValue)) {
            this.setState({
                message: "Please enter numeric value",
                snackBarOpen: true
            });
        } else {
            window.location.state = {
                hint: this.state.textValue
            };
            navigate("/Lab4/Game/FormHintAccessible");
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
            marginTop: "20px"
        };
        return (
            <div>
                {/* <CodeUpdateHeader
                    heading={"Make Code Changes"}
                    justifyAlignment={"space-between"}
                    helpMessage={"Set the tabindex to 0 in the code editor."}
                /> */}
                <div className="app__instructions__small2">
                    <h2>Repair</h2><br/>
                    The intent of this code repair is to ensure that, wherever possible,
                    content can be operated through a keyboard or keyboard interface.
                    Tabindex="-1" prevents access through keyboard navigation.
                    Tabindex="2" (positive non-zero) means focusable in sequential
                    keyboard navigation, with its order defined by the value of the
                    number. Tabindex="0" means that the element should be focusable in
                    sequential keyboard navigation.
                </div>
                <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"}>
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
                  value={this.state.textValue}
                  placeholder=""
                  onChange={this.handleChange}
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
                        horizontal: "left"
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

export default CodeChangeAccessible;
