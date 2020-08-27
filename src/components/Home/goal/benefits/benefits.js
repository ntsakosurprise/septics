
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




class Benefits extends Component{
    
    constructor(props){

        super(props)

    }


    render(){

        return(

           <section className="home__jobseeker">

               <div className="home__jobseeker--b1 ">

                        <p className="font-fd-x-tn fg-primary bx-shadow-dark">
                            <span className="d-block text-align-center mg-bottom-fd-tn fg-secondary mg-right-fd-xx-tn"><Icon><Notifications className={this.props.classes.fontSize} /></Icon></span>
                            <span className="d-block text-align-center">Job search</span>
                        </p>
               </div>

               <div className="home__jobseeker--b2">

                   <section className="home__jobseeker--b2-listing">

                    <h2 className="fg-secondary font-fd-x-tn pd-left-fl-tn">Local Listing</h2>
                    <p className="font-fd-xx-tn fg-dark">
                            Find all local jobs in one place easily. 
                            Get notifications whenever preferred jobs near you arrive.

                        </p>

                        <span></span>

                   </section>
                    

                   

               </div>

               <div className="home__jobseeker--b3">

                  
                        <p className="font-fd-x-tn fg-primary bx-shadow-dark">
                            <span className="d-block text-align-center mg-bottom-fd-tn fg-secondary mg-right-fd-tn"><Icon><Notifications className={this.props.classes.fontSize} /></Icon></span>
                            <span className="d-block text-align-center">Career guidance</span>
                        </p>
               

               </div>

               <strong className="clearfix" />
             
           </section>
        )
    }

}


export default withStyles(styles)(Benefits)