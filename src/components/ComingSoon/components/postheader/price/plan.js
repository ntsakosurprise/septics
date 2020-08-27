
import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';



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


 class Plan extends Component{
    
    constructor(){
        super()

       
    }
   
  
    render(){
        return(

        
          

               

                    <div className="po__price-plans-wrap">

                        <div className="po__price--plans po__price--plans-offset">

                            <section className="po__price--plans-cost">
                                <span className="po__price--plans-cost-label">Free</span>
                                <span className="po__price--plans-cost-price">
                                    <small className="po__price--plans-cost-price-cu">R</small>
                                    <small className="po__price--plans-cost-price-pr">0</small>
                                </span>
                            </section>

                            <section className="po__price--plans-box bx-raised-1">

                                <div className="po__price--plans-box-i">
                                   <span className="po__price--plans-box-i-ck"></span>
                                   <span className="po__price--plans-box-i-text">Post two jobs</span>
                                </div>

                                <div className="po__price--plans-box-i">
                                   <span className="po__price--plans-box-i-ck"></span>
                                   <span className="po__price--plans-box-i-text">Views jobs stats</span>
                                </div>

                                <div className="po__price--plans-box-i">
                                   <span className="po__price--plans-box-i-ck"></span>
                                   <span className="po__price--plans-box-i-text">Applicants to your email</span>
                                </div>
                                <div className="po__price--plans-box-btn">
                                    <button className="bg-secondary fg-light">Post jobs</button>
                                </div>
                                
                            </section>

                        </div>


                        <div className="po__price--plans">

                            <section className="po__price--plans-cost">
                                <span className="po__price--plans-cost-label">Basic</span>
                                <span className="po__price--plans-cost-price">
                                    <small className="po__price--plans-cost-price-cu">R</small>
                                    <small className="po__price--plans-cost-price-pr">650</small>
                                </span>
                            </section>

                            <section className="po__price--plans-box bx-raised-1">

                                <div className="po__price--plans-box-i">
                                    <span className="po__price--plans-box-i-ck"></span>
                                    <span className="po__price--plans-box-i-text">Post 5 jobs</span>
                                    </div>

                                    <div className="po__price--plans-box-i">
                                    <span className="po__price--plans-box-i-ck"></span>
                                    <span className="po__price--plans-box-i-text">Premium Listing</span>
                                    </div>

                                <div className="po__price--plans-box-i">
                                    <span className="po__price--plans-box-i-ck"></span>
                                    <span className="po__price--plans-box-i-text">Cv's to  your Jobbri account inbox</span>
                                </div>
                                <div className="po__price--plans-box-i">
                                    <span className="po__price--plans-box-i-ck"></span>
                                    <span className="po__price--plans-box-i-text">Job post analytics</span>
                                </div>
                                <div className="po__price--plans-box-i">
                                    <span className="po__price--plans-box-i-ck"></span>
                                    <span className="po__price--plans-box-i-text">Featured label</span>
                                </div>

                                <div className="po__price--plans-box-btn">
                                    <button className="bg-primary fg-light">Post jobs</button>
                                </div>
                                
                            </section>

                        </div>

                        <div className="po__price--plans po__price--plans-offset">

                            <section className="po__price--plans-cost">
                                <span className="po__price--plans-cost-label">Pro</span>
                                <span className="po__price--plans-cost-price">
                                    <small className="po__price--plans-cost-price-cu">R</small>
                                    <small className="po__price--plans-cost-price-pr">1100</small>
                                </span>
                            </section>

                            <section className="po__price--plans-box bx-raised-1">

                                <div className="po__price--plans-box-i">
                                    <span className="po__price--plans-box-i-ck"></span>
                                    <span className="po__price--plans-box-i-text">Post 10 jobs</span>
                                </div>
                                <div className="po__price--plans-box-i">
                                    <span className="po__price--plans-box-i-ck"></span>
                                    <span className="po__price--plans-box-i-text">All basic plan features</span>
                                </div>
                              

                                <div className="po__price--plans-box-btn">
                                    <button className="bg-tertiary">Post jobs</button>
                                </div>
                                
                            </section>

                        </div>



                    <strong className="clearfix" /> 

                     <div className="po__price--more">

                         <p>

                            If you need to post more jobs, contact us for discussions and possible savings
  

                         </p>

                     </div>

                  


                </div>



                
                
           
        
        )
    }

}


export default withStyles(styles)(Plan)