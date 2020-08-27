import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Contacts from '@material-ui/icons/People';
import { withStyles } from '@material-ui/core/styles'
// import Navigation from "../../../Common/navigation/navigation"
// import links from './links'

const styles = {
    root: {
     
      color:"green",
      fontSize: 20,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




function Men(props){

    console.log('Props in Men')
    console.log(props)

    return(

        <div >


        
            <Router>
                
                    <section className={`bg-primary ${props.path === '/' ? 'menu-default': 'menu-custom'}`}>
                        <Link to='/'  onClick={(e)=>{

                                e.preventDefault()
                                // console.log('THE MESSAGE WAS WELL RECEIVED')
                                // props.actions.alert({message: 'Testing the ALERT'})
                                // props.actions.navigate('/')

                            }} className="left-offset-fl-xx-tn link pos-rel d-block">
                            
                            

                                <span className="bar bar-1"></span>
                                <span className="bar bar-2"></span>
                                <span className="bar bar-3"></span>
                                        
                            
                        </Link>
                    </section>


                

            </Router>


            {props.path === '/' ? 
                <section className="job-type bx-raised-1">

                    <Link  className="menu-link link">
                        <span className="d-block text-align-center"><Icon><Contacts /></Icon></span>
                        <span className="d-block menu-text"> Full-time</span>
                    </Link>
                    <Link className="menu-link link">
                        <span className="d-block text-align-center"><Icon><Contacts /></Icon></span>
                        <span className="d-block menu-text"> Part-time</span>
                    </Link>

                    <Link className="menu-link link">
                        <span className="d-block text-align-center"><Icon><Contacts /></Icon></span>
                        <span className="d-block menu-text"> Freelance</span>
                    </Link>

                    <Link className="menu-link link">
                        <span className="d-block text-align-center"><Icon><Contacts /></Icon></span>
                        <span className="d-block menu-text"> Internship</span>
                    </Link>
                    <Link className="menu-link link">
                        <span className="d-block text-align-center"><Icon><Contacts /></Icon></span>
                        <span className="d-block menu-text"> Remote</span>
                    </Link>
                    <Link className="menu-link link">
                        <span className="d-block text-align-center"><Icon><Contacts /></Icon></span>
                        <span className="d-block menu-text"> Commute</span>
                    </Link>

                </section>
                : null
                }

        </div>
    )
}

export default withStyles(styles)(Men)