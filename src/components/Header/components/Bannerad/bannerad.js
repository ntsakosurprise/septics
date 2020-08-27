
import React, {Component} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import ClickOutside from 'react-click-outside' 





class BannerAd extends Component{


    constructor(props){


        super(props)
        this.state = {
          listOpen: false,
          headerTitle: this.props.title
        }

      }

handleClickOutside(){

    if(this.state.listOpen){

      this.toggleList()

    }
    
}

toggleList(){

  this.setState(prevState => ({
    listOpen: !prevState.listOpen
  }))

}
render(){

  const{list,toggleItem,activator,title} = this.props
  const{listOpen, headerTitle} = this.state

  return(

    <div className="">

        I am the banner ad
        
    </div>
  )
}



}



export default ClickOutside(BannerAd)