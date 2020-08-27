
import React, { Component } from 'react' 





 function Form (){
    
   
  

    return(

      
           <section className="contact__send--form">

                <form className="form pd-bottom-fd-lg ">

                <p className="contact__mail--jo-form-i">

                    <span className="d-block mg-bottom-fd-tn font-fd-xx-tn">Email</span>
                    <input type="email" className="bx-raised contact__mail--jo-form-text" placeholder="launchnotify@yourmail.com"/>

                </p>

                
                <strong className="clearfix" />
                



                <p className="contact__mail--jo-form-submit">

                    <input type="submit" className="cursor-pointer font-fd-xx-tn bg-primary fg-light mg-top-fl-x-sm  d-inline-block pd-fd-bt bd-none" value="Send"/>

                </p>


                </form>
              
           </section>
      
    )

}


export default Form