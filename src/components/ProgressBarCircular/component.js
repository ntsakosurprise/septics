import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    backgroundColor: 'white',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    textAlign: 'center'
  },
  progressBar: {

    top: '40vh',
    left: '40%',
    position: 'relative'
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progressBar} />
      {/* <CircularProgress color="secondary" /> */}
    </div>
  );
}
