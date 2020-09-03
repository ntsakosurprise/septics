
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
                                    <h3>Residential </h3>
                                    <p> SouthSeptic recognises the need and use of Septic  tanks in residential areas and has aligned it's services to   better serve this niche of the septic tanks market. </p>
                                    <section className="slide__buttonContainer">

                                            <Link to="#" title="Button slide blue/green" class="button btnSlide btnBlueGreen">
                                                <span class="top" data-content="Slide">Service</span>
                                                <span class="bottom" data-content="Slide">Request a</span>
                                            </Link>

                                    </section>
                                    </div>
                                </div>
                                <div class="cardBox">
                                    <div class="content">
                                    <h2>02</h2>
                                    <h3>Commercial </h3>
                                    <p>A damaged septic tank could mean a loss of revenue for your commercial property, whichever line of business you are in, our services can help you eliminate problems that may be caused by your septic tanks</p>
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
                                Our main areas of operation
                            </h3>

                        </div>
                      
                    </section>

                    
               

             
             
           
        )
    }




}

export default Im