
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

                        <section className="home__passion--content-bx1">

                            <h2 className="home__passion--content-title">Waste Management</h2> 
                            <p className="home__passion--content-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis

                            </p>


                        </section> 

                        <section className="home__passion--content-bx2">

                            <h2 className="home__passion--content-title">Waste Disposal</h2> 
                            <p className="home__passion--content-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis

                            </p>


                        </section>


                        <section className="home__passion--pik">
                            <img src="/img/truck.jpg" className="home__passion--image" />
                        </section>

                       

                        
                    </div>
                

                  
                   
                   
                </div>
               
                

            </div>
        )
    }

}


export default Passion