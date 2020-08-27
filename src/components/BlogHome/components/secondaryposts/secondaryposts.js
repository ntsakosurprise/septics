
import React,{Component} from 'react'
import {Link} from 'react-router-dom'




class SecondaryPosts extends Component{
    
    
    constructor(props) {
        super(props);
      
    }

   
    controlValidate = (validateControl)=>{
   	
        let validData = [true,''] 
    
     if(validateControl.validation.isRequired){ 
     
         let valid = validateControl.value.trim() !== ''
         let message = ''
         if(!valid){
             message = `${validateControl.config.name} is a required field `
         }
 
         validData = !valid ? [valid,message] : validData
         
     }
    
        return validData
    
}


      
    
    render(){

        return(

           

                
                <div  className="blog__secondary">

                   <section className="blog__secondary--posts">

                        <div className="blog__secondary--post">
                            
                            <secton className="blog__secondary--post-figda">

                               
                                <Link to='/' className="link d-block">

                                    <figure className="blog__secondary--post-fig">
                                        <img src="/img/users/250_3.jpg" className="blog__secondary--post-pik" />
                                    </figure>
                                    <small className="blog__secondary--post-date">Feb 02, 2020</small>

                                </Link>

                                

                            </secton>

                            <section className="blog__secondary--post-conti">

                                <Link to='/' className="link d-block">

                                    <h2 className="blog__secondary--post-title">Jobbri posting done</h2>
                                    <p className="blog__secondary--post-content">
                                        psum dolor sit amet, consetetur sadipscing elitr, 
                                        sed diam 
                                    </p>
                                </Link>
                                <button className="blog__secondary--post-tag">#update</button>
                            </section>
                            <strong className="clearfix" />
                            

                        </div>

                        <div className="blog__secondary--post">
                            
                            <secton className="blog__secondary--post-figda">

                               
                                <Link to='/' className="link d-block">

                                    <figure className="blog__secondary--post-fig">
                                        <img src="/img/users/250_6.jpg" className="blog__secondary--post-pik" />
                                    </figure>
                                    <small className="blog__secondary--post-date">Feb 02, 2020</small>

                                </Link>

                                

                            </secton>

                            <section className="blog__secondary--post-conti">

                                <Link to='/' className="link d-block">

                                    <h2 className="blog__secondary--post-title">Stay alert of desired jobs</h2>
                                    <p className="blog__secondary--post-content">
                                        psum dolor sit amet, consetetur sadipscing elitr, 
                                        sed diam 
                                    </p>
                                </Link>
                                <button className="blog__secondary--post-tag">#career</button>
                            </section>
                            <strong className="clearfix" />
                            

                        </div>

                       

                   </section> 

                   <section className="blog__secondary--views">

                        <Link to="/archive" className="link">

                            <button className="blog__secondary--views-v">View</button>
                            <button className="blog__secondary--views-a">Archives</button>
                            
                        </Link>
                   </section>
                </div>
               
                

           
        )
    }

}


export default SecondaryPosts