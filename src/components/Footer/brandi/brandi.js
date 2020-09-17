
import React, { Component } from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
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

class Brand extends Component{


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

            const {actions,footer} = this.props

        
            return(

                <div className="footer__brand">

                    <section className="footer__brand-request"
                    data-aos="fade-up-right"
                    data-aos-delay="1000"
                    data-aos-duration="15000"
                    data-aos-easing="ease-in-out-cubic">
                        <button 
                            className="footer__brand-btn" 
                            onClick={this.openModal}
                        >Request Service</button>
                    </section>

                    <section className="footer__brand--sok">

                        <div className="footer__brand--sok-qrs">
                            <p className="footer__brand--squares footer__brand--squares-1" 
                            data-aos="zoom-out"
                            data-aos-delay="1000"
                            data-aos-duration="15000"
                            data-aos-easing="ease-in-out-cubic"></p>
                            <p className="footer__brand--squares footer__brand--squares-2" 
                            data-aos="zoom-out-left"
                            data-aos-delay="1500"
                            data-aos-duration="15000"
                            data-aos-easing="ease-in-out-cubic"></p>
                            <p className="footer__brand--squares footer__brand--squares-3" 

                            data-aos="zoom-out-right"
                            data-aos-delay="2000"
                            data-aos-duration="15000"
                            data-aos-easing="ease-in-out-cubic"></p>
                        </div>
                        <div className="footer__brand--sok-social">

                        <h3 className="footer__brand--social-mhead">Stay South Septic updated on Social</h3>
                                <h4 className="footer__brand--social-shead">Media</h4>

                            <section className="footer__brand--social">

                                

                                <nav className="footer__brand--social-nav" data-aos="fade"
                                        data-aos-delay="1200"
                                        data-aos-duration="10000"
                                        data-aos-easing="ease-in-out-cubic">
                                     <a href='https://www.facebook.com/southseptic/' target="_blank" className="link footer__brand-imgs-links">
                                        <img src="/img/social/facebook.png" className="footer__brand-imgs" />
                                    </a> 
                                    <a href='https://twitter.com/southseptic' target="_blank" className="link footer__brand-imgs-links">
                                        <img src="/img/social/twitter.png" className="footer__brand-imgs" />
                                    </a>
                                    <a href='https://www.instagram.com/southseptic' target="_blank" className="link footer__brand-imgs-links">
                                        <img src="/img/social/instagram.png" className="footer__brand-imgs" />
                                    </a>
                                </nav>

                            </section>
                            <strong className="clearfix" />
                        

                        </div>

                    

                    </section>
            

                    <section className="footer__brand--brand">

                

                    <div className="footer__brand-copy footer__brand-offsets">
                        <span className="mg-left-fl-bt font-fd-xx-tn fg-light">South Septic Tanks 2020</span>
                    
                    </div>
                    <div className="footer__brand-main footer__brand-offsets">
                        <nav>
                            <Link to='/about' className="link footer__brand-links">
                                About
                            </Link> 
                            <Link to='/services' className="link footer__brand-links">
                                Services
                            </Link>
                            <Link to='/contact' className="link footer__brand-links">
                                Contact
                            </Link>
                        </nav>
                    </div> 
                
                    <div className="footer__brand-info">
                        <nav>
                            <Link to='/faqs' className="link footer__brand-links footer__brand-hanging" 
                            >
                                Faqs
                            </Link> 
                            <Link to='/privacy' className="link footer__brand-links footer__brand-hanging"
                        >
                                Privacy
                            </Link>
                        
                        </nav>
                    </div>

                    <strong className="clearfix" />



                </section>


                <Modal
					isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                    scrollHeight={this.state.theposition}
					style={modalStyle}
				>


					<ServiceForm actions={actions} home={footer} />

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

                
            )
    }


	
	

}






export default Brand;





