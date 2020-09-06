
import React from 'react' 
import {Link} from 'react-router-dom';
import SlidingMenu from './slidingmenu'



class Primary extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        toggleMenu: false
      }
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      console.log('THE MENU BUTTON HAS BEEN CLICKED')
      console.log(this.state.toggleMenu);
      this.setState({toggleMenu: !this.state.toggleMenu});
    }

    componentDidUpdate(){

        const {toggleMenu} = this.state
        
    
        if(toggleMenu === true){
    
          document.body.style.overflow = 'hidden'
        //   document.body.style.pointerEvents ='none'
        //   document.body.style.opacity = '0.4'
    
        }else{
    
          document.body.style.overflow = 'visible'
        //   document.body.style.pointerEvents ='all'
        //   document.body.style.opacity = '1'
        }
       
      }

    componentWillMount(){

        document.body.style.overflow = 'visible'
    } 

    
    
    

   
    
    render(){
      let slideClass;
      this.state.toggleMenu
        ? slideClass = 'showMenu'
        : slideClass = 'hideMenu';
      
      return(
        <div className="header__menu--bars">
            <button style={{zIndex:9001,position:'relative',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                        }} 
                    onClick={this.handleClick}>
                            
              {
                  this.state.toggleMenu 
                  ? <span style={{
                           
                           color: 'white',
                           fontSize: `15px`
                        }} >x</span>
                   
                  : <p style={{marginTop:0,paddingTop: 0}}><span className="header__menu--bars-menubar-1"></span>
                  <span className="header__menu--bars-menubar-2"></span></p>
                  
              }
            
              
            </button>
            <SlidingMenu slideClass={slideClass} onClick={this.handleClick}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link> 
              <Link to="/services">Services</Link>
              <Link to="/faqs">Faqs</Link>
              <Link to="/privacy">Privacy</Link>
            </SlidingMenu>
        </div>
      );
    }
  }
  
export default Primary