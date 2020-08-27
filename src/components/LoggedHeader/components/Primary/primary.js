
import React from 'react' 
import primaryLinks from './links'
import Navigation from "../../../Common/navigation/navigation" 
import {Link} from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
// import Alert from './alert'


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
    
    const {profile,actions} = props 
    const {url,firstName} = profile

    const openPage = (page)=>{

        actions.push(page)
    }


    return(

        <div className="pos-abs pd-top-fd-tn right-offset-fl-x-bt">

             
            <li className="header__nav--item ">

                
                <span className="fg-dark d-block mg-right-fd-sm">{firstName}</span>

            </li>

            <li className="header__nav--item">

                <span className="header__avatar" onClick={(e)=> openPage('/settings')}>
                    
                    <img src={url} className="header__avatar--img" />

                </span>
               

            </li>

            <li className="header__nav--item">

                <Link to='/access' className="header__nav--item-link">
                <span style={{top: .3+"rem"}} className="d-inline-block mg-right-fd-xxx-tn pos-rel">
                    <Icon>
                        <PowerSettingsNewIcon style={{fontSize: 1.35+"rem"}} className="fg-primary" />
                    </Icon>
                    </span>
                    <span className="d-inline-block">Log out</span>
                </Link>

            </li>
        
      </div>
    )

}


export default Primary