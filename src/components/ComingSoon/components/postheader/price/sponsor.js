
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


 class Sponsored extends Component{
    
    constructor(){
        super()
    }
   
  
    render(){
        return(

        
            

               

                        <div className="po__price-sponsored-wrap">

                        <div className="po__price--sponsored po__price--sponsored-offset">

                            <section className="po__price--sponsored-cost">
                                <span className="po__price--sponsored-cost-label">Cost Per Click (CPC)</span>
                                
                            </section>

                            <section className="po__price--sponsored-box bx-raised-1">

                                <div className="po__price--sponsored-box-i">
                                   
                                   <span className="po__price--sponsored-box-i-text">
                                   We provide cost per click strategy for your posted jobs, with this strategy, your posted job is upgraded to a premium listing where you will only be charged on the clicks you get from applicants, this strategy has no fixed price, and the cost per click is entirely dependent on you.

                                    </span>
                                </div>

                               
                                <div className="po__price--sponsored-box-btn">
                                    <button className="bg-primary fg-light">Sponsor jobs</button>
                                </div>
                                
                            </section>

                        </div>


                        <div className="po__price--sponsored">

                            <section className="po__price--sponsored-cost">
                                <span className="po__price--sponsored-cost-label">Cost Per Applicant (CPA)</span>
                                
                            </section>

                            <section className="po__price--sponsored-box bx-raised-1">

                                <div className="po__price--sponsored-box-i">
                                   <span className="po__price--sponsored-box-i-text">
                                   With cost per applicant strategy, 
                                   your posted job is upgraded to a premium listing where you will only be charged on the number of applicants that really apply to your jobs, this strategy has no fixed price, and the cost per applicant is entirely dependent on your budget.


                                    </span>
                                </div>

                                   
                                <div className="po__price--sponsored-box-btn">
                                    <button className="bg-tertiary">Sponsor jobs</button>
                                </div>
                                
                            </section>

                        </div>

                        

                   <strong className="clearfix" />

                </div>



                
                
          
        
        )
    }

}


export default withStyles(styles)(Sponsored)