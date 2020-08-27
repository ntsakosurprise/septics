import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'




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




class Card extends Component{

     
    
    constructor(props){

        super(props)

    }

    

   


    render(){

        return(

          

            <div className="jobcard ">

            
                <section className="jobcard__brand">
                    <img src={this.props.job.company.logo} className="" />
                </section>
                <section className="jobcard__job">
                    <h3 className="jobcard__job-title-cont">
                        <span className="jobcard__job-title">
                            {this.props.job.jobName}
                        </span>
                        <span className="jobcard__job-sub-title">{this.props.job.company.name}</span>
                    </h3>
                    <i className="jobcard__job-salary">{this.props.job.salaryRange}</i>
                </section>
                <section className="jobcard__more">
                    <span className="jobcard__more-location">{this.props.job.location}</span>
                </section>
                <section className="jobcard__extra">
                    <p className="jobcard__extra-type">
                        <span className="icon"></span>
                        <span className="job">{this.props.job.jobtype}</span></p>
                    <p className="jobcard__extra-date">{this.props.job.postdate}</p>
                </section>
                <strong className="clearfix" />
        
        </div>
        )
    }

}


export default withStyles(styles)(Card)