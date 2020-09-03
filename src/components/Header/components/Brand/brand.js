
import React,{Component} from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
import { TweenLite, Power4 } from "gsap";


class Brand extends Component{

	constructor(props) {
		super(props);
        // reference to the DOM node
        this.numbBoxes = 40
        this.myElement = null
        // reference to the animation
        this.myTween = null 
        this.state = {
            shouldShowBoxes: true
        }
	  }

	  componentDidMount(){
        // use the node ref to create the animation
        // this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});

        TweenLite.from(".header__brand--app", 1,{duration: 100, x: 500, delay: 3, opacity: 0, scale: 0.5});

          
    }
	
       render(){

		return(


			<div className="header__brand--app" >

                <Link to='/' className="header__brand--app-name">

                    <img src="/img/slogo.png" className="header__brand--app-logo" />

                </Link>

                
			</div>

		)



	   }
		
	
	

}




export default Brand;





