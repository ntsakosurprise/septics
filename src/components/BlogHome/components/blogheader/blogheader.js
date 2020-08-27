
import React,{Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

class blogHeader extends Component{
    
    
    render(){

        return(

           

                
                <div  className="blog__header--container">
                      
                    <section className="blog__header bx-shadow-dark">

                        <span className="blog__header--signup">Career guidance</span>
                        <span className="blog__header--vbar"></span>
                        <span className="blog__header--signin">Product update</span>

                    </section>

                  

                   
                </div>
               
                

           
        )
    }

}


export default blogHeader