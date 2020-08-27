
import React from 'react'


class Tooltip extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        displayTooltip: true
      }
      this.hideTooltip = this.hideTooltip.bind(this)
      this.showTooltip = this.showTooltip.bind(this)
    }
    
    hideTooltip () {
      this.setState({displayTooltip: false})
     
      
    }
    showTooltip () {
      this.setState({displayTooltip: true})
    }
  
    render() {
      let message = this.props.message
      let position = this.props.position 
      let active = this.props.active

      console.log('THE TOOLTIP IS RENDERED')
      return (
      
          active ? 
        //   this.state.displayTooltip ?

                <span className='tooltip' onMouseLeave={this.hideTooltip}>
                    <div className={`tooltip-bubble tooltip-${position}`}>
                        <div className='tooltip-message'>{message}</div>
                    </div>
                </span>
            
            : null

          

          
        //   {/* <span 
        //     className='tooltip-trigger'
        //     onMouseOver={this.showTooltip}
        //     >
        //     {this.props.children}
        //   </span> */}
        
      )
    }
  }

  export default Tooltip
  
//   class App extends React.Component {
//     render() {
//       return (
//         <div className='container'>
//           <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'top'}>tooltip</Tooltip> on top.</p>
//           <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'bottom'}>tooltip</Tooltip> on bottom.</p>
//           <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'left'}>tooltip</Tooltip> on left.</p>
//           <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'right'}>tooltip</Tooltip> on right.</p>
//         </div>
//       )
//     }
//   }
//   ReactDOM.render(
//     <App />,
//     document.getElementById('app')
//   )