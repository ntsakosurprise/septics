
import React, { Component } from 'react' 
import links from './links'
import Navigation from '../../../Common/navigation'




 function More (){
    
    console.log('THE LINKS')
    console.log(links)
  

    return(

      
           <section className="footer__company">

               <div className="footer__company--more">

                      <p className="mg-top-fl-xx-sm pos-rel left-offset-fl-tn">
                          <span className="font-fd-tn fg-dark d-inline-block mg-right-fd-xxx-tn">Looking for more</span>
                          <span className="d-inline-block fg-primary font-fd-xx-sm">?</span>

                          <span className="mg-top-fd-tn d-block mg-left-fl-tn font-fd-xx-tn">
                            Look to the right
                        </span>
                        <span className="footer__company--more-bar"></span>
                        </p>
                        
               </div>

               <div className="footer__company--extras">

                   
                   <section className="footer__company--extras-nav">
                   <h2 className="font-fd-x-tn mg-bottom-fd-md fg-dark-lt">Company</h2>

                    <Navigation 
                
                            nav={
                                {
                                    
                                    nav: {items: links},
                                    type: 'pills'

                                }
                            
                        }

                    />


                   </section>

                   <section className="footer__company--extras-alert">

                    <h2 className="bg-primary-lta pd-fd-tn">New jobs alert?</h2>

                    <form className="form pd-bottom-fd-lg ">

                            <p className="mg-top-fd-md">

                                
                                <span className="hr-size-fl-xx-bg  fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn">

                                    <input type="text" className="footer__alert bx-raised" placeholder="alertme@mail.com"/>

                                </span>
                            </p>
                        

                        
                            <p className="home__search--circle top-offset-fl-sm text-align-center ">

                                <input type="submit" className="cursor-pointer font-fd-xx-tn bg-primary fg-light mg-top-fl-x-sm  d-inline-block pd-fd-bt bd-none" value="Alert me"/>

                            </p>


                        </form>
                   </section>
                    

                   

               </div>

              

               <strong className="clearfix" />
             
           </section>
      
    )

}


export default More