
import React, { Component } from 'react' 





 function Form (){
    
   
  

    return(

      
           <section className="contact__send--form">

                <form className="form pd-bottom-fd-lg ">

                <p className="contact__mail--jo-form-i">

                    <input type="text" className="bx-raised contact__mail--jo-form-text" placeholder="first name"/>

                </p>

                <p className="contact__mail--jo-form-i">

                    <input type="text" className="bx-raised contact__mail--jo-form-text" placeholder="last name"/>

                   
                </p>

                <p className="contact__mail--jo-form-i">

                    <input type="text" className="bx-raised contact__mail--jo-form-text" placeholder="alertme@mail.com"/>

                   
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