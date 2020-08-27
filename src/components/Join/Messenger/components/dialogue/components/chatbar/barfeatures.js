


import React, {Component} from 'react' 

import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import VideocamIcon from '@material-ui/icons/Videocam';
import Calls from '@material-ui/icons/Call';

import { fontSize } from '@material-ui/system';

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




class Barfeatures extends  Component{

    constructor(props){

        super(props)
    }

    render(){

        
        return(

            
                
                    <div className="pd-top-fd-bt">

                       <section>

                        <span className="d-inline-block" >
                            <Icon>
                                <SettingsVoiceIcon className={`${this.props.classes.root} ${this.props.classes.iconhover}`} />
                            </Icon>
                        </span>

                        <span className="d-inline-block mg-right-fd-bt" >
                            <Icon>
                             <Calls className={`${this.props.classes.root} ${this.props.classes.iconhover}`} />
                            </Icon>
                        </span>

                        <span className="d-inline-block" >
                            <Icon>

                             <VideocamIcon className={`${this.props.classes.root} ${this.props.classes.iconhover}`} />
                               
                            </Icon>
                        </span>

                       </section>

                     
                       
                    </div>


            
        )
    }




}



export default withStyles(styles)(Barfeatures) 

