import React, { useState } from "react";
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

const CodeUpdateHeader = ({ heading, justifyAlignment, helpMessage }) => {
  const [helpDialogOpen, setHelpDialogOpen] = useState(false);

  const handleHelpDialogOpen = () => {
    setHelpDialogOpen(true);
  };

  const handleHelpDialogClose = () => {
    setHelpDialogOpen(false);
  };

  const appBarStyle = { flexGrow: "1" };

  return (
    <div>
      <AppBar position="static" color={"primary"} style={appBarStyle}>
        <Toolbar>
          <Grid justify={justifyAlignment} container spacing={10}>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleHelpDialogOpen}
                aria-label={"Help"}
              >
                Help
              </Button>
            </Grid>
            <Grid item>
              <Typography variant={"h4"} color={"inherit"} aria-label={heading}>
                {heading}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Dialog
        open={helpDialogOpen}
        onClose={handleHelpDialogClose}
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
          <Button onClick={handleHelpDialogClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

CodeUpdateHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  justifyAlignment: PropTypes.string.isRequired,
  helpMessage: PropTypes.string.isRequired,
};

export default CodeUpdateHeader;
