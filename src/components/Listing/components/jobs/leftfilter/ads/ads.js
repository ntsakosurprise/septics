import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Notifications from '@material-ui/icons/Notifications';

import SpaceOne from './spaceone'
import GoogleAd from '../../../googlead/googlead'
import GoogleAdFixed from '../../../googleadfixed/googleadfixed'

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




class Ads extends Component{
    
    constructor(props){

        super(props)

    }


    render(){

        return(





           <section className="job__ads--banner">

            <div>
                <SpaceOne />
            </div>

            <div className="ad-class">
                    {/* add your slot id  */}
                <GoogleAd slot="2434444" />
            </div>
            
            <div className="fixed-ad">

                <GoogleAdFixed
                        slot="234578578"                  
                        style={{
                        display: 'inline-block',
                        width: '300px',                  
                        height: '250px'                  
                        }}
                />

            </div>

           
             
           </section>
        )
    }

}


export default withStyles(styles)(Ads)