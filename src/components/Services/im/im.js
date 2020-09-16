
import React, {Component} from 'react' 
import {Link} from 'react-router-dom';

import Modal from '../modal'
import ServiceForm from '../serviceform/serviceform'


const modalStyle = {
	overlay: {
        backgroundColor: "rgba(0, 0, 0,0.5)",
        zIndex: 10001
    },
    

};

const mainStyle = {
	app: {
		margin: "120px 0"
	},
	button: {
		backgroundColor: "#408cec",
		border: 0,
		padding: "12px 20px",
		color: "#fff",
		margin: "0 auto",
		width: 150,
		display: "block",
		borderRadius: 3
	}
};


class Im extends  Component{


    constructor(props) {

        super(props);

        // set initial state
        this.state = {
            isModalOpen: false,
            isInnerModalOpen: false,
            thePositionScrolled: 0
        };

        // bind functions
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }

    //   componentWillUnmount() {
    //     window.removeEventListener('scroll', this.listenToScroll)
    //   }
      
      listenToScroll = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop 
        console.log('THE SCROLLLHEIGH VALUE')
        console.log(winScroll)

        winScroll += 50
      
        // const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      
        // const scrolled = winScroll / height
      
        this.setState({
          theposition: winScroll,
        })
      }

    // close modal (set isModalOpen, true)
    closeModal() {
        this.setState({
            isModalOpen: false
        });
    }

    // open modal (set isModalOpen, false)
    openModal() {
        this.setState({
            isModalOpen: true
        });
    }
    
    componentDidUpdate(){

        const {state} = this 
        const {isModalOpen} = state
        
        if(isModalOpen){
    
          document.body.style.overflow = 'hidden'
        //   document.body.style.pointerEvents ='none'
        //   document.body.style.opacity = '0.4'
    
        }else{
    
          document.body.style.overflow = 'visible'
        //   document.body.style.pointerEvents ='all'
        //   document.body.style.opacity = '1'
        }
       
      }
    

    
   

    render(){

        const {actions,services} = this.props
       

        return(

                    <section className="services__im">

                       <div className="services__im--lg">
                            <section class="cardContainer">

                                <div class="cardBox">
                                    <div class="content">
                                    <h2>01</h2>
                                    <h3>Residential </h3>
                                    <p> South Septic recognises the need and use of Septic  tanks in residential areas and has aligned its services to better serve this niche of the septic tanks market. </p>
                                    <section className="slide__buttonContainer">

                                            <Link to="#" title="Button slide blue/green" 
                                            class="button btnSlide btnBlueGreen"
                                            onClick={this.openModal}>
                                                <span class="top" data-content="Slide">Service</span>
                                                <span class="bottom" data-content="Slide">Request a</span>
                                            </Link>

                                    </section>
                                    </div>
                                </div>
                                <div class="cardBox">
                                    <div class="content">
                                    <h2>02</h2>
                                    <h3>Commercial </h3>
                                    <p>A damaged septic tank could mean a loss of revenue for your commercial property. Whichever line of business you are in, our services can help you eliminate problems that may be caused by your septic tanks.</p>
                                    <section className="slide__buttonContainer">

                                            <Link to="#" title="Button slide blue/green" 
                                            class="button btnSlide btnBlueGreen"
                                            onClick={this.openModal}>
                                                <span class="top" data-content="Slide">Service</span>
                                                <span class="bottom" data-content="Slide">Request a</span>
                                            </Link>

                                    </section>
                                    </div>
                                </div>
                                
                                
                            </section>

                            <h3 className="services__im--lg-title">
                                Our main areas of operation
                            </h3>

                        </div>


                        <Modal
					isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                    scrollHeight={this.state.theposition}
					style={modalStyle}
				>


					<ServiceForm actions={actions} home={services} />

					<button
						style={{
							...mainStyle.button,
							margin: 0,
							// width: "auto",
                            // marginTop: 10,
                            // width: `15rem`,
                            // marginTop: `30px`,
                            // marginLeft: `-2px`,
                            // cursor: 'pointer'
						}}
                        onClick={this.closeModal}
                        className="service__modal--close-btn"
					>
						Close
					</button>
				</Modal>
                      
                    </section>

                    
               

             
             
           
        )
    }




}

export default Im