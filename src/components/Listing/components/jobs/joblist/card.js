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
    likedJob: {

        color:"grey"

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
        this.state = {
            dateInterVals: [
                '1h','2h','today','yesterday',
                '1w','2w','30 days'
            ]
        }
        this.milliSecondsToTime = this.milliSecondsToTime 
        this.formatDate = this.formatDate

    }

    specialType(special){

        console.log('SPECIAL')
        console.log(special)

        if(special === 'mainfeatured'){

            return(
                <div className="jobcard__mainfeatured">
                    <span className="jobcard__social-text">Main Featured</span>
                </div>
            )
        }else if(special === 'jofeatured'){

            return(
                <div className="jobcard__featured">
                    <span className="jobcard__social-text">Featured</span>
                </div>
            )
                
        }else if(special === 'new'){

            return(
                <div className="jobcard__new">
                    <span className="jobcard__social-text">New</span>
                </div>
            )
        }else if(special === 'ad'){

            return(
                <div className="jobcard__ad">
                    <span className="jobcard__social-text">Ad</span>
                </div>
            )
        }else if(special === 'josponsored'){

            console.log('THE CARD COMPONENT RENDERS josponsored type of card')

            return(
                <div className="jobcard__sponsored">
                    <span className="jobcard__social-text">Sponsored</span>
                </div>
            )
        }else{
            return null
        }
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


        if(job.doDisable) return false
        const {props} = this   
        // alert('i should only work when enabled')
        // console.log('THE FAVORITEDJOBITEM DATA INBOOKMARK')
        // console.log(job)
        const {actions} = props 
        const {sendUserJobBookmark} = actions  
        job.isLiked = true 
        job.doDisable = true 
        const {id,jobTitle,jobSalary,currency,employer,logo,jobType,date} = job 
        sendUserJobBookmark({id,jobTitle,jobSalary,currency,employer,logo,jobType,date},1)
        this.forceUpdate()



        // sendUserJobBookmark({})

        // alert('THE JOB HAS BEEN BOOKMARKED')
    }
    openLinkPage(url,e){

        // e.preveventDefault()

        console.log('THE URL VALUE')
        console.log(url)
        console.log(e)

        const {props} = this 

        window.open(url)
        

    }

   


    render(){

        const {bookMarkJob,openLinkPage,props} = this
        const {job,type,classes} =  props 
        const {url} = job 
        let disabledLike = false 
        job.isLiked ? disabledLike = classes.likedJob : disabledLike = classes.root 
        // job.disableClick ? disableAction = true : disableAction = false
        // const {formatJobType,formatDate} = this 
        console.log('THECARDPROPSPROP')
        console.log(props)
        return(

            <div className="jobcard ">

                        {this.specialType(type)}   
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
                            <span className="jobcard__more-location">{ job.jobCity /*job.id*/}</span>
                            <span className="jobcard__more-apply" onClick={openLinkPage.bind(this,url)}>Apply on website</span>
                            
                        
                        </section>
                        <section className="jobcard__extra"> 
                           
                            <span className="jobcard__extra-type">{ this.formatJobType(job.jobType)}</span>
                            <span className="jobcard__extra-date">{ this.formatDate(job.date)}</span>

                                <span className="jobcard__extra-icon"  onClick={bookMarkJob.bind(this,job)}>

                                    <Icon>
                                        <Favorite className={disabledLike} />
                                    </Icon> 
                                </span>
                                
                            
                        </section>
                        <strong className="clearfix" />

            </div>

        //     <div className="jobcard ">

        //         {this.specialType(type)}
        //         <section className="jobcard__brand">
        //             <img src={ job.logo} className="" />
        //         </section>
        //         <section className="jobcard__job">
        //             <h3 className="jobcard__job-title-cont">
        //                 <span className="jobcard__job-title">
        //                     { job.jobTitle}
        //                 </span>
        //                 <span className="jobcard__job-sub-title">{ job.employer}</span>
        //             </h3>
        //             <i className="jobcard__job-salary">{job.currency} {job.jobSalary}</i>
        //         </section>
        //         <section className="jobcard__more">
        //             <span className="jobcard__more-location">{ job.city_name /*job.id*/}</span>
        //             <Link to="/" className="link">
        //                 <span className="jobcard__more-apply">Apply on website</span>
        //             </Link>
                   
        //         </section>
        //         <section className="jobcard__extra">
        //             <p className="jobcard__extra-type">
        //                 <span className="icon"></span>
        //                 <span className="job">{ job.type}</span></p>
        //             <p className="jobcard__extra-date">{ job.date}Last hour</p>
        //         </section>
        //         <strong className="clearfix" />
        
        // </div>
        )
    }

}


export default withStyles(styles)(Card)