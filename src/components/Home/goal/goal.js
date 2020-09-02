
import React,{Component} from 'react'
import Modal from '../modal'
import ServiceForm from '../serviceform/serviceform'
// import Benefits from './benefits/benefits' 

// overwrite style
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

class Goal extends Component{


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
                                <section className="home__goal--become" onClick={this.openModal}>
                                    <span className="home__goal--become-b">Become</span>
                                    <span className="home__goal--become-o">our client</span>
                                </section>
                            </div>

                            {/* <button style={mainStyle.button} onClick={this.openModal}>
					Open modal
				</button> */}

				<Modal
					isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                    scrollHeight={this.state.theposition}
					style={modalStyle}
				>


					<ServiceForm />

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

                         
                        </div>

                    </section> 

                 
                   
                </div>
               
                

            </div>
        )
    }

}


export default Goal