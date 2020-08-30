
import React, {Component} from 'react' 
import {Link} from 'react-router-dom';


class ServiceReq extends  Component{


    constructor(props){

        super(props)

        
     
    }


    
   

    render(){

           
       

        return(

                    <section className="about__action">

                        <div class="section-slantedcard">
                                <div class="content-slantedcard">
                                    <div style={{position: "relative"}}>
                                        <div class="section-slantedcard-card section-slantedcard-bottom"></div>
                                        <div class="section-slantedcard-card section-slantedcard-top">
                                           
                                            <h3>Our Values</h3>
                                            <div class="content-slantedcard-text">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
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