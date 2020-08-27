
import React,{Component} from 'react'
import {Link} from 'react-router-dom'




class BlogArticle extends Component{
    
    
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

           

                
                <div  className="post__post">

                   <section className="post__post--text">

                        

                            <div className="post__post--text-wrap">

                               
                                <h2 className="post__post--text-title">Peer Career Talk</h2>
                                <section className="post__post--text-content">
                                    <p className="post__post--text-content-p">psum dolor sit amet, consetetur sadipscing elitr, 
                                        sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua. 
                                        At vero eos et dolore magna aliquyam erat, sed diam voluptua. 
                                        At vero eos
                                        </p>

                                        <p className="post__post--text-content-p">psum dolor sit amet, consetetur sadipscing elitr, 
                                        sed diam nonumy eirmod tempor invidunt ut labore 
                                       
                                        </p>
                                </section>

                            </div>

                            <div className="post__post--text-social">
                                
                                 <section className="post__post--text-social-s-wrap">
                                     <button className="post__post--text-social-share">Share</button>
                                 </section>


                                 <section className="post__post--text-social-p-wrap">

                                    <Link to="https://www.facebook.com/"  className="post__post--text-social-p-wrap-1 link">
                                        <img className="access__header--social-img" src="/img/social/facebook.png" />
                                    </Link >
                                    <Link to="https://www.facebook.com/"  className="post__post--text-social-p-wrap-2 link">
                                        <img className="access__header--social-img" src="/img/social/twitter.png" />
                                    </Link >
                                    <Link to="https://www.facebook.com/" className="post__post--text-social-p-wrap-3 link">
                                    <img className="access__header--social-img" src="/img/social/instagram.png" />
                                    </Link >
                                    <Link to="https://www.facebook.com/" className="post__post--text-social-p-wrap-4 link">
                                    <img className="access__header--social-img" src="/img/social/googlePlus.png" />
                                    </Link >

                                </section>
                                
                            </div>
                        

                      

                 
                       

                   </section> 

                   <section className="post__post--grafik">

                       
                           

                               
                                <figure className="post__post--grafik-fig">
                                    <img src="/img/blog/bloglg.jpg" className="post__post--grafik-pik" />
                                </figure>
                                
                                <section className="post__post--grafik-author" title="Post author">


                                    <div>
                                        <span className="post__post--grafik-author-by">By </span>
                                        <img src="/img/users/250_5.jpg" className="post__post--grafik-author-pik" />
                                        <p className="post__post--grafik-author-wrap">
                                            <span className="post__post--grafik-author-name">
                                                Lucy Lu
                                            </span>
                                            <span className="post__post--grafik-author-date">Feb 02 2020</span>
                                        </p>

                                    </div>
                                    
                                </section>

                          

                       
                   </section>
                   <strong className="clearfix" />
                </div>
               
                

           
        )
    }

}


export default BlogArticle