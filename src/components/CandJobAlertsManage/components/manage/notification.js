import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      
    },

  },
  snack: {
      width: 1300,
      height: '10rem',
      position: 'absolute',
      bottom: '-5vh',
      textAlign: 'justify',
      fontSize: '1.5rem',
      paddingTop: '3rem'


  }
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.closeSnackBar()
    setOpen(false);
  };

  const renderSnack = (openBar,type,message='')=>{

    return(

        <Snackbar open={openBar} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} className={classes.snack} severity={type}>
                <span style={{position:'absolute',left: '40%',top: '2vh'}}>{message}</span>
            </Alert>
        </Snackbar>
    )

  }

  const {openBar,message,type} = props

  return (

  openBar ? <div className={classes.root}>{renderSnack(openBar,type,message)}</div>: renderSnack(openBar)
    
  );
}
