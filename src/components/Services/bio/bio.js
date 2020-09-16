import React, { Component } from 'react' 
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Notifications from '@material-ui/icons/Notifications';


const styles = {
    root: {
     
      color:"#999",
      fontSize: 30,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




class Bio extends Component{
    
    constructor(props){

        super(props)

    }


    render(){

        return(

           <section className="services__bio">

                    
                   

                    <div className="services__bio--bi">

                
                            <h4>Our core service</h4>
                            <div>

                              <p>
                              
                              Realising the greater need of septic tanks, South Septic saw a companion need to mantain septic tanks and to provide solutions to problems that may result from their use.
                              Our main focus is septic tanks pumping.


                              </p>

                            </div>
                           
             
                      
                    </div>

                    <div className="services__bio--dd" 
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="15000"
                    data-aos-easing="ease-in-out-cubic">

                
                            <span className="services__bio--dd-bar"></span>
                            <span className="services__bio--dd-cc"></span>
                            <span className="services__bio--dd-txt">Request SeRViCE</span>
                            
             
                      
                    </div>

                   

                   


               
             
           </section>
        )
    }

}


export default withStyles(styles)(Bio)