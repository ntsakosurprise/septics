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




class Employer extends Component{
    
    constructor(props){

        super(props)

    }


    render(){

        return(

           <section className="about__employer">

                      <h2 className="about__employer--header-title">
                          
                          <span className="about__employer--header-title-text">To</span>
                          <span className="about__employer--header-title-sub">Our employers</span>
                          <span className="about__employer--header-title-bar-1"></span>
                          <span className="about__employer--header-title-bar-2"></span>
                      </h2>
  

               <div className="about__employer--b ">

                        <p className="font-fd-x-tn fg-primary">
                        <span className=" about__employer--b-icon fg-secondary "><Icon><Notifications className={this.props.classes.fontSize} /></Icon></span>
                            <span className="  about__employer--b-title ">Post jobs</span>
                            <span className="  about__employer--b-text fg-dark">
                            Get maximum exposure for your jobs by posting jobs for free on our engine




                            </span>
                        </p>
               </div>

               <div className="about__employer--b">

                   <section className="about__employer--b2-listing">

                   <p className="font-fd-x-tn fg-primary">

                            <span className=" about__employer--b-icon fg-secondary "><Icon><Notifications className={this.props.classes.fontSize} /></Icon></span>
                            <span className="  about__employer--b-title ">Promote jobs</span>
                            <span className="  about__employer--b-text fg-dark">
                            Reach more candidates by promoting your job on our engine.</span>
                            <button className="about__employer--b-button">Promote a job</button>
                    </p>
                   

                   </section>
                    

                   

               </div>

               <div className="about__employer--b">

                  
                        <p className="font-fd-x-tn fg-primary">
                        <span className=" about__employer--b-icon fg-secondary "><Icon><Notifications className={this.props.classes.fontSize} /></Icon></span>
                            <span className="  about__employer--b-title ">Manage jobs & campaigns</span>
                            <span className="  about__employer--b-text fg-dark">
                            Use our blog to help guide you on your job hunting journey, our guid can really make a difference



                            </span>
                        </p>
               

               </div>

               <strong className="clearfix" />

               <div className="about__employer--post">

                 
               <button className="about__employer--post-button">Promote a job</button>
              

               </div>

               
             
           </section>
        )
    }

}


export default withStyles(styles)(Employer)