
import React, {Component} from 'react' 
import {Link} from 'react-router-dom';


class ServiceReq extends  Component{


    constructor(props){

        super(props)

        
     
    }


    
   

    render(){

           
       

        return(

                    <section className="services__clients">

                        <div class="section-slantedcard">
                                <div class="content-slantedcard">
                                    <div style={{position: "relative"}}>
                                        <div class="section-slantedcard-card section-slantedcard-bottom"></div>
                                        <div class="section-slantedcard-card section-slantedcard-top">
                                           
                                            <h3 className="services__area-title">Our most active areas of operation</h3>
                                            <div class="content-slantedcard-text">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
                                            <section className="slide__buttonContainer services__area">

                                            <Link to="#" title="Button slide blue/green" class="button btnSlide btnBlueGreen">
                                                <span class="top" data-content="Slide">Austin</span>
                                                <span class="bottom" data-content="Slide">Glen</span>
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

                      
                    </section>

                    
               

             
             
           
        )
    }




}

export default ServiceReq