

import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Notifications from '@material-ui/icons/Notifications';
import Modal from 'react-modal'; 
import Form from './form'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '60%',
    padding               : 0,
    border                : 'none',
    background            : 'none',
    borderRadius          : 0
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')
 

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.3)'

class AlertModal extends Component{


  constructor(props){
    super(props)
    this.state ={
      modalIsOpen: false
    }
  }
  // const [modalIsOpen,setIsOpen] = React.useState(false);
  openModal(){
    this.setState({...this.state,modalIsOpen: true})
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  closeModal(){
    console.log('THE VALUE OF THIS')
    console.log(this)
    console.log(this.setState)
    this.setState({...this.state,modalIsOpen: false})
  }
 
    render(){

    
    const {state,props,closeModal,openModal,afterOpenModal} = this 
    const {modalIsOpen} = state 
    const {search,auth,actions} = props 
    // const {searchy} = search 
    const {jq} = search

    return (
      <div>
          <div className="job__jobs--lt-alert" onClick={openModal.bind(this)}>

            <span className="job__jobs--lt-alert-i">
                <Icon>
                    <Notifications />
                </Icon>
            </span>

            <span className="job__jobs--lt-alert-text"  >
              Email me jobs like this                     
            </span>


          </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        

            <section className="alert__modal">

              <article className="alert__modalcontainer">

                  <div className="alert__modalbody">
                  
                    <h2>Be the first to immediately know when {jq} jobs ship</h2>
                    <section>
                      <Form auth={auth} closeModal={closeModal.bind(this)} actions={actions} />
                    </section>

                  </div>
                  
              </article>

              <div className="alert__modalfootr bx-raised-1">

                <section className="alert__modalfootr--container">

                  <div className="alert__modalfootr--policy">
                    <p>By creating a job alert, you agree to Jobbri’s terms of use and privacy policy.</p>
                  </div>
                  <button className="alert__modalfootr--cancel" onClick={closeModal.bind(this)}>Cancel</button>

                </section>

                <section className="alert__modalfootr--discover">
                  <p>We’ll help you discover great job opportunities</p>
                </section>
                

              </div>
            </section>

        
 
         
          
        </Modal>
      </div>
    )
  
  }
}
 
export default AlertModal