import React from "react";
import Snackbar from "@mui/material/Snackbar";
import useMainStateContext from "../../reducers/MainContext";
import { SUCCESS, ERROR } from "../../constants/notifications";
import SnackbarContent from "@mui/material/SnackbarContent";

const ALLSnackbar = () => {
  const { state, actions } = useMainStateContext();

  const snackbarColor = () => {
    switch (state.main.snackbar.notificationType) {
      case SUCCESS:
        return "#369d2a";
      case ERROR:
        return "#d03c3c";
      default:
        return "#014ff0";
    }
  };

  return (
    <Snackbar
      open={state.main.snackbar.open}
      autoHideDuration={5000}
      onClose={actions.hideSnackbar}
      anchorOrigin={{
        vertical: state.main.snackbar.yPosition || "bottom",
        horizontal: state.main.snackbar.xPosition || "left",
      }}
      style={{ height: 100, width: 700 }}
    >
      <SnackbarContent
        sx={{
          backgroundColor: snackbarColor(),
          color: "white",
          fontFamily: "Poppins, sans-serif",
          minHeight: 80,
          minWidth: 250,
          fontSize: 20,
        }}
        message={state.main.snackbar.message}
      />
    </Snackbar>
  );
};

export default ALLSnackbar;
