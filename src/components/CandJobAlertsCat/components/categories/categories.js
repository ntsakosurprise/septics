
import React, {Component} from 'react' 
import Card from './card'



// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Categories extends  Component{


    constructor(props){

        super(props)
    }

    viewPage(location){

        const {push} = this.props 

        push(location)

    }

    setAlertsCatAndPush(alert){

        const {setAlertsCategory} = this.props 
        setAlertsCategory(alert)
        this.viewPage('alerts/list')
    }
   

    render(){

        const {alertCats} = this.props
        const {viewPage} = this
        // const {alertCategories} = alertCats
        return(


               <div>


                    <section className="dashboard__searchhistory--i">

                        <div className="dashboard__searchhistory--i-box bx-raised-1 ">

                                <span className="dashboard__searchhistory--i-box-title">Added Job alerts</span>


                        </div>


                    </section>

                    <section>

                        {

                            alertCats.map((catI,i)=>{

                                   
                                    return <Card key={i}  cat={catI} viewPage={viewPage.bind(this)}/>
                                

                            })

                        }

                        <strong className="clearfix" />

                    </section>

                    <section className="dashboard__candalertscat--alerts">
                        <button className="dashboard__candalertscat--alerts-butns-1" onClick={(e)=>{this.setAlertsCatAndPush(0)}}>View All Alerts</button>
                    </section>
                   

                   

                

                   

                </div>

             
             
           
        )
    }




}

export default Categories