
import React, { Component } from 'react' 





 function Us (){
    
   
  

    return(

      
           <section className="about__us">

               <div className="about__us--jo">

                    <h2 className="about__us--jo-title">
                          

                          <span className="about__us--jo-title-text">
                           jobbri
                        </span>
                        <span className="about__us--jo-title-bar"></span>
                    </h2>

                    <section>
                        <img src="/img/bio.jpg" className="about__us--jo-pik" />
                    </section>
                        
               </div>

               <div className="about__us--bio">


                  <div className="about__us--bio-cont">
                   
                   <section className="about__us--bio-detail">

                        <h2 className="about__us--bio-detail-title">
                                <span className="about__us--bio-detail-title-text">Our Bio</span>
                                <span className="about__us--bio-detail-title-bar"></span>
                        </h2>

                        <div className="about__us--bio-detail-msg">

                          <p className="about__us--bio-detail-msg-text">

                          We are a local listing job search engine. 
                          Our goal is to collect all the jobs and bring them to you.


                          </p>
                            
                        </div>

                    

                   </section>

                   <section className="about__us--bio-value bx-raised-1">

                        <h2 className="about__us--bio-value-title">
                            <span className="about__us--bio-value-title-text-1">OF</span>
                            <span className="about__us--bio-value-title-text-1">value to us</span>
                        </h2>

                        <div className="about__us--bio-value-box">

                            <p className="about__us--bio-value-box-i">

                            <span className="about__us--bio-value-box-point"></span>
                            <span className="about__us--bio-value-box-text">Jobseekers</span>

                            </p>

                            <p className="about__us--bio-value-box-i">

                            <span className="about__us--bio-value-box-point"></span>
                            <span className="about__us--bio-value-box-text">Employers</span>

                            </p>
                            

                        </div>


                   </section>

                   </div>
                    

                   

               </div>

              

               <strong className="clearfix" />
             
           </section>
      
    )

}


export default Us