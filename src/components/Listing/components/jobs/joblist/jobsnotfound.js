import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import { withStyles } from '@material-ui/core/styles'
import Favorite from '@material-ui/icons/Favorite'



const styles = {
    root: {
     
      color:"red",
      opacity: .5,
      fontSize: 20,
      '&:hover':{
          color: "red",
          opacity: 1
      }
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




class JobsNotFound extends Component{

     
    
    constructor(props){

        super(props)
        this.state = {
            dateInterVals: [
                '1h','2h','today','yesterday',
                '1w','2w','30 days'
            ]
        }
       

    }


  

   


    render(){

        const {props} = this
        const {search} =  props 
        // const {searchy} = search
        const {keywords,location} = search
       
        return(

            <div className="job__jobs--notfound">

                 <section className="job__jobs--notfound-header"> 
                     <p>The job search "{keywords}" jobs in {location} did not match any job</p>
                </section>    

                <section>

                    <div className="job__jobs--notfound-search">
                        <p>Please modify your search and try again</p> 
                        <span>You may want to try:</span><span><Link to={`/jobs?l=${location}`}>Jobs in {location} </Link></span>
                    </div>
                    <div className="job__jobs--notfound-hits">
                            <h2>Search hints:</h2>

                            <section className="job__jobs--notfound-hits-container">
                                <ul>

                                <li>Check for spelling errors and try again</li>
                                <li>Try with a single or different keyword</li>
                                <li>Try a less specific term for more results</li>
                                <li>Remove a filter and try again</li>
                                

                                </ul>
                            </section>
                    </div>
                    <strong className="clearfix" />
                </section>   

            </div>

      
        )
    }

}


export default withStyles(styles)(JobsNotFound)