import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Msg = ({ closeToast }) => (
  <div>
    Lorem ipsum dolor
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
)


class ToastNotify extends Component {
  

    constructor(props){

      super(props)
    }
     
    runNotification = () => {

      const {config} = this.props 
      const {message} = config 
      const type = config.type || 'info'
      console.log('THE RUNNOTIFICATION')
      console.log(message)
      console.log(config)
      return toast[type](message,{...config});
    }
    // notifyB = () => toast.info('Wow so easy PLAYER!', {position: toast.POSITION.BOTTOM_CENTER,});
 
    render(){

      const {config} = this.props 
      console.log('THE TOASNOTIFY')
      console.log(config)
      return (
        // <div>
        //     {/* <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_CENTER} />
        //     <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} /> */}
     
        //     <button onClick={this.notifyA}>Notify A !</button>
        //     <button onClick={this.notifyB}>Notify B !</button>  
        //     <button onClick={() => toast(<Msg />)}>Hello 😀</button>
                        
        // </div>

       <div>
         {config ? this.runNotification() : null}
      </div>
      );
    }
}

export default ToastNotify