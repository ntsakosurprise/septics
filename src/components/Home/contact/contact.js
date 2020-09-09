
import React,{Component} from 'react'

import {BrowserRouter as Router,Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MailIcon from '@material-ui/icons/Mail';



class Contact extends Component{
    
    
    render(){

        return(

            <div className="home__contact">


                <section className="home__contact--container">

                    <div className="home__contact--connect">

                        <h4 className="home__contact--title">SouthSeptic</h4>


                        <section className="home__contact--i">
                            <div className="home__contact--i-icon">
                                <Icon><DashboardIcon /></Icon>
                            </div>
                            <div className="home__contact--i-content">
                                <section className="home__contact--i-cont-i">
                                    <span>012 541 6633</span>
                                    <small>Mobile</small>
                                </section>

                                <section className="home__contact--i-cont-i">
                                    <span>012 541 6633</span>
                                    <small>Mobile</small>
                                </section>
                               
                            </div>

                            <strong className="clearfix" />
                        </section>


                        <section className="home__contact--i">
                            <div className="home__contact--i-icon">
                                <Icon><MailIcon /></Icon>
                            </div>
                            <div className="home__contact--i-content">
                                <section className="home__contact--i-cont-i">
                                    <span>info@southseptic.co.za</span>
                                    <small>Information</small>
                                </section>

                                <section className="home__contact--i-cont-i">
                                    <span>accounts@southseptic.co.za</span>
                                    <small>Accounts</small>
                                </section>
                               
                            </div>
                            <strong className="clearfix" />
                        </section>

                        



                    </div>

                    <div className="home__contact--locations">

                        <h4 className="home__contact--locations-title">Reach Out</h4>

                        <section>
                            <p className="home__contact--locations-adtext">
                             As we grow our good reputation,we'd like to involve you,and we are simply a call away.
                            </p>
                        </section>

                        <section>
                            <section className="footer__brand--social">

                                <nav className="footer__brand--social-nav" data-aos="fade"
                                        data-aos-delay="1200"
                                        data-aos-duration="10000"
                                        data-aos-easing="ease-in-out-cubic">
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
                    </div>

                </section>
                
               
            </div>
        )
    }

}


export default Contact