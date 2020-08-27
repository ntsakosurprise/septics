
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


 class How extends Component{
    
    constructor(){
        super()
    }
   
  
    render(){
        return(

        
            <section className="po__how">

                <section className="po__how-procces-wrap">

                    
                    <div className="po__how--process">

                        <h4 className="po__how--process-head">The process</h4>
                        <section className="po__how--process-i-wrap">

                            <div className="po__how--process-i">

                                <span className="po__how--process-i-ck">
                                    <small>Register</small>
                                </span>
                                <span className=" po__how--process-i-arrow">
                                    <Icon>
                                        <SwapHorizIcon style={styles.root} />
                                    </Icon>
                                </span>
                                <p className="po__how--process-i-box">
                                    Register with Jobbri to start posting jobs for your opennings.
                                </p>
                               
                            </div>


                            <div className="po__how--process-ileft">

                               
                               
                                <p className="po__how--process-ileft-box">
                                After registration, sign in to your account to start posting jobs immediately.

                                </p>
                                <span className=" po__how--process-ileft-arrow">
                                    <Icon>
                                        <SwapHorizIcon style={styles.root} />
                                    </Icon>
                                </span>

                                <span className="po__how--process-ileft-ck">
                                    <small>Sign in</small>
                                </span>
                               
                            </div>


                            <div className="po__how--process-i">

                                <span className="po__how--process-i-ck">
                                    <small>Post jobs</small>
                                </span>
                                <span className=" po__how--process-i-arrow">
                                    <Icon>
                                        <SwapHorizIcon style={styles.root} />
                                    </Icon>
                                </span>
                                <p className="po__how--process-i-box">
                                Post jobs for free and have them available to thousands of jobseekers

                                </p>
                                <span className="po__how--process-i-sep">Or</span>
                                <p className="po__how--process-i-box">
                                Pick a package that suits your budget maximum reach.

                                </p>

                            </div> 


                            <div className="po__how--process-ileft">

                               
                               
                                <p className="po__how--process-ileft-box">
                                Manage and view insights for your posted jobs.


                                </p>
                                <span className=" po__how--process-ileft-arrow">
                                    <Icon>
                                        <SwapHorizIcon style={styles.root} />
                                    </Icon>
                                </span>

                                <span className="po__how--process-ileft-ck">
                                    <small>Manage jobs</small>
                                </span>

                            </div>


                            <div className="po__how--process-i">

                                <span className="po__how--process-i-ck">
                                    <small>Promote jobs</small>
                                </span>
                                <span className=" po__how--process-i-arrow">
                                    <Icon>
                                        <SwapHorizIcon style={styles.root} />
                                    </Icon>
                                </span>
                                <p className="po__how--process-i-box">
                                Promote your jobs for maximum exposure.

                                </p>

                            </div>



                        </section>

                    </div>

                    <div className="po__how--bar"></div>
                    <div className="po__how--end">The end</div>

                </section>



                
                
            </section>
        
        )
    }

}


export default withStyles(styles)(How)