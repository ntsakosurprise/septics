


import React, {Component} from 'react' 

import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import VideocamIcon from '@material-ui/icons/Videocam';
import Calls from '@material-ui/icons/Call';

import { fontSize } from '@material-ui/system';
import { Button } from '@material-ui/core';

const styles = {
    root: {
     
      color:"#999",
      fontSize: 25,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




class Media extends  Component{

    constructor(props){

        super(props)
    }

    render(){

        
        return(

            
                
                    <div className="pd-top-fd-bt">

                       <section className="mg-bottom-fd-sm">

                           <div style={{zIndex: 1000}} className="fg-primary bg-light btn--animated pos-abs hr-size-fd-lg mg-top-fd-xxx-tn pd-fd-bt mg-left-fd-tn font-fd-xx-tn bx-shadow-dark d-inline-block text-align-center">
                               Media
                           </div>
                           <div style={{width: 6+"rem",height: 2.5+"rem"}} className="bd-rad-bt bd-fd-primary-xx-bt"></div>
                           
                       </section>
                       <section className="pos-rel">

                        <div className="mg-bottom-fd-tn">

                        <h3 className="fg-dark-lt mg-bottom-fd-tn">Photos</h3>


                        <span className="d-inline-block mg-right-fd-bt" >
                            <img style={{width: 4+"rem",height: 4+"rem"}} src={`img/users/250_6.jpg`}  />
                        </span>

                        <span className="d-inline-block mg-right-fd-bt" >
                             <img style={{width: 4+"rem",height: 4+"rem"}} src={`img/users/250_7.jpg`}  />
                        </span>

                        <span className="d-inline-block mg-right-fd-bt" >
                            <img style={{width: 4+"rem",height: 4+"rem"}} src={`img/users/250_8.jpg`}  />
                        </span>
                        <span className="d-inline-block mg-right-fd-bt" >
                            <img style={{width: 4+"rem",height: 4+"rem"}} src={`img/users/250_9.jpg`}  />
                        </span>
                        
                        </div>

                        <div  className="pos-abs top-offset-fl-xx-md right-offset-fl-xxx-tn">
                                <span className="fg-dark-lt font-fd-xx-tn d-inline-block mg-right-fd-bt">123</span>
                                <span className="fg-primary font-fd-xx-tn d-inline-block font-wt-bold">+</span>
                            </div>
                       </section>

                     
                       
                    </div>


            
        )
    }




}



export default withStyles(styles)(Media) 

