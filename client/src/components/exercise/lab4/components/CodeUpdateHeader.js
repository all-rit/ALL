import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";

class CodeUpdateHeader extends Component {
    constructor(props) {
        super(props);
        this.handleHelpDialogOpen = this.handleHelpDialogOpen.bind(this);
        this.handleHelpDialogClose = this.handleHelpDialogClose.bind(this);
        this.state = { helpDialogOpen: false };
    }

    render() {
        const appBarStyle = { flexGrow: "1" };
        const { heading, justifyAlignment, helpMessage } = this.props;
        return (
            <div>
                <AppBar position="static" color={"primary"} style={appBarStyle}>
                    <Toolbar>
                        <Grid justify={justifyAlignment} container spacing={10}>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.handleHelpDialogOpen}
                                    aria-label={"Help"}
                                >
                                    Help
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant={"h4"}
                                    color={"inherit"}
                                    aria-label={heading}
                                >
                                    {heading}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Dialog
                    open={this.state.helpDialogOpen}
                    onClose={this.handleHelpDialogClose}
                    aria-labelledby="Code Change Help"
                    aria-describedby="Code Change Help Instructions"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Help and Instructions to Change Code"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {helpMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.handleHelpDialogClose}
                            color="primary"
                            autoFocus
                        >
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    handleHelpDialogOpen() {
        this.setState({ helpDialogOpen: true });
    }

    handleHelpDialogClose() {
        this.setState({ helpDialogOpen: false });
    }
}
CodeUpdateHeader.propTypes = {
    heading: PropTypes.string.isRequired,
    justifyAlignment: PropTypes.string.isRequired,
    helpMessage: PropTypes.string.isRequired
};

export default CodeUpdateHeader;