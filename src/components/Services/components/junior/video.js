
import React, {Component} from 'react' 
import {BrowserRouter as Router, Link} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const styles = {
    root: {
     
      color:"orange",
      fontSize: 30,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };








class Video extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

        return(

            <section className="grid-col-7 pos-rel ">
                
                <div className="bx-shadow-dark about__video  hr-size-fl-x-lg font-fd-xx-tn pd-fl-bt">
                    
                </div>
                <div className="top-offset-fl-bt mg-left-fl-xx-tn hr-size-fl-x-lg pos-abs font-fd-xx-tn">
                    <video className="mg-bottom-fd-xx-tn hr-size-fl-xx-bg">
                        <source className="mg-bottom-fd-xx-tn" src="video/junior.mp4" type="video/mp4">
                        </source>
                    </video>
                    <div className="bg-primary-lta about__perspective hr-size-fl-xx-bg pos-abs vt-size-vh-xxx-tn"></div>
                </div>
                <div className="grid-col-12 pd-bottom-fd-xxx-lg mg-top-fd-xx-bg">
                    <li className="fg-primary btn btn--white btn--animated link mg-left-fl-xxx-sm mg-bottom-fd-xx-bg font-fd-tn pd-bottom-fd-xx-tn mg-top-fd-x-tn bd-rad-xx-bg bx-shadow-dark d-inline-block bg-light pd-bottom-fd-xxx-tn text-align-center">
                        Register Junior
                    </li>
                </div>
               

            </section>
        )
    }




}

export default withStyles(styles)(Video)