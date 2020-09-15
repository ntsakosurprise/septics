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

           <section className="about__bio">

                    <h2 className="about__bio--title">
                        <span className="about__bio--title-primary">About</span> 
                        <span className="about__bio--title-secondary">Us</span>
                       
                    </h2>

                   

                    <div className="about__bio--bi">

                
                            <h4>Bio</h4>
                            <div>

                              <p>
                              We are a waste management business that is currently, mainly focused on the collection of effluent water from septic tanks. Situated in Midrand,our current main areas of focus are Centurion, Mnandi, Joburg, Pretoria, Kyalami,Brits,and Glen Austin. 
                             


                              </p>

                              <p>
                             
                              Our business uses equipments that are suitable for effective pump-out of waste water from the areas of concern such as septic tanks. With clients being the core of our business, client satisfaction is the foundation upon which our great service has been built.  We are always open to help our clients where our assistance is needed.


                              </p>

                            </div>
                           
             
                      
                    </div>

                    <div className="about__bio--dd" 
                     data-aos="fade"
                     data-aos-delay="1000"
                     data-aos-duration="9000"
                     data-aos-easing="ease-in-out-cubic">

                
                            <h4>Dedication</h4>
                            <div>

                            <p>
                            As SouthSeptic,we take pride in serving our clients to the utmost best. 
                            Our level of dedication to our work is the foundation upon which our current clientele's trust and recommendation of our services is built.


                              </p>

                    

                              <p>
                              Not only are we dedicated to our work,but to the provision of great service that we know our clientele needs. Out commitment to continue
                               giving our clients the best possible service is incorporated into the core of our business,and it will always be.
                              </p>

                            </div>
                           
             
                      
                    </div>

                   

                   


               
             
           </section>
        )
    }

}


export default withStyles(styles)(Bio)