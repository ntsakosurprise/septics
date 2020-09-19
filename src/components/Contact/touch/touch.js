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




class Touch extends Component{
    
    constructor(props){

        super(props)

    }


    render(){

        return(

           <section className="contact__touch">

                    <h2 className="contact__touch--title" 
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="15000"
                    data-aos-easing="ease-in-out-cubic">
                        <span className="contact__touch--title-primary">Connect</span> 
                        <span className="contact__touch--title-secondary">With</span>
                        <small className="contact__touch--circle-1"></small>
                        <small className="contact__touch--circle-2"></small>
                    </h2>

                    <h3 className="contact__touch--mail" 
                    data-aos="fade-up-left"
                    data-aos-delay="500"
                    data-aos-duration="15000"
                    data-aos-easing="ease-in-out-cubic">info@southseptic.co.za</h3>

                    <div className="bx-raised-1 contact__touch--content" 
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic">

                
                            <h4>Contacts</h4>
                            <div>

                              <span>074 9159 974</span>
                              <span>082 9595 444</span>

                            </div>
                           
             

                       

                      
                    </div>

                    <section>

                        <nav className="footer__brand--social-nav contact__touch--social">
                            <Link to='/about' className="link footer__brand-imgs-links">
                                <img src="/img/social/facebook.png" className="footer__brand-imgs" />
                            </Link> 
                            <Link to='/services' className="link footer__brand-imgs-links">
                                <img src="/img/social/twitter.png" className="footer__brand-imgs" />
                            </Link>
                            <Link to='/contact' className="link footer__brand-imgs-links">
                                <img src="/img/social/instagram.png" className="footer__brand-imgs" />
                            </Link>
                        </nav>
                    </section>

                   


               
             
           </section>
        )
    }

}


export default withStyles(styles)(Touch)