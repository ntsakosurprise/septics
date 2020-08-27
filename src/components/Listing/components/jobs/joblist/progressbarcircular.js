import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    // backgroundColor: 'red',
    // height: '100vh',
    width: '80%',
    position: 'relative',
    top: 0,
    textAlign: 'center'
  },
  progressBar: {

    top: '30vh',
    left: '50%',
    position: 'relative',
   
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
