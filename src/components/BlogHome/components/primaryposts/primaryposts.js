
import React,{Component} from 'react'
import {Link} from 'react-router-dom'




class PrimaryPosts extends Component{
    
    
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

           

                
                <div  className="blog__primary">

                   <section className="blog__primary--sm">

                        <Link to="/blog/post" className="link d-block ">

                            <div className="blog__priamry--post">

                                <h2 className="blog__primary--post-sm-title">Boost your job search</h2>
                                <small className="blog__primary--post-sm-date">Feb 02, 2020</small>
                                <figure className="blog__primary--post-sm-fig">
                                    <img src="/img/blog/blogsm-2.jpg" className="blog__primary--post-sm-pik" />
                                </figure>

                            </div>
                        </Link>

                        <Link to="/blog/post" className="link d-block blog__primary--post-offset">

                            <div className="blog__priamry--post">

                                <h2 className="blog__primary--post-sm-title">Find jobs made just for you</h2>
                                <small className="blog__primary--post-sm-date">Feb 02, 2020</small>
                                <figure className="blog__primary--post-sm-fig">
                                    <img src="/img/blog/blogsm-1.jpg" className="blog__primary--post-sm-pik" />
                                </figure>

                            </div>

                        </Link>

                   </section> 

                   <section className="blog__primary--lg">

                        <div className="blog__priamry--post">

                            <Link to="/blog/post" className="link d-block">

                                <h2 className="blog__primary--post-lg-title">Boost your job search</h2>
                                <small className="blog__primary--post-lg-date">Feb 02 2020</small>
                                <figure className="blog__primary--post-lg-fig">
                                    <img src="/img/blog/bloglg.jpg" className="blog__primary--post-lg-pik" />
                                </figure>
                                <section className="blog__primary--post-content">
                                    <p>psum dolor sit amet, consetetur sadipscing elitr, 
                                        sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua. 
                                        At vero eos et dolore magna aliquyam erat, sed diam voluptua. 
                                        At vero eos.... 
                                        </p>
                                </section>
                                <section className="blog__primary--post-lg-author" title="Post author">
                                    <span className="blog__primary--post-lg-author-name">Lucy </span>
                                    <img src="/img/users/250_5.jpg" className="blog__primary--post-lg-author-pik" />
                                </section>

                            </Link>

                        </div>
                   </section>
                   <strong className="clearfix" />
                </div>
               
                

           
        )
    }

}


export default PrimaryPosts