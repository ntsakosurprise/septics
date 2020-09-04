import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';

import PlusExpander from './plusexpander'





const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 1.8+'rem',
   
  
  },

  headingCont:{

    backgroundColor: "rgba(205,153,153,.1)",
    border: "none",
    borderRadius: 1+'rem',
    boxShadow: 0+'px ' + 0+'px ' + 0+'px ' + 0+'px ' + "rgba(205,153,153,.01)",
    width: 80+'%'
  },

  expandedContent:{

    backgroundColor: "#FFF",
    padding: 0,
    paddingTop: 1.5+'rem',
    width: 100+"%",
    paddingLeft: 5+"%",
    paddingRight: 20+'%',
    fontSize: 1.5+'rem',
    lineHeight: '2.5rem'
  }
}));






 function Accordion(props) {
  const classes = useStyles();
  console.log('THE REST PROP')
  // console.log(rest)

  return (
    <div className={classes.root}>

      <ExpansionPanel className={classes.headingCont} style={{marginBottom: 2+'rem'}}>
        <ExpansionPanelSummary
          expandIcon={<PlusExpander />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
      <Typography  className={classes.heading}>{props.name ? props.name : null}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expandedContent}>
         
            {props.content}
          
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
        
    </div>
  );
}

export default Accordion