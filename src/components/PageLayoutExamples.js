import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const styles = {
  item: {
    flexGrow: 1,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    height: 0,
    paddingTop: '65%',
  },
};

const themes = [
  {
    name: 'Dashboard',
    description:
      'A minimal dashboard with taskbar and mini variant draw. ' +
      'The chart is courtesy of Recharts, but it is simple to substitute an alternative.',
    src: '/static/images/layouts/dashboard.png',
    href: '/dashboard',
    source: '/dashboard',
    link: props => <Link to="/dashboard" {...props} />,
  },
  {
    name: 'Sign-in',
    description: 'A simple sign-in page.',
    src: '/static/images/layouts/sign-in.png',
    href: '/sign-in',
    source: '/sign-in',
    link: props => <Link to="/sign-in" {...props} />,
  },
  {
    name: 'Blog',
    description:
      'A sophisticated blog page layout. Markdown support is courtesy of react-markdown, ' +
      'but is easily replaced.',
    src: '/static/images/layouts/blog.png',
    href: '/blog',
    source: '/blog',
    link: props => <Link to="/blog" {...props} />,
  },
  {
    name: 'Checkout',
    description:
      'A step-by-step checkout page layout. ' +
      'Adapt the number of steps to suit your needs, or make steps optional.',
    src: '/static/images/layouts/checkout.png',
    href: '/checkout',
    source: '/checkout',
    link: props => <Link to="/checkout" {...props} />,
  },
  {
    name: 'Album',
    description:
      'A reponsive album / gallery page layout with a hero unit and footer.',
    src: '/static/images/layouts/album.png',
    href: '/album',
    source: '/album',
    link: props => <Link to="/album" {...props} />,
  },
  {
    name: 'Pricing',
    description:
      'Quickly build an effective pricing table for your potential customers with this page ' +
      'layout.',
    src: '/static/images/layouts/pricing.png',
    href: '/pricing',
    source: '/pricing',
    link: props => <Link to="/pricing" {...props} />,
  },
];

function PageLayoutExamples(props) {
  const { classes } = props;
  return (
    <Grid container spacing={16}>
      {themes.map(theme => (
        <Grid item sm={6} md={4} className={classes.item} key={theme.name}>
          <Card className={classes.card}>
            <CardMedia
              component={theme.link}
              className={classes.cardMedia}
              image={theme.src}
              title={theme.name}
              // target="_blank"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="headline"
                align="left"
                component="h2"
              >
                {theme.name}
              </Typography>
              <Typography component="p">{theme.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                component={theme.link}
                size="small"
                color="primary"
                // target="_blank"
              >
                Go to - {theme.name}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

PageLayoutExamples.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageLayoutExamples);
