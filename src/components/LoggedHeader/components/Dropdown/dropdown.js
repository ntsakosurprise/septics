
import React, {Component} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import ClickOutside from 'react-click-outside' 
import zIndex from '@material-ui/core/styles/zIndex';





class Dropdown extends Component{


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

    <div className="header__dropdown">

       {
         title &&

            <div className="dd-header" onClick={() => this.toggleList()}>

                <div className="dd-header-title">{headerTitle}</div>
            
            </div>


       }
        

        {
          activator && 

                  <div to='/' className=" cursor-pointer left-offset-fl-xx-tn link pos-rel d-block" onClick={() => this.toggleList()}>
                
                    <span className="bar bar-1"></span>
                    <span className="bar bar-2"></span>
                    <span className="bar bar-3"></span>
                            
                
                  </div>
        }
        {listOpen && 
        
            <ul className="header__dropdown--list header__dropdown--list-abs" style={{zIndex:2500}}>

                {
                    list.map((item) => (

                            <li className="header__dropdown--list-i" key={item.title} onClick={() => toggleItem(item.id, item.key)}>
                              <Link to={item.to} className="header__dropdown--list-i-link">
                                 {item.title} 
                              </Link>
                             
                            </li>
                        
                        ))
                        
                }
            </ul>
            
        }
    </div>
  )
}



}



export default ClickOutside(Dropdown)