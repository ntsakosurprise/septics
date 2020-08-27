
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


 class Guide extends Component{
    
    constructor(){
        super()
    }
   
  
    render(){
        return(

        
            <section className="po__guide">

                <section className="po__guide-procces-wrap">

                    
                    <div className="po__guide--process">

                        <h4 className="po__guide--process-head">Our posting guidlines</h4>
                        <section className="po__guide--process-i-wrap">

                            <div className="po__guide--process-i">

                                <span className="po__guide--process-i-ck">
                                    
                                </span>
                                
                                <p className="po__guide--process-i-box">
                                Don’t post jobs about sex or erotic services.

                                </p>
                               
                            </div>

                            <div className="po__guide--process-i">

                                <span className="po__guide--process-i-ck">
                                    
                                </span>
                                
                                <p className="po__guide--process-i-box">
                                Don’t post jobs for remitted payments.


                                </p>
                               
                            </div>

                            <div className="po__guide--process-i">

                                <span className="po__guide--process-i-ck">
                                    
                                </span>
                                
                                <p className="po__guide--process-i-box">
                                Don’t post jobs about sex or erotic services.

                                </p>
                               
                            </div>

                            <div className="po__guide--process-i">

                                <span className="po__guide--process-i-ck">
                                    
                                </span>
                                
                                <p className="po__guide--process-i-box">
                                No work from home job postings will be accepted.


                                </p>
                               
                            </div>

                            <div className="po__guide--process-i">

                                <span className="po__guide--process-i-ck">
                                    
                                </span>
                                
                                <p className="po__guide--process-i-box">
                                Don’t post jobs requesting some kind of payments from jobseekers.

                                </p>
                               
                            </div>

                            <div className="po__guide--process-i">

                                <span className="po__guide--process-i-ck">
                                    
                                </span>
                                
                                <p className="po__guide--process-i-box">
                                Don’t post work-from-home or volunteer positions


                                </p>
                               
                            </div>


                            

                            

                            



                        </section>

                    </div>

                    <div className="po__guide--bar"></div>
                    

                </section>



                
                
            </section>
        
        )
    }

}


export default withStyles(styles)(Guide)