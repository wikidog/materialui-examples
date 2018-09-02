import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import withRoot from './withRoot';

const styles = theme => ({
  root: {
    // display: 'flex',
    // alignItems: 'stretch',
    // minHeight: '100vh',
    // width: '100%',
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
