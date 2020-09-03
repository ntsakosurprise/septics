
import React,{Component} from 'react'
// import Benefits from './benefits/benefits' 



class Pledge extends Component{
    
    
    render(){

        return(

            <div className="home__pledge">


                <p className="home__pledge--text" 
                                    data-aos="fade"
                                    data-aos-delay="500"
                                    data-aos-duration="5000"
                                    data-aos-easing="ease-in-out-cubic">
                    
                    <span className="home__pledge--text-txt">Our pledge</span>
                </p>

                


                
                <div>

                    
                   
                  

                      
                            <h2 className="home__pledge--title">
                                <span className="home__pledge--title-primary">South Septic</span> 
                                <span className="home__pledge--title-secondary">Waste Disposal</span>
                                <small className="home__pledge--circle-1"></small>
                                <small className="home__pledge--circle-2"></small>
                            </h2>
                           
                            <div className="home__pledge--content">

                                <p className="home__pledge--content-text"  data-aos="fade"
                                    data-aos-delay="500"
                                    data-aos-duration="5000"
                                    data-aos-easing="ease-in-out-cubic">
                                Our clients form an imperative part of our business and associated services,
                                as a result,we promise to be always open to their needs and suggestions,and if any complaints arise,
                                we will do our best to ensure that they are timely addressed and to the satisfaction of our clients.

                                </p>

                               
                            </div>
                

                  
                   
                   
                </div>
               
                

            </div>
        )
    }

}


export default Pledge