import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import Search from '@material-ui/icons/Search';
import Trash from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles'




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




class Card extends Component{

     
    
    constructor(props){

        super(props)

    }

    
    milliSecondsToTime(millis){

        let seconds = (millis / 1000).toFixed()
        let minutes = (millis / (1000 * 60)).toFixed()
        let hours = (millis / (1000 * 60 * 60)).toFixed()
        let days = (millis / (1000 * 60 * 60 * 24)).toFixed() 

        if(seconds < 60 ) return `${seconds} seconds ago`
        if(minutes < 60 ) return `${minutes}m ago`
        if(seconds < 24 ) return `${hours}hrs ago` 
        if(days >= 30){

            let months = days / 30

            return `${months.toFixed()} months ago`
        }
        return `${days} days ago`
    }

    formatDate(date){

        // const {milliSecondsToTime} = this
        let nw = new Date()
        let setDate = new Date(date) 
        console.log('THE SETDATE')
        console.log(setDate)
        console.log(nw)
        let diffInTime = nw.getTime() - setDate.getTime() 
        // let diffInDays = diffInTime / (1000 * 3600 * 24) 

        console.log('THE TIME IN DAYS')
        console.log(this.milliSecondsToTime(diffInTime))

        return this.milliSecondsToTime(diffInTime)




    }

    formatJobType(type){

        if(type.indexOf('_') >= 0){

            let pieces = type.split('_')
            return `${pieces[0]}-${pieces[1]}`
        }else{
            return type
        }

    }
    bookMarkJob(job){


        
        const {props} = this   
        const {actions} = props 
        const {deleteSavedJob} = actions  
        const {id} = job  

        alert('THE JOB IS TO BE DELETED',id)
        // deleteSavedJob({id},1)
        // this.forceUpdate()



        // sendUserJobBookmark({})

       
    }
    openLinkPage(url,e){

        // e.preveventDefault()

        console.log('THE URL VALUE')
        console.log(url)
        console.log(e) 
        if(!url) return 

        const {props} = this 

        window.open(url)
        

    }
   


    render(){

        // const {classes,job,viewPage} = this.props 
        const {bookMarkJob,openLinkPage,props} = this
        const {job,classes} =  props 
        const {url} = job 

        return(



            <div className="jobcard ">

                   
                    <section className="jobcard__brand">
                        {job.logo ? <img src={ job.logo} /> : <span className="bx-raised-1 jobcard__job-bx"><small>{job.employer}</small></span> } 
                    </section>
                    <section className="jobcard__job">
                        <h3 className="jobcard__job-title-cont">
                            <span className="jobcard__job-title">
                                { job.jobTitle}
                            </span>
                            <span className="jobcard__job-sub-title">{ job.employer}</span>
                        </h3>
                        <i className="jobcard__job-salary">{job.currency} {job.jobSalary}</i>
                    </section>
                    <section className="jobcard__more">
                        <span className="jobcard__more-location">{ job.jobCity || 'Cape Town' /*job.id*/}</span>
                        <span className="jobcard__more-apply" onClick={openLinkPage.bind(this,url)}>Apply on website</span>
                        
                    
                    </section>
                    <section className="jobcard__extra"> 
                    
                        <span className="jobcard__extra-type">{ this.formatJobType(job.type)}</span>
                        <span className="jobcard__extra-date">{ this.formatDate(job.postDate)}</span>

                            <span className="jobcard__extra-icon"  onClick={bookMarkJob.bind(this,job)}>

                                <Icon>
                                    <Trash className={classes.root} />
                                </Icon>
                            </span>
                            
                        
                    </section>
                    <strong className="clearfix" />

            </div>


          

        //     <div className="jobcard ">

                  
        //             <section className="jobcard__brand">
        //                 {job.logo ? <img src={ job.logo} /> : <span className="bx-raised-1 jobcard__job-bx"><small>{job.employer}</small></span> } 
        //             </section>
        //             <section className="jobcard__job">
        //                 <h3 className="jobcard__job-title-cont">
        //                     <span className="jobcard__job-title">
        //                         { job.jobTitle}
        //                     </span>
        //                     <span className="jobcard__job-sub-title">{ job.employer}</span>
        //                 </h3>
        //                 <i className="jobcard__job-salary">{job.currency} {job.jobSalary}</i>
        //             </section>
        //             <section className="jobcard__more">
        //                 <span className="jobcard__more-location">{ job.city_name /*job.id*/}</span>
                       
        //                 <span className="jobcard__more-apply" onClick={(e)=>viewPage('/')}>Apply on website</span>
                        
                    
        //             </section>
        //             <section className="jobcard__extra">
        //                 <p className="jobcard__extra-type">
        //                     <span className="icon"></span>
        //                     <span className="job">{ job.type}</span></p>
                            
        //                 {/* <p className="jobcard__extra-date">{/* job.date *Last hour</p> */}
        //                  <span>
        //                     <Icon>
        //                         <Trash />
        //                     </Icon>
        //                 </span> 
        //             </section>
        //             <strong className="clearfix" />
        
        // </div>
        )
    }

}


export default withStyles(styles)(Card)