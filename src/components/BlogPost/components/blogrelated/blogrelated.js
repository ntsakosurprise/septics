
import React,{Component} from 'react'
import {Link} from 'react-router-dom'




class BlogRelated extends Component{
    
    
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

           

                
                <div  className="post__related">


                        <section className="post__related--post-wrap">

                            <h2 className="post__related--title">Related posts</h2>

                            <div className="post__related--post">
                                
                                <Link to='/' className="link d-block">

                                    <img src="/img/users/250_3.jpg" className="post__related--post-pik" />
                                    <h2 className="post__related--post-title">Jobbri posting done</h2>
                                
                                </Link>


                            </div>

                            <div className="post__related--post">
                                
                                <Link to='/' className="link d-block">

                                    <img src="/img/users/250_2.jpg" className="post__related--post-pik" />
                                    <h2 className="post__related--post-title">Kick-start your career...</h2>
                                
                                </Link>


                            </div>


                        </section>
                        
                 

                </div>
               
                

           
        )
    }

}


export default BlogRelated