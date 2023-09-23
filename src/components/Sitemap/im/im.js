
import React, {Component} from 'react' 
import {Link} from 'react-router-dom';


class Im extends  Component{


    constructor(props){

        super(props)

        
     
    }


    
   

    render(){

           
       

        return(

                    <section className="services__im">

                       <div className="services__im--lg">
                            <section class="cardContainer">

                                <div class="cardBox">
                                    <div class="content">
                                    <h2>01</h2>
                                   
                                    <p> If you have questions related to septic tanks,our FAQs may help you find the information you need.</p>
                                    <section className="slide__buttonContainer">

                                            <Link to="#" title="Button slide blue/green" class="button btnSlide btnBlueGreen">
                                                <span class="top" data-content="Slide">Service</span>
                                                <span class="bottom" data-content="Slide">Request a</span>
                                            </Link>

                                    </section>
                                    </div>
                                </div>
                                
                                
                                
                            </section>

                            <h3 className="services__im--lg-title">
                                Our Frequently Asked Questions
                            </h3>

                        </div>
                      
                    </section>

                    
               

             
             
           
        )
    }




}

export default Im