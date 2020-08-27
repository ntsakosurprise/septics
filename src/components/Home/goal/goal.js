
import React,{Component} from 'react'
// import Benefits from './benefits/benefits' 



class Goal extends Component{
    
    
    render(){

        return(

            <div className="home__goal">


                <p className="home__goal--text">
                    
                    <span className="home__goal--text-txt">Our Goal</span>
                </p>


                
                <div>

                    
                    <section className="home__goal-video">
                           
                        <video className="home__goal-vid" loop autoPlay muted playsinline>
                            <source src="/video/septicwater.webm" />
                            <source src="/video/septicwater.mp4" />
                        </video>

                      
                    </section>

                    <section class="home__goal-overlay">

                        <div class="home__goal-overlay-inner">
                            
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis

                            </p>

                            <div className="home__goal--squares-container">
                                <span className="home__goal--squares home__goal--squares-1"></span>
                                <span className="home__goal--squares home__goal--squares-2"></span>
                                <span className="home__goal--squares home__goal--squares-3"></span>
                                <section className="home__goal--become">
                                    <span className="home__goal--become-b">Become</span>
                                    <span className="home__goal--become-o">our client</span>
                                </section>
                            </div>
                        </div>

                    </section>
                   
                   
                </div>
               
                

            </div>
        )
    }

}


export default Goal