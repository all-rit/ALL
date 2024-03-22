import React from "react";
import Toolbar from "@mui/core/Toolbar";
import Grid from "@mui/core/Grid";

const Header = () => {
  return (
    <Toolbar>
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item />
      </Grid>
    </Toolbar>
  );
};

export default Header;
