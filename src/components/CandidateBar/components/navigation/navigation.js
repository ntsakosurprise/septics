
import React from 'react' 
import primaryLinks from './links'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MailIcon from '@material-ui/icons/Mail';



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


function Navigation(props) {
    

    return(

        


            <div>
                <Link to="/dashboard" className="dashboard__sidebar--nav-link link">
                    <span className="dashboard__sidebar--nav-icon">
                        <Icon><DashboardIcon /></Icon>
                    </span>
                    <span className="dashboard__sidebar--nav-text">Dashboard</span>
                </Link>

                <Link to="/saved" className="dashboard__sidebar--nav-link link">
                    <span className="dashboard__sidebar--nav-icon">
                        <Icon><FavoriteIcon /></Icon>
                    </span>
                    <span className="dashboard__sidebar--nav-text">Saved jobs</span>
                </Link>

                <Link to="/alerts" className="dashboard__sidebar--nav-link link">
                    <span className="dashboard__sidebar--nav-icon">
                        <Icon><MailIcon /></Icon>
                    </span>
                    <span className="dashboard__sidebar--nav-text">Job alerts</span>
                </Link>

                <Link to="/searched" className="dashboard__sidebar--nav-link link">
                    <span className="dashboard__sidebar--nav-icon">
                        <Icon><HistoryIcon /></Icon>
                    </span>
                    <span className="dashboard__sidebar--nav-text">Search history</span>
                </Link>

                <Link to="/settings" className="dashboard__sidebar--nav-link link">
                    <span className="dashboard__sidebar--nav-icon">
                        <Icon><SettingsIcon /></Icon>
                    </span>
                    <span className="dashboard__sidebar--nav-text">Settings</span>
                </Link>

            </div>
          

         
    )

}


export default withStyles(styles)(Navigation)