
import React, {Component} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import ClickOutside from 'react-click-outside' 





class Dropdown extends Component{


    constructor(props){


        super(props)
        this.state = {
          listOpen: false,
          headerTitle: this.props.title
        }

      }

handleClickOutside(e){

  const {hideDropDown} = this.props
  hideDropDown(e)
    
}

// toggleList(){

//   this.setState(prevState => ({
//     listOpen: !prevState.listOpen
//   }))

// }
render(){

  console.log('THE DROPDOWN LIST')

  const {handleClickOutside} = this
  const {list,hideDropDown} = this.props
 
  console.log('THE VALUE OF DROPDOWN')
  console.log(hideDropDown)

  console.log(list)

  return(

    <div className="header__dropdown" onClick={handleClickOutside.bind(this)}>

      
        

       
      
        
            <ul className="drdown">

                {
                    list.map((item,i) => (

                            <li className="drdown__i" key={i} onClick={(e) => hideDropDown(e,i)}>
                              {/* <Link to={item.to} className="drdown__i-link">
                                
                              </Link> */}

                                {item.title} 
                             
                            </li>
                        
                        ))
                        
                }
            </ul>
            
        
    </div>
  )
}



}



export default ClickOutside(Dropdown)