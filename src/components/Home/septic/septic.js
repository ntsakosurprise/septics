
import React,{Component} from 'react'
import { TweenLite, Power4 } from "gsap";
// import Benefits from './benefits/benefits' 



class Septic extends Component{
    

    constructor(props){
        super(props);
        // reference to the DOM node
        this.numbBoxes = 40
        this.myElement = null
        // reference to the animation
        this.myTween = null 
        this.state = {
            shouldShowBoxes: true
        }
       
    }

    componentDidMount(){
        // use the node ref to create the animation
        // this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});

        TweenLite.to(".gsapbox", 1, {
            scale: 0.1, 
            y: 60,
            yoyo: true, 
            repeat: 3, 
            ease: "power1.inOut",
            delay:3,
            stagger: {
              amount: 1.5, 
              grid: "auto",
              from: "center"
            }
          });

          TweenLite.set(".gsapbox",{
            scale: 0.1, 
            stagger: {
              amount: 1.5, 
              grid: "auto",
              from: "center"
            }
          });

          this.cancellAnimation()
    }


    createBoxes(){

        let boxes = []
        for(let b=0; b < this.numbBoxes; b++){

            boxes.push(<div className="gsapbox gsapred" key={b}></div>)
             
        }

        return boxes
    }

    cancellAnimation(){

        setTimeout(function(){

            this.setState({
                shouldShowBoxes: false
            },()=>{

                console.log('TTHE TIMEOUT HAS EXECTUED')
                console.log(this.state.shouldShowBoxes)
            })
        }.bind(this),50000)
    }

    // killAnimation(){

    //     this.TweenLite.kill 

    //     return null
    // }
    
    render(){

        const {state} = this

        console.log('THE COMPONENT HAS RERENDERED')
        console.log(state)
        console.log(state.shouldShowBoxes)
        return(

            <div className="home__septic">


                <section className="home__septic--welcome">
                    
                    {/* <span className="home__septic--welcome-text">Welcomes you</span> */}

                    <div class="text welcome-text" data-aos="fade-up-right" data-aos-delay="1000">
                        <div class="text__line">
                            <p>South</p>
                            <p>Welcomes</p>
                        </div>
                        <div class="text__line">
                            <p>Septic</p>
                            <p>You</p>
                        </div>
                        
                    </div>

                </section>


                
                <section className={"home__septic--banner "+(state.shouldShowBoxes ? "" : " home__septic--clipedBanner")}
                    
                    >
                    
                    {state.shouldShowBoxes ? this.createBoxes() : null}
                </section> 

                <section className="home__septic--pledge">

                    <h2 className="home__septic--pledge-title">
                        <span className="home__septic--pledge-title-o">O</span><span  className="home__septic--pledge-title-u">ur</span> 
                        <span className="home__septic--pledge-title-s">Services</span> 
                        <span className="home__septic--pledge-title-p">Pledge</span>
                    </h2>

                    <ul className="home__septic--pledge-list">
                        <li>Reliable service </li> 
                        <li>Affordable prices for our services </li> 
                        <li>Attentive to our clients' needs</li>
                        <li>Proper equipment for septic tank pumping.</li>
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
                    <img 
                        src="/img/banner_1.jpg" 
                        className="home__septic--pik"
                        data-aos="fade"
                        data-aos-delay="3000"
                        data-aos-duration="10000"
                        data-aos-easing="ease-in-out-cubic" /> 
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