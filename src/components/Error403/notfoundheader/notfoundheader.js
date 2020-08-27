
import React,{Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

class NotfoundHeader extends Component{
    
    
    render(){

        return(

           

                
                <div  className="blog__header--container">
                      
                    <section className="blog__header bx-shadow-dark">

                        <span className="blog__header--signup">Access Denied/Forbidden</span>

                    </section>
                   
                </div>
               
                

           
        )
    }

}


export default NotfoundHeader