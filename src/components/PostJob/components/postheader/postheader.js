
import React, { Component } from 'react' 
import Form from './form'





 function PostHeader (){
    
   
  

    return(

      
           <section className="post__header">

               <div className="contact__header--wrap">

                    <h2 className="post__header--title">
                          

                          <span className="post__header--title-text">
                           Start Posting Jobs
                        </span>
                        <span className="post__header--title-sub">for free</span>
                    </h2>

            
               </div>

               <div className="post__header--form">
                   <Form />
               </div>

               
           </section>
      
    )

}


export default PostHeader