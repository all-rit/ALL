/* eslint-disable require-jsdoc */
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "40vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Divider light />
        <br />
        <Container maxWidth="xs">
          <Typography
            variant="body1"
            color="textSecondary"
            aria-label={"Accessibility Learning Labs Footer"}
          ></Typography>
        </Container>
      </footer>
    </div>
  );
}
