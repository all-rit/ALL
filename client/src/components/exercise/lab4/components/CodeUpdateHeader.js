import React, { useState } from "react";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
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
          <Grid justifyContent={justifyAlignment} container spacing={10}>
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
