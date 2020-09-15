
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
                                    SouthSeptic has made it its mandatory business trait to provide  reliable services to its clients all the time. 
                                    Our goal is to remain reliable to our clients all the time. 

                                    </p>

                                    <p>
                                    To ensure that your needs as our client are met on every level, we use equipment such as trucks that are equipped with the necessary
                                     tools that help us render greater services.
                                    </p>

                                    <p>
                                    The input of our clients is of higher value to us,and we are always open to their commands should there be any; 
                                    this helps us ensure that we leave our clients happy and satisfied.
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