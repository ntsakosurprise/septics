
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Chatbubble from './chatbubble'

import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import PersonIcon from '@material-ui/icons/Person';

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








class Toolbox extends  Component{


    constructor(props){

        super(props)
    }

   

   

   

    render(){


        return(

            
                
                    <div className="mg-bottom-fd-x-tn pd-left-fl-xxx-tn">

                     
                        <section>

                        <span className="d-inline-block mg-right-fd-xxx-tn bd-bottom-fd-primary-xx-bt" >
                            <Icon>
                                <PersonIcon className={`${this.props.classes.root} ${this.props.classes.iconhover}`} />
                            </Icon>
                        </span>

                        <span className="d-inline-block " >
                            <Icon>
                            <PersonIcon className={`${this.props.classes.root} ${this.props.classes.iconhover}`} />
                            </Icon>
                        </span>

                        
                        </section>
                        
                    </div>


            
        )
    }




}

export default withStyles(styles)(Toolbox)