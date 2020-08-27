
import React,{Component} from 'react'
// import Benefits from './benefits/benefits' 



class Septic extends Component{
    
    
    render(){

        return(

            <div className="home__septic">


                <section className="home__septic--welcome">
                    
                    <span className="home__septic--welcome-text">Welcomes you</span>

                </section>


                
                <section className="home__septic--banner"></section> 

                <section className="home__septic--pledge">

                    <h2 className="home__septic--pledge-title">
                        <span className="home__septic--pledge-title-o">O</span><span  className="home__septic--pledge-title-u">ur</span> 
                        <span className="home__septic--pledge-title-s">Services</span> 
                        <span className="home__septic--pledge-title-p">Pledge</span>
                    </h2>

                    <ul className="home__septic--pledge-list">
                        <li>Quality Service</li> 
                        <li>Reliable Partner</li> 
                        <li>Reliable Partner</li>
                        <li>Reliable Partner</li>
                    </ul>

                </section> 
                <strong className="clearfix"></strong>
                <h2 className="home__septic--title">
                    <span className="home__septic--title-text-we">
                        <small>W</small><small className="home__septic--title-text-l">e</small>
                    </span>
                    <span  className="home__septic--title-text home__septic--title-text-ar">
                        <small>are</small>
                    </span> 
                    <span  className="home__septic--title-text home__septic--title-text-a">
                        <small>a</small>
                    </span>
                    <span  className="home__septic--title-text home__septic--title-text-w">
                        <small>Waste management</small>
                    </span>
                    <span  className="home__septic--title-text home__septic--title-text-b">
                        <small>business</small>
                    </span>
                    
                    
                </h2>

                <figure className="home__septic--fig">
                    <img src="/img/banner_1.jpg" className="home__septic--pik" /> 
                    <span className="home__septic--rec"></span>
                    <span className="home__septic--rec-2"></span>
                    <span className="home__septic--rec-3"></span>
                    <span className="home__septic--rec-4"></span>

                </figure>

                <div className="home__septic--shaderect"></div>
                <div className="home__septic--shaderect-2"></div> 

                <section className="home__septic--about">
                    <h1>

                        <span>Ab</span>
                        <span>ou</span>
                        <span>t</span>
                        <span>u</span>
                        <span>s</span>
                    
                    </h1>
                </section>
                           
                
               
                

            </div>
        )
    }

}


export default Septic