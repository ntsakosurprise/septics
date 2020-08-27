import React, { Component } from 'react' 
import {Link} from 'react-router-dom'
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




class SpaceOne extends Component{
    
    constructor(props){

        super(props)

    }


    render(){

        return(





           <section className="job__ads--banner-one">


                
                <div className="job__ads--banner-one-ad">
                   
                    <Link to="/" className="link">

                        <span className="ob__ads--banner-one-ad-label">Ad</span>
                        <section className="job__ads--banner-one-ad-s1">Want to wet your <span>appetite?</span></section>
                        <section className="job__ads--banner-one-ad-s2">Check out <span>Fugyt</span></section>
                        <section className="job__ads--banner-one-ad-s3">
                            <img src="/img/hero_2.jpeg" className="job__ads--banner-one-ad-s3-pik" />
                            
                            <span className="job__ads--banner-one-ad-s3-text">
                                We have the best clothes in town
                            </span>
                        </section>

                    </Link>

                </div>

              
                
             
           </section>
        )
    }

}


export default withStyles(styles)(SpaceOne)