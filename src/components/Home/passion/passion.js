
import React,{Component} from 'react'
// import Benefits from './benefits/benefits' 



class Passion extends Component{
    
    
    render(){

        return(

            <div className="home__passion">


                <p className="home__passion--text">
                    
                    <span className="home__passion--text-txt">Our passion</span>
                </p>


                
                <div>
                            
                    <div className="home__passion--content">

                        <section className="home__passion--content-bx1"  data-aos="fade"
                                    data-aos-delay="500"
                                    data-aos-duration="5000"
                                    data-aos-easing="ease-in-out-cubic">

                            <h2 className="home__passion--content-title">Honey Sucker Services</h2> 
                            <p className="home__passion--content-text">
                            We enjoy hygienically clean environments,and although our work expose us to an array of germs,
                            the love we have for collecting waste to mantain good hygiene is intense

                            </p>

                            <p className="home__passion--content-text">
                           
                            We have a lot fun while we do our work,in addition, 
                            SouthSeptic uses equipment that protects Its employees against possible risks while rendering services. 
                            </p>


                        </section> 

                        <section className="home__passion--content-bx2">

                            <h2 className="home__passion--content-title">Septic Tank Pumping</h2> 
                            <p className="home__passion--content-text">
                            A clean environment is important in improving everyone's well being and reducing the possible threats to people's fragile health.
                            </p>

                            <p className="home__passion--content-text">
                            
                            we love septic tank pumping to protect you against an array of things including bacteria that may occur if the septic tank is not pumped.


                            </p>


                        </section>


                        <section className="home__passion--pik"  data-aos="fade"
                                 
                                    data-aos-duration="7000"
                                    data-aos-easing="ease-in-out-cubic">
                            <img src="/img/truck.jpg" className="home__passion--image" />
                        </section>

                       

                        
                    </div>
                

                  
                   
                   
                </div>
               
                

            </div>
        )
    }

}


export default Passion