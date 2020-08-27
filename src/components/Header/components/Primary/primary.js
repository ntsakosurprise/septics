
import React from 'react' 
import {Link} from 'react-router-dom'
import primaryLinks from './links'
import Navigation from "../../../Common/navigation/navigation"
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import DashboardIcon from '@material-ui/icons/Dashboard';
import Alert from './alert'


const styles = {
    root: {
     
      color:"#ff6633",
      fontSize: 20,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };



function Primary(props) {
    

    return(

         <div className="header__menu--bars">

            {/* <input id="test" type="checkbox" />
            <label for="test">
                <p className="burger">
                    <span className="header__menu--bars-menubar-1"></span>
                    <span className="header__menu--bars-menubar-2"></span>

                </p>
               
            </label> */}

            {/* <div class="menu">
                <div>Home</div>
                <div>About</div>
                <div>Hello</div>
                <div>Contact</div>
            </div>
            
            <span class="main">
                <span>Pure CSS Menu</span>
            </span> */} 

                <span className="header__menu--bars-menubar-1"></span>
                <span className="header__menu--bars-menubar-2"></span>

          

         </div>
    )

}


export default withStyles(styles)(Primary)