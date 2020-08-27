
import React, { Component } from 'react' 
import NotifyLaunch from './notifylaunch'




 function Launch (){
    
    
  

    return(

      
           <section className="footer__launch">

               <div className="footer__launch--notify">

                      <section className="">
                          <span className="footer__launch--notify-our">Our</span>
                          <span className="footer__launch--notify-mobile">Mobile App is</span>
                    </section>
                    <section>
                        <span className="footer__launch--notify-soon">
                            Launching soon
                        </span>
                    </section>

                    <section>
                        <span className="footer__launch--notify-date">
                            Wanna know when we launch?
                        </span>
                    </section>
                      
                      <section>
                          <NotifyLaunch />
                      </section>
               </div>

               <div className="footer__launch--vendors">

                   
                   <section className="footer__launch--vendors-phone">
                  
                      <img src="/img/kokamobile2.png" />

                   </section>
                   <section>
                       <span className="footer__launch--vendors-google">
                           <img src="/img/google-play.png"  />
                       </span>
                       <span className="footer__launch--vendors-itunes">
                           <img src="/img/itunes.png"  />
                       </span>
                   </section>

                   
                   

               </div>

              

               <strong className="clearfix" />
             
           </section>
      
    )

}


export default Launch