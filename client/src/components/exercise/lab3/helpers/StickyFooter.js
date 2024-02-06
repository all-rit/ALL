import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

/**
 * Returns the styles for the StickyFooter component.
 *
 * @returns {Object} The styles object.
 */
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

/**
 * Renders a sticky footer component.
 * @returns {JSX.Element} The sticky footer component.
 */
const StickyFooter = () => {
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
};
export default StickyFooter;
