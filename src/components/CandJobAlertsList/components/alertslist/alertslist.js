
import React, {Component} from 'react' 
import Card from './card'





class AlertsList extends  Component{




    constructor(props){

        super(props)
    }

    // listJobs(list){

    //     // console.log('THE LIST FROM SAVED BODY')
    //     // console.log(list)
    //     return list.map((job,i)=>{

    //         // console.log('THE JOB TO THE CARD')
    //         // console.log(job)
    //         return <Card key={i}  job={job} />
    //     })
        
       

    // }

    viewPage(location){

        const {push} = this.props 

        console.log('THE VIEWPAGE LOCATION')
        console.log(location)
        push(location)

    }

    setAlertIdAndPush(alert){

        const {setAlertId} = this.props 
        setAlertId(alert)
        this.viewPage('/alerts/manage')
    }

   

    render(){

       const {alertsList} = this.props
       const {viewPage,setAlertIdAndPush} = this

        return(


               <div>

               
                    <section className="dashboard__searchhistory--i">

                        <div className="dashboard__searchhistory--i-box bx-raised-1 ">

                                <span className="dashboard__searchhistory--i-box-title">Added Job alerts</span>
                     
             
                        </div>


                    </section>

                    {

                        alertsList.map((alert,i)=>{

                            
                                return <Card key={i}  alert={alert} viewPage={viewPage.bind(this)} setAlertId={setAlertIdAndPush.bind(this)}/>
                            

                        })

                    }

                




           
                </div>

             
             
           
        )
    }




}

export default AlertsList