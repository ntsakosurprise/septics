
import React, {Component} from 'react' 
import {Link} from 'react-router-dom';


class ServiceReq extends  Component{


    constructor(props){

        super(props)

        
     
    }


    
   

    render(){

           
       

        return(

                    <section className="services__clients">

                        <div class="section-slantedcard" 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="15000"
                        data-aos-easing="ease-in-out-cubic">
                                <div class="content-slantedcard">
                                    <div style={{position: "relative"}}>
                                        <div class="section-slantedcard-card section-slantedcard-bottom"></div>
                                        <div class="section-slantedcard-card section-slantedcard-top">
                                           
                                            <h3 className="services__area-title">Our most active areas of operation</h3>
                                            <div class="content-slantedcard-text">
                                                <p>Although not limited to other areas, SouthSeptic's business currently revolves around areas surrounding Midrand. Our aim is to be able to serve all areas around Gauteng in due time. We want to be the best provider of Septic tank pumping services in Gauteng.</p>
                                            </div>
                                            <section className="slide__buttonContainer services__area">

                                            <Link to="#" title="Button slide blue/green" class="button btnSlide btnBlueGreen">
                                                <span class="top" data-content="Slide">Pretoria</span>
                                                <span class="bottom" data-content="Slide">Request</span>
                                            </Link>

                                            </section> 
                                            <section className="slide__buttonContainer services__area">

                                            <Link to="#" title="Button slide blue/green" class="button btnSlide btnBlueGreen">
                                                <span class="top" data-content="Slide">Centurion</span>
                                                <span class="bottom" data-content="Slide">Request</span>
                                            </Link>

                                            </section> 

                                            <section className="slide__buttonContainer services__area">

                                                <Link to="#" title="Button slide blue/green" class="button btnSlide btnBlueGreen">
                                                    <span class="top" data-content="Slide">Raslouw</span>
                                                    <span class="bottom" data-content="Slide">Request</span>
                                                </Link>

                                            </section> 

                                            <section className="slide__buttonContainer services__area">

                                                <Link to="#" title="Button slide blue/green" class="button btnSlide btnBlueGreen">
                                                    <span class="top" data-content="Slide">Mnandi</span>
                                                    <span class="bottom" data-content="Slide">Request</span>
                                                </Link>

                                            </section>

                                            <strong className="clearfix" />

                                          
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <section className="locations-loks">

                                                
                                   

                                <div className="story__col-lg-3">
                                    <button className="story__lo-btn story__btn2">Johannesburg</button>
                                </div>

                                <div className="story__col-lg-3">
                                    <button className="story__lo-btn story__btn3">Kyalami</button>
                                </div>

                                <div className="story__col-lg-3">
                                    <button className="story__lo-btn story__btn3">Glen Austin</button>
                                </div>



                                <div className="story__col-lg-3">
                                    <button className="story__lo-btn story__btn3">Brits</button>
                                </div>

                                <div className="story__col-lg-3">
                                    <button className="story__lo-btn story__btn3">Hartebeespoort</button>
                                </div>


                            </section>



                      
                    </section>

                    
               

             
             
           
        )
    }




}

export default ServiceReq