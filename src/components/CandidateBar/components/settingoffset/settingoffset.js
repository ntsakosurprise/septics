
import React from 'react' 
import primaryLinks from './links'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';




const styles = {
    root: {
     
      color:"#999",
      fontSize: 30,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };


function SettingOffset(props) {
    

    return(

        

            <Router>

                <span className="dashboard__sidebar--settingoffset link" onClick={(e)=>props.logoutUser(e)}>
                    <span className="dashboard__sidebar--settingoffset-icon">
                        <Icon><PowerSettingsNewIcon /></Icon>
                    </span>
                    <span className="dashboard__sidebar--settingoffset-text">Log out</span>
                </span>

             
            </Router>

         
    )

}


export default withStyles(styles)(SettingOffset)