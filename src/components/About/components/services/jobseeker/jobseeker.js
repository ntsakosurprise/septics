import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Notifications from '@material-ui/icons/Notifications';


const styles = {
    root: {
     
      color:"#999",
      fontSize: 30,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




class Jobseeker extends Component{
    
    constructor(props){

        super(props)

    }


    render(){

        return(

           <section className="about__jobseeker">

                  <h2 className="about__jobseeker--header-title">
                          
                          <span className="about__jobseeker--header-title-text">To</span>
                          <span className="about__jobseeker--header-title-sub">Our Jobseekers</span>
                          <span className="about__jobseeker--header-title-bar-1"></span>
                          <span className="about__jobseeker--header-title-bar-2"></span>
                  </h2>

               <div className="about__jobseeker--b ">

                        <p className="font-fd-x-tn fg-primary">
                        <span className=" about__jobseeker--b-icon fg-secondary "><Icon><Notifications className={this.props.classes.fontSize} /></Icon></span>
                            <span className="  about__jobseeker--b-title ">Job search</span>
                            <span className="  about__jobseeker--b-text fg-dark">
                            Jobbri allows you to search a pool of jobs to increase your chances of finding the right job



                            </span>
                        </p>
               </div>

               <div className="about__jobseeker--b">

                   <section className="about__jobseeker--b2-listing">

                   <p className="font-fd-x-tn fg-primary">

                            <span className=" about__jobseeker--b-icon fg-secondary "><Icon><Notifications className={this.props.classes.fontSize} /></Icon></span>
                            <span className="  about__jobseeker--b-title ">Jobs Manager</span>
                            <span className="  about__jobseeker--b-text fg-dark">
                            Jobbri allows you to manage your jobs to simplify your job searching task


                            </span>
                    </p>
                   

                   </section>
                    

                   

               </div>

               <div className="about__jobseeker--b">

                  
                        <p className="font-fd-x-tn fg-primary">
                        <span className=" about__jobseeker--b-icon fg-secondary "><Icon><Notifications className={this.props.classes.fontSize} /></Icon></span>
                            <span className="  about__jobseeker--b-title ">Career Guidance</span>
                            <span className="  about__jobseeker--b-text fg-dark">
                            Use our blog to help guide you on your job hunting journey, our guid can really make a difference



                            </span>
                        </p>
               

               </div>

               <strong className="clearfix" />

               <div className="about__jobseeker--influ">

                 <section className="about__jobseeker--influ-search">

                  <form className="form pd-bottom-fd-lg ">

                      <p className="mg-top-fd-md">

                          
                          <span className="hr-size-fl-xx-bg  fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn">

                              <input type="text" className="footer__alert bx-raised" placeholder="software engineer"/>

                          </span>
                      </p>



                      <p className="home__search--circle top-offset-fl-sm text-align-center ">

                          <input type="submit" className="cursor-pointer font-fd-xx-tn bg-primary fg-light mg-top-fl-x-sm  d-inline-block pd-fd-bt bd-none" value="Search Job"/>

                      </p>


                  </form>

                </section>


                <section className="about__jobseeker--influ-alert">

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

                 <strong className="clearfix" />

               </div>

               
             
           </section>
        )
    }

}


export default withStyles(styles)(Jobseeker)