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
   
  
  },

  headingCont:{

    backgroundColor: "rgba(205,153,153,.1)",
    border: "none",
    borderRadius: 1+'rem',
    boxShadow: 0+'px ' + 0+'px ' + 0+'px ' + 0+'px ' + "rgba(205,153,153,.01)"
  },

  expandedContent:{

    backgroundColor: "#FFF",
    padding: 0,
    paddingTop: 1.5+'rem'
  }
}));






 function Accordion({component: Component,...rest}) {
  const classes = useStyles();
  console.log('THE REST PROP')
  console.log(rest)

  return (
    <div className={classes.root}>

      <ExpansionPanel className={classes.headingCont} style={{marginBottom: 2+'rem'}}>
        <ExpansionPanelSummary
          expandIcon={<PlusExpander />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
      <Typography  className={classes.heading}>{rest.name ? rest.name : null}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expandedContent}>
         
            <Component actions={rest.actions} data={rest.data} />
          
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
        
    </div>
  );
}

export default Accordion