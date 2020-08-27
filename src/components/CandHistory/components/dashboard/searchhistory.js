
import React, {Component} from 'react' 
import Card from './card'





class SearchHistory extends  Component{


    constructor(props){

        super(props)
    }

    listJobs(list){

        // console.log('THE LIST FROM SAVED BODY')
        // console.log(list)
        return list.map((job,i)=>{

            // console.log('THE JOB TO THE CARD')
            // console.log(job)
            return <Card key={i}  job={job}/>
        })
        
       

    }

   

    render(){

        return(


               <div>

               
                    <section className="dashboard__searchhistory--i">

                        <div className="dashboard__searchhistory--i-box bx-raised-1 ">

                                <span className="dashboard__searchhistory--i-box-title">Search history</span>
                     
             
                        </div>


                    </section>

                    {

                        this.props.jobs.map((list)=>{

                                console.log('THE JOBS')
                                console.log(list)
                                return this.listJobs(list)
                            

                        })

                    }

                




           
                </div>

             
             
           
        )
    }




}

export default SearchHistory