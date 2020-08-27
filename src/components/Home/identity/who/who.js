
import React from 'react' 
import {Link} from 'react-router-dom'


function Jobseeker() {
    

    return(

           <section className="home__who">

               <div className="home__who--leg">

                   <section className="home__who--leg-title">
                       <span>Who are our players</span> <small className="fg-secondary font-fd-tn">?</small>
                   </section>

               </div>
               
               <div className="home__who--players">
                    
                    <section className="home__who--players-cand">

                        <h2>Job seekers</h2>
                        <p>
                            We aim is to make it a simple task for job seekers to search for jobs,
                             all from one place.

                        </p>
                        <Link to="/jobs/find" className="link">

                            <button>
                                Post a job
                            </button>

                        </Link>


                    </section>
                    <section className="home__who--players-hire">

                        <h2>Employer</h2>

                        <p>
                            We aim is to make it a simple task for job seekers to search for jobs,
                            all from one place.

                        </p>

                        <Link to="/postjob" className="link">

                            <button>
                                Post a job
                            </button>

                        </Link>


                    </section>
                     <section className="home__who--pointer">

                         <small className="fg-red font-fd-x-tn d-inline-block pos-rel left-offset-fl-xxx-sm top-offset-fl-x-sm">0</small>
                     </section>
                    <strong className="clearfix" />
               </div>
               <strong className="clearfix" />
           </section>
    )

}


export default Jobseeker