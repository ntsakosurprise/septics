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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                              labore et dolore magna aliqua.


                              </p>

                            </div>
                           
             
                      
                    </div>

                    <div className="services__bio--dd">

                
                            <span className="services__bio--dd-bar"></span>
                            <span className="services__bio--dd-cc"></span>
                            <span className="services__bio--dd-txt">Request SeRViCE</span>
                            
             
                      
                    </div>

                   

                   


               
             
           </section>
        )
    }

}


export default withStyles(styles)(Bio)