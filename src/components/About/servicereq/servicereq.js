
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

class ServiceReq extends  Component{


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

           
        const {actions,about} = this.props


        return(

                    <section className="about__action">

                        <div class="section-slantedcard" 
                         data-aos="fade-up"
                         data-aos-delay="500"
                         data-aos-duration="15000"
                         data-aos-easing="ease-in-out-cubic">
                                <div class="content-slantedcard">
                                    <div style={{position: "relative"}}>
                                        <div class="section-slantedcard-card section-slantedcard-bottom"></div>
                                        <div class="section-slantedcard-card section-slantedcard-top">
                                           
                                            <h3>Our Values</h3>
                                            <div class="content-slantedcard-text">
                                                <p>South Septic values trust and satisfaction of its clients. To ensure that clients get the level of satisfaction they expect as we serve them, we give them a platform to freely express themselves to be able to communicate what they feel we need to do a certain way.</p>
                                            </div>
                                            <section className="slide__buttonContainer">

                                            <Link to="#" title="Button slide blue/green" class="button btnSlide btnBlueGreen"  onClick={this.openModal}>
                                                <span class="top" data-content="Slide">Service</span>
                                                <span class="bottom" data-content="Slide">Request a</span>
                                            </Link>

                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Modal
                                isModalOpen={this.state.isModalOpen}
                                closeModal={this.closeModal}
                                scrollHeight={this.state.theposition}
                                style={modalStyle}
                            >


                                <ServiceForm actions={actions} home={about} />

                                <button
                                    style={{
                                        ...mainStyle.button,
                                        margin: 0,
                                        width: "auto",
                                        marginTop: 10,
                                        width: `15rem`,
                                        marginTop: `30px`,
                                        marginLeft: `-2px`,
                                        cursor: 'pointer'
                                    }}
                                    onClick={this.closeModal}
                                >
                                    Close
                                </button>
                            </Modal>
            

                      
                    </section>

                    
               

             
             
           
        )
    }




}

export default ServiceReq