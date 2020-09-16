
import React,{Component} from 'react'

import {BrowserRouter as Router,Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactIcon from '@material-ui/icons/ContactPhone'
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

                        <h4 className="home__contact--title">South Septic</h4>


                        <section className="home__contact--i">
                            <div className="home__contact--i-icon">
                                <Icon><ContactIcon /></Icon>
                            </div>
                            <div className="home__contact--i-content">
                                <section className="home__contact--i-cont-i">
                                    <span><a href="tel:0749159974">0749159974</a></span>
                                    <small>Mobile</small>
                                </section>

                                <section className="home__contact--i-cont-i">
                                    <span><a href="tel:0670245492">0670245492</a></span>
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
                                    <span>info@South Septic.co.za</span>
                                    <small>Information</small>
                                </section>

                                <section className="home__contact--i-cont-i">
                                    <span>accounts@South Septic.co.za</span>
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
                             As we grow our good reputation, we would like to involve you; and we are simply a call away.
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

                <section className="home__story">

                        <div className="home__story--side1">

                            <section className="home__story--side1-tri">
                                <span>The Story OF us</span>
                            </section>

                            <section className="home__story--side1-cir">
                                <span>How We Came To bE</span>
                                <small>Why we've started South Septic</small>
                            </section>
                        </div>

                        <div className="home__story--side2">

                            <section>
                                <div className="home__story--side2-i">
                                    <section className="home__story--side2-i-head">
                                        <small>1.</small><span>Septic Tank Pumping Need</span>
                                    </section>
                                    <section className="home__story--side2-i-body">
                                        <p>Septic tank pumping has become essential, especially in both rural and under developed&developed areas that are not connected to a sewage system.
                                        </p>
                                    </section>
                                </div>

                                <div className="home__story--side2-i">
                                    <section className="home__story--side2-i-head">
                                        <small>2.</small><span>Human Waste Disposal</span>
                                    </section>
                                    <section className="home__story--side2-i-body">
                                        <p>Homes and buildings not connected to a municipal or city sewage system require a method to get rid of human waste (feces and urine).
                                        </p>
                                    </section>
                                </div>

                                <div className="home__story--side2-i-al">
                                    <section className="home__story--side2-i-al-head">
                                        <span>What is a septic tank?</span>
                                    </section>
                                    <section className="home__story--side2-i-al-body">
                                        <p>A septic tank is a small sewage treatment made of brick work, fiberglass, concrete, and plastic or pvc to collect waste from domestic households and commercial properties.
                                        </p>
                                    </section>
                                </div>


                            </section>

                            


                        </div>

                        <strong className="clearfix" />

                        <article className="home__story--locations">

                             <h3 className="home__story--locations-head">Locations Our Services OuR Most Rendered</h3>

                             <section className="home__story--locations-loks">

               
                                    <div className="story__col-lg-3">
                                        <button className="story__lo-btn story__btn1"> Glen Austin</button>
                                    </div>

                                    <div className="story__col-lg-3">
                                        <button className="story__lo-btn story__btn2">Johannesburg</button>
                                    </div>

                                    <div className="story__col-lg-3">
                                        <button className="story__lo-btn story__btn3">Kyalami</button>
                                    </div>

                                    <div className="story__col-lg-3">
                                        <button className="story__lo-btn story__btn3">Pretoria</button>
                                    </div>

                                    <div className="story__col-lg-3">
                                        <button className="story__lo-btn story__btn3">Centurion</button>
                                    </div>

                                    <div className="story__col-lg-3">
                                        <button className="story__lo-btn story__btn3">Brits</button>
                                    </div>

                                    <div className="story__col-lg-3">
                                        <button className="story__lo-btn story__btn3">Hartebeespoort</button>
                                    </div>

                                </section>

                                <section className="home__story--locations-action">
                                    <span>Call Us Today for the cheapest quotes!</span>
                                        <p>
                                            <small><span>+</span><a href="tel:0749159974">0749159974</a></small>
                                            <small><span>+</span><a href="tel:0670245492">0670245492</a></small>
                                            <small><span>+</span><a href="tel:0829595444">0829595444</a></small>
                                        </p>
                                    </section>
                                <strong className="clearfix" />



                              


                            </article>


                </section>
                
               
            </div>
        )
    }

}


export default Contact