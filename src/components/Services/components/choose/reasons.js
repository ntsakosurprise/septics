
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








class Reasons extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

        return(

            <section className="grid-col-6 ">
                
                <div className="hr-size-fl-bg pos-rel left-offset-fl-bt vt-size-vh-xx-md bd-fd-dark-x-bt">
                    <section style={{zIndex:2}} className="hr-size-fl-xx-bg pos-abs bg-lt-grey-lta vt-size-vh-xx-md right-offset-fl-bt top-offset-fl-xxx-tn">
                        <div className="mg-bottom-fd-md">
                            <span className="bg-primary d-inline-block fg-light font-fd-x-tn pd-fd-bt">
                              We
                            </span>
                            <span className="bg-light fg-dark d-inline-block font-fd-x-tn pd-fd-bt">are about you</span>
                        </div>

                        <div className="bg-light hr-size-fl-xxx-md pd-fd-bt">

                            <p className="mg-bottom-fd-xx-sm mg-left-fl-xx-tn font-fd-xx-tn">
                                Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go.
                            </p> 

                            <p className="mg-bottom-fd-xx-tn bd-left-fd-primary-x-bt mg-left-fl-bt pd-left-fl-bt font-fd-xx-tn">
                                Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go.
                            </p> 

                        </div>

                        <div style={{zIndex: -1}} className="pos-abs hr-size-fd-bt left-offset-fd-tn top-offset-0 bg-light vt-size-vh-xx-tn">
                                TEST
                        </div>
                    </section>

                    <div style={{width: 10 +'rem',height:10 +'rem',bottom: -12+"rem",zIndex: -1}} className="pos-abs z-index right-offset-fl-xxx-tn bd-rad-xx-bg pd-top-fd-x-sm bg-light bx-raised text-align-center">

                        <span className="d-inline-block">
                            <Icon><ArrowBackIcon className={`${this.props.classes.root} ${this.props.classes.iconhover}`} /></Icon>
                        </span>
                        <span style={{top: -1+"rem"}} className="font-fd-xx-tn mg-left-fd-bt mg-right-fd-bt pos-rel font-wt-bold d-inline-block">5</span>
                        <span className="d-inline-block">
                            <Icon><ArrowForwardIcon className={`${this.props.classes.root} ${this.props.classes.iconhover}`} /></Icon>
                        </span>

                    </div>
                </div>
               

            </section>
        )
    }




}

export default withStyles(styles)(Reasons)