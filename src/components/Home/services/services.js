
import React,{Component} from 'react'
// import Benefits from './benefits/benefits' 



class Services extends Component{
    
    
    render(){

        return(

            <div className="home__services">


                <section className="home__services--text">
                    
                    <div class="text">
                        <div class="text__line">
                            <p>Our</p>
                            <p>We'd like</p>
                        </div>
                        <div class="text__line">
                            <p>areas</p>
                            <p>to</p>
                        </div>
                        <div class="text__line">
                            <p>of</p>
                            <p>work with</p>
                        </div>
                        <div class="text__line">
                            <p>expertise</p>
                            <p>you</p>
                        </div>
                    </div>
                </section>

                


                
                <div>

                
                           
                            <div className="home__services--content">

                                <div class="images-leaning">
                                    <div className="home__services--service">
                                        <section >
                                            <h2 className="home__services--service-title">Service One</h2>
                                            <p className="home__services--service-text">service details</p>
                                        </section>
                                        {/* <img src="https://assets.codepen.io/1025350/eleanor.jpg" alt="Eleanor from The Good Place" /> */}
                                    </div>
                                    <div className="home__services--service home__services--service-2">
                                    <section >
                                            <h2 className="home__services--service-title">Service One</h2>
                                            <p className="home__services--service-text">service details</p>
                                        </section>
                                    </div>
                                    <div className="home__services--service home__services--service-3">
                                    <section >
                                            <h2 className="home__services--service-title">Service One</h2>
                                            <p className="home__services--service-text">service details</p>
                                        </section>
                                    </div>
                                    <div className="home__services--service home__services--service-4">
                                    <section>
                                        <h2 className="home__services--service-title">Service One</h2>
                                            <p className="home__services--service-text">service details</p>
                                        </section>
                                    </div>
                                </div>
                               
                            </div>
                

                  
                   
                   
                </div>

                <section className="home__services--process">

                    <h3 className="home__services--process-title">
                        <span className="home__services--process-title-o">Our</span>
                        <span className="home__services--process-title-p">PrOcess</span>
                    </h3>

                    <ul class="process">
                    <li class="process__item">
                        <span class="process__number">1</span>
                        <span class="process__title">Drain &amp; Dispose</span>
                        <span class="process__subtitle">We first drain and dispose effluent water from both private and commercial property</span>
                    </li>

                    <li class="process__item">
                        <span class="process__number">2</span>
                        <span class="process__title">Sewage Removal  &amp; Disposal Sites</span>
                        <span class="process__subtitle">Here, we use the honey sucker tank to remove effluent or sewage water; and then soon after, we dispose the effluent water at the disposal site</span>
                    </li>

                    <li class="process__item">
                        <span class="process__number">3</span>
                        <span class="process__title">Client Enviromental License provision</span>
                        <span class="process__subtitle">On this stage, we provide our clients with the enviromental license of the waste water plant</span>
                    </li>

                    <li class="process__item">
                        <span class="process__number">4</span>
                        <span class="process__title">Septic Tank Inspection Advise</span>
                        <span class="process__subtitle">At this point, we help advise our clients on a possible future inspection period, which is ideally every 2 to 3 years. </span>
                    </li>
                    </ul>



                </section>

                <section>
                        <div className="service-style-images">
                            <div>
                                <img src="/img/service_behind_3.jpg" alt="Eleanor from The Good Place" />
                            </div>
                            <div>
                                <img src="/img/service_behind_1.jpg" alt="Chidi from The Good Place" />
                            </div>
                            <div>
                                <img src="/img/service_behind_4.jpg" alt="Jason from The Good Place" />
                            </div>
                            <div>
                                <img src="/img/service_behind_2.jpg" alt="Tahani from The Good Place" />
                            </div>
                    </div>
                </section>

               
                
                

            </div>
        )
    }

}


export default Services