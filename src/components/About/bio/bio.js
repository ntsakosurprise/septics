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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                              labore et dolore magna aliqua.


                              </p>

                            </div>
                           
             
                      
                    </div>

                    <div className="about__bio--dd">

                
                            <h4>Dedication</h4>
                            <div>

                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                              labore et dolore magna aliqua.


                              </p>

                            </div>
                           
             
                      
                    </div>

                   

                   


               
             
           </section>
        )
    }

}


export default withStyles(styles)(Bio)