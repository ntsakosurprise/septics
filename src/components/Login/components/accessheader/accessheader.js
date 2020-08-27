
import React,{Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

class AccessHeader extends Component{
    
    
    render(){

        return(

           

                
                <div  className="access__header--container">
                      
                    <section className="access__header bx-shadow-dark">

                        <span className="access__header--signup">Sign up</span>
                        <span className="access__header--vbar"></span>
                        <span className="access__header--signin">Sign in</span>

                    </section>

                    <section className="access__header--with bx-raised-1">
                        <span>With</span>
                    </section>

                    <span className="access__header--withbar"></span>

                    <section className="access__header--social bx-raised-1">

                        <Link to="https://www.facebook.com/"  className="access__header--social-1 link">
                            <img className="access__header--social-img" src="/img/social/facebook.png" />
                        </Link >
                        <Link to="https://www.facebook.com/"  className="access__header--social-2 link">
                            <img className="access__header--social-img" src="/img/social/twitter.png" />
                        </Link >
                        <Link to="https://www.facebook.com/" className="access__header--social-3 link">
                          <img className="access__header--social-img" src="/img/social/instagram.png" />
                        </Link >
                        <Link to="https://www.facebook.com/" className="access__header--social-4 link">
                          <img className="access__header--social-img" src="/img/social/googlePlus.png" />
                        </Link >

                    </section>

                    <span className="access__header--orhbar"></span>
                    <span className="access__header--withvbar"></span>
                    
                    <section className="access__header--or">
                        <span className="access__header--or-o"><small>o</small></span>
                        <span className="access__header--or-r">r</span>
                    </section>
                </div>
               
                

           
        )
    }

}


export default AccessHeader