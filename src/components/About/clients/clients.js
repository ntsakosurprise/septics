
import React, {Component} from 'react' 


class Clients extends  Component{


    constructor(props){

        super(props)

        
     
    }


    
   

    render(){

           
       

        return(

                    <section className="about__clients">

                        <div className="about__clients--promise">
                            <h2 className="about__clients--promise-title">
                                <span className="about__clients--promise-title-primary">to</span> 
                                <span className="about__clients--promise-title-secondary">Our</span>
                                <span className="about__clients--promise-title-secondary">Clients</span>
                                <small className="contact__touch--circle-1"></small>
                                <small className="contact__touch--circle-2"></small>
                            
                            </h2>

                            <p>We are all about you, and here to serve you so please...
                            </p>

                        </div> 

                       <div className="about__clients--service">
                            <div className="about__bio--dd">

                
                                <h4>Reliable Service</h4>
                                <div>

                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua.


                                    </p>

                                </div>



                            </div>
                       </div>

                      
                       <strong className="clearfix" />
                    </section>

                    
               

             
             
           
        )
    }




}

export default Clients