
import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom';


const Brand = ()=>{


	

		return(

            <div className="footer__brand">

                <section className="footer__brand-request"
                 data-aos="fade-up-right"
                 data-aos-delay="1000"
                 data-aos-duration="15000"
                 data-aos-easing="ease-in-out-cubic">
                    <button className="footer__brand-btn">Request Service</button>
                </section>

                <section className="footer__brand--sok">

                    <div className="footer__brand--sok-qrs">
                        <p className="footer__brand--squares footer__brand--squares-1" 
                         data-aos="zoom-out"
                         data-aos-delay="1000"
                         data-aos-duration="15000"
                         data-aos-easing="ease-in-out-cubic"></p>
                        <p className="footer__brand--squares footer__brand--squares-2" 
                         data-aos="zoom-out-left"
                         data-aos-delay="1500"
                         data-aos-duration="15000"
                         data-aos-easing="ease-in-out-cubic"></p>
                        <p className="footer__brand--squares footer__brand--squares-3" 

                         data-aos="zoom-out-right"
                         data-aos-delay="2000"
                         data-aos-duration="15000"
                         data-aos-easing="ease-in-out-cubic"></p>
                    </div>
                    <div className="footer__brand--sok-social">

                    <h3 className="footer__brand--social-mhead">Stay South Septic updated on Social</h3>
                            <h4 className="footer__brand--social-shead">Media</h4>

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
                        <strong className="clearfix" />
                    

                    </div>

                

                 </section>
           

                <section className="footer__brand--brand">

               

                <div className="footer__brand-copy footer__brand-offsets">
                    <span className="mg-left-fl-bt font-fd-xx-tn fg-light">South Septic Tanks 2020</span>
                </div>
                <div className="footer__brand-main footer__brand-offsets">
                    <nav>
                        <Link to='/about' className="link footer__brand-links">
                            About
                        </Link> 
                        <Link to='/services' className="link footer__brand-links">
                            Services
                        </Link>
                        <Link to='/contact' className="link footer__brand-links">
                            Contact
                        </Link>
                    </nav>
                </div> 
            
                <div className="footer__brand-info">
                    <nav>
                        <Link to='/faqs' className="link footer__brand-links footer__brand-hanging" 
                        >
                            Faqs
                        </Link> 
                        <Link to='/privacy' className="link footer__brand-links footer__brand-hanging"
                      >
                            Privacy
                        </Link>
                       
                    </nav>
                </div>

                <strong className="clearfix" />



            </section>
           

            </div>

			
		)


	
	

}




export default Brand;





