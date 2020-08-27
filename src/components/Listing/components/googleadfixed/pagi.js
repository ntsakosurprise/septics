import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log('THE VALUE OF THE CLICKED ITEM')
    console.log(value)
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page} of 10</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}
