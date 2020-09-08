
import React,{Component} from 'react'



class Gallery extends Component{
    
    
    render(){

        return(

            <div className="home__gallery">

                <h4 className="home__gallery--title">
                    <span className="home__gallery--title-tx1"><small>Our Mini Gallery</small></span>
                    <span className="home__gallery--title-tx2"></span>
                </h4>

                <section className="home__gallery--container">
                    <figure className="home__gallery--fig home__gallery--f1">
                        <img 
                            src="/img/gala_2.jpg" 
                            className="home__gallery--pik"
                            data-aos="fade"
                            data-aos-delay="1000"
                            data-aos-duration="6000"
                            data-aos-easing="ease-in-out-cubic" alt="Southseptic-gallery-image" /> 
                    </figure>

                    <figure className="home__gallery--fig home__gallery--f2">
                        <img 
                            src="/img/gala_1.jpg" 
                            className="home__gallery--pik"
                            data-aos="fade"
                            data-aos-delay="1000"
                            data-aos-duration="6000"
                            data-aos-easing="ease-in-out-cubic" alt="Southseptic-gallery-image" /> 
                    </figure>

                    <figure className="home__gallery--fig home__gallery--f3">
                        <img 
                            src="/img/gala_3.jpg" 
                            className="home__gallery--pik"
                            data-aos="fade"
                            data-aos-delay="1000"
                            data-aos-duration="6000"
                            data-aos-easing="ease-in-out-cubic" alt="Southseptic-gallery-image" /> 
                    </figure>

                    {/* <figure className="home__gallery--fig home__gallery--f4">
                        <img 
                            src="/img/gala_4.jpg" 
                            className="home__gallery--pik"
                            data-aos="fade"
                            data-aos-delay="1000"
                            data-aos-duration="6000"
                            data-aos-easing="ease-in-out-cubic" alt="Southseptic-gallery-image" /> 
                    </figure> */}
                </section>

               
            </div>
        )
    }

}


export default Gallery