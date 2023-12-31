
import React,{Component} from 'react'
import { TweenLite,TweenMax, Power4,Linear,gsap } from "gsap";

// import Benefits from './benefits/benefits' 



class Septic extends Component{
    

    constructor(props){
        super(props);
        // reference to the DOM node
        // this.septic = null 
        // this.welcome = null 
        
        this.numbBoxes = 40
        this.myElement = null
        // reference to the animation
        this.myTween = null 
        this.state = {
            shouldShowBoxes: true,
            activeText: false,
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

        //   TweenMax.fromTo(".home__septic--banner", 1, {opacity: 0, duration: 3000, y: 50}, {opacity: 1, y: 0});

        //   gsap.fromTo(".home__septic--banner", {
        //     opacity: 0
        // }, {
        //     duration: 10,
        //     opacity: 1,
        //     ease: "Linear.ease",
        //     // scrollTrigger: {
        //     //     id: `section-${index+1}`,
        //     //     trigger: el,
        //     //     start: 'top center+=100',
        //     //     toggleActions: 'play none none reverse'
        //     // }
        // });

        //   TweenLite.fromTo(".home__septic--banner",1,{

        //     duration: 8,
        //     from: {opacity: 0},
        //     to: {opacity: 1},
        //     ease: "Linear.ease"
        //   }); 

          TweenLite.to(".home__septic--title", 1, {
            y: 60,
            yoyo: true,
            opacity: 1, 
            ease: "power1.inOut",
            delay:5,
            duration: 10
           
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
          this.startTextAnim()
         

          
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
                shouldShowBoxes: false,
                activeText: true,
            },()=>{

                console.log('TTHE TIMEOUT HAS EXECTUED')
                console.log(this.state.shouldShowBoxes)
            })
        }.bind(this),11000)
    }

    startTextAnim(){

        setTimeout(function(){

            this.setState({
                activeText: true,
            },()=>{

                this.animateWelcomeText()
            })
        }.bind(this),10000) 
    }
    

    animateWelcomeText(){

      
        setInterval(function(){

            const {activeText} = this.state 
           
    

            // let active = ''
            // if(this.state.activeText === 'septic'){

            //     active = 'welcome'

            // }else{

            //     active = 'septic'
            // }

            this.setState({
                activeText: !activeText
            })
        }.bind(this),5000)
    }


    // killAnimation(){

    //     this.TweenLite.kill 

    //     return null
    // }
    
    render(){

        const {state} = this 
        const anStyles = {

            ["data-aos"]:"fade",
            ["data-aos-delay"]: "1000",
            ["data-aos-duration"]:"10000",
            ["data-aos-easing"]: "ease-in-out-cubic"

        }

        const aStyles = {

            ["data-aos"]:"fade",
            ["data-aos-duration"]:"20000",
            ["data-aos-easing"]: "ease-in-out-cubic"

        }

        console.log('THE COMPONENT HAS RERENDERED')
        console.log(state)
        console.log(state.shouldShowBoxes)
        return(

            <div className="home__septic">
                
                
                <section className="home__septic--welcome">
                    
                    {/* <span className="home__septic--welcome-text">Welcomes you</span> */}

                    <div class="welcome-text" data-aos="fade-up-right" data-aos-delay="1000">
                        {/* <div className={state.activeText ? 'text__line text__line__hover' : "text__line"}>
                            <p className="first__match_1">South</p>
                            <p className="first__match_2">Welcomes</p>
                        </div>
                        <div className={state.activeText ? 'text__line text__line__hover' : "text__line"}>
                            <p className="first__match_1">Septic</p>
                            <p className="first__match_2">You</p>
                        </div> */}

                        <div className="stext">
                            <div className="stext__textslider--outer">
                                <div className="stext__textslider--inner">
                                <p>South Septic</p>
                                <p>Welcomes you</p>
                               
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <section className="home__septic--standout-text">
                        <p>
                       
                        South Septic PTY Limited is a sewage removal company that focuses on emptying septic tanks 
                        using a truck fitted with a vacuum system to effectively pump out sewage waste.
                        <span className="home__septic--standout-text-bar1"></span>
                        <span className="home__septic--standout-text-bar2"></span>
 


                        </p>
                    </section>


                </section>


                
                <section className={"home__septic--banner "+(state.shouldShowBoxes ? "" : " home__septic--clipedBanner")}
                  {...aStyles}
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
               { state.shouldShowBoxes === false 
                ? <h2 className="home__septic--title" {...anStyles}>
                        {/* <span className="home__septic--title-text-we">
                            <small>enviromentally</small><small className="home__septic--title-text-l">e</small>
                        </span> */}
                        <span  className="home__septic--title-text home__septic--title-text-ar">
                            <small>enviromentally</small>
                        </span> 
                        <span  className="home__septic--title-text home__septic--title-text-a">
                            <small>Friendly</small>
                        </span>
                        <span  className="home__septic--title-text home__septic--title-text-w">
                            <small>Waste</small>
                        </span>
                        <span  className="home__septic--title-text home__septic--title-text-b">
                            <small>Management</small>
                        </span>
                        
                        
                    </h2>
                : null }

                <figure className="home__septic--fig ">
                    <img 
                        src="/img/tank_s1.jpg" 
                        className="home__septic--pik"
                        data-aos="fade"
                        data-aos-delay="1000"
                        data-aos-duration="6000"
                        data-aos-easing="ease-in-out-cubic" alt="Southseptic-welcome-image" /> 
                    <span className="home__septic--rec"></span>
                    <span className="home__septic--rec-2"></span>
                    <span className="home__septic--rec-3"></span>
                    <span className="home__septic--rec-4"></span>

                </figure>

                <div className="home__septic--shaderect"></div>
                <div className="home__septic--shaderect-2"></div> 

                <figure className="home__septic--fig-2 ">
                    <img 
                        src="/img/gala_4.jpg" 
                        className="home__septic--pik-2"
                        data-aos="fade"
                        data-aos-delay="1000"
                        data-aos-duration="6000"
                        data-aos-easing="ease-in-out-cubic" alt="Southseptic-welcome-image" /> 
                    <span className="home__septic--rec"></span>
                    <span className="home__septic--rec-2"></span>
                    <span className="home__septic--rec-3"></span>
                    <span className="home__septic--rec-4"></span>

                </figure>


                <section className="home__septic--about">
                    <h1>

                        <span>Ab</span>
                        <span>ou</span>
                        <span style={{
                            display: "inline-block",
                            marginRight: '3rem'
                            }}>t</span>
                        <span>u</span>
                        <span>s</span>
                    
                    </h1>
                </section>
                           
                
               
                

            </div>
        )
    }

}


export default Septic