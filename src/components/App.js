import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import withRoot from './withRoot';

import PageLayoutExamples from './PageLayoutExamples';
import Dashboard from './dashboard/Dashboard';
import SignIn from './sign-in/SignIn';
import Blog from './blog/Blog';
import Checkout from './checkout/Checkout';
import Album from './album/Album';
import Pricing from './pricing/Pricing';

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
        <Switch>
          <Route exact path="/" component={PageLayoutExamples} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/Album" component={Album} />
          <Route path="/Pricing" component={Pricing} />
        </Switch>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
