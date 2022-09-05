import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

class Header extends Component {
  render() {
    return (
      <Toolbar>
        <Grid justify="space-between" container spacing={10}>
          <Grid item />
        </Grid>
      </Toolbar>
    );
  }
}

export default Header;
