
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'


// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Dashboard extends  Component{


    constructor(props){

        super(props)
    }

    viewPage(location){

        const {push} = this.props 

        push(location)

    }
   

    render(){

        const {stats,push} = this.props
        const {alerts,saved,searched} = stats
        return(


               <div>

               
                    <section className="dashboard__candidatedash--i">

                        <div className="dashboard__candidatedash--i-box bx-raised-1 ">

                            
                                <span className="dashboard__candidatedash--i-box-title">Alerts</span>
                                <span className="dashboard__candidatedash--i-box-count">{alerts}</span>
                                <p className="dashboard__candidatedash--i-box-actions">
                                    <button className="dashboard__candidatedash--i-box-actions-b1" onClick={(e)=>this.viewPage('/alerts')}>
                                        View alerts
                                    </button>
                                    <button className="dashboard__candidatedash--i-box-actions-b2" onClick={(e)=>this.viewPage('/alerts/add')}>
                                        <span className="dashboard__candidatedash--i-box-actions-b2-add">+</span><span>add alerts</span>
                                    </button>
                                </p>
                                
                        </div>


                    </section>


                    <section className="dashboard__candidatedash--i">

                        <div className="dashboard__candidatedash--i-box bx-raised-1 ">

                            
                                <span className="dashboard__candidatedash--i-box-title">Saved jobs</span>
                                <span className="dashboard__candidatedash--i-box-count">{saved}</span>
                                <p className="dashboard__candidatedash--i-box-actions">
                                    <button className="dashboard__candidatedash--i-box-actions-b1" onClick={(e)=>this.viewPage('/saved')}>
                                        View saved
                                    </button>
                                    
                                </p>
                                
                        </div>


                    </section>


                    <section className="dashboard__candidatedash--i">

                        <div className="dashboard__candidatedash--i-box bx-raised-1 ">

                            
                                <span className="dashboard__candidatedash--i-box-title">Search history</span>
                                <span className="dashboard__candidatedash--i-box-count">{searched}</span>
                                <p className="dashboard__candidatedash--i-box-actions">
                                    <button className="dashboard__candidatedash--i-box-actions-b1" onClick={(e)=>this.viewPage('/searched')}>
                                        View history
                                    </button>
                                    
                                </p>
                                
                        </div>


                    </section>

                    <strong className="clearfix" />

                </div>

             
             
           
        )
    }




}

export default Dashboard