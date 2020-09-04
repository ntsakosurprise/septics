
import React, {Component} from 'react' 
import {Link} from 'react-router-dom';


class ServiceReq extends  Component{


    constructor(props){

        super(props)

        
     
    }


    
   

    render(){

           
       

        return(

                    <section className="about__action">

                        <div class="section-slantedcard" 
                         data-aos="fade-up"
                         data-aos-delay="500"
                         data-aos-duration="15000"
                         data-aos-easing="ease-in-out-cubic">
                                <div class="content-slantedcard">
                                    <div style={{position: "relative"}}>
                                        <div class="section-slantedcard-card section-slantedcard-bottom"></div>
                                        <div class="section-slantedcard-card section-slantedcard-top">
                                           
                                            <h3>Our Values</h3>
                                            <div class="content-slantedcard-text">
                                                <p>SouthSeptic values trust and satisfaction of its clients. To ensure that clients get the level of satisfaction they expect as we serve them, we give them a platform to freely express themselves inorder to communicate anything they feel we need to do a certain way.</p>
                                            </div>
                                            <section className="slide__buttonContainer">

                                            <Link to="#" title="Button slide blue/green" class="button btnSlide btnBlueGreen">
                                                <span class="top" data-content="Slide">Service</span>
                                                <span class="bottom" data-content="Slide">Request a</span>
                                            </Link>

                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>

                      
                    </section>

                    
               

             
             
           
        )
    }




}

export default ServiceReq