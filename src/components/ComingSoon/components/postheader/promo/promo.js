
import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import Campaign from './campaign'
import Join from './join'



const styles = {
    root: {
     
   
      fontSize: 40,
     
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };


 class Promo extends Component{
    
    constructor(){
        super()
    }
   
  
    render(){
        return(

        
            <section className="po__promo">

            <section className="po__promo-procces-wrap">

                
                <div className="po__promo--process">

                    <h4 className="po__promo--process-head">Promotion Process</h4>
                    <section className="po__promo--process-i-wrap">

                        <div className="po__promo--process-i">

                            <span className="po__promo--process-i-ck">
                                
                            </span>
                            
                            <p className="po__promo--process-i-box">
                            Don’t post jobs about sex or erotic services.

                            </p>
                           
                        </div>

                        <div className="po__promo--process-i">

                            <span className="po__promo--process-i-ck">
                                
                            </span>
                            
                            <p className="po__promo--process-i-box">
                            Don’t post jobs for remitted payments.


                            </p>
                           
                        </div>

                        <div className="po__promo--process-i">

                            <span className="po__promo--process-i-ck">
                                
                            </span>
                            
                            <p className="po__promo--process-i-box">
                            Don’t post jobs about sex or erotic services.

                            </p>
                           
                        </div>

                        <div className="po__promo--process-i">

                            <span className="po__promo--process-i-ck">
                                
                            </span>
                            
                            <p className="po__promo--process-i-box">
                            No work from home job postings will be accepted.


                            </p>
                           
                        </div>

                        <div className="po__promo--process-i">

                            <span className="po__promo--process-i-ck">
                                
                            </span>
                            
                            <p className="po__promo--process-i-box">
                            Don’t post jobs requesting some kind of payments from jobseekers.

                            </p>
                           
                        </div>

                        <div className="po__promo--process-i">

                            <span className="po__promo--process-i-ck">
                                
                            </span>
                            
                            <p className="po__promo--process-i-box">
                            Don’t post work-from-home or volunteer positions


                            </p>
                           
                        </div>





                    </section>

                    <div className="po__promo--bar"></div>

                </div>

                <div className="po__promo--action">

                    <Campaign /> 

                </div>

                <strong className="clearfix" />
                
                

            </section>



            
            
        </section>
        
        )
    }

}


export default withStyles(styles)(Promo)