
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'


// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Presenter extends  Component{


    constructor(props){

        super(props)
     
    }

   

    render(){

        return(

            <section className="mg-auto pd-fl-bt bx-shadow-dark hr-size-fl-xx-lg">
                <div className="mg-bottom-fd-md">

                    <span className="d-inline-block vt-size-fd-bt pd-right-fd-xx-tn font-fd-x-tn bd-right-fd-primary-x-bt">
                        Role
                    </span>
                    <span className="d-inline-block pd-left-fd-xx-tn font-fd-x-tn">
                        {this.props.post.role}
                    </span>

                </div>
                <Router>
                    <Link to="/test" className="bd-bottom-fd-primary-xx-bt mg-bottom-fd-xx-lg text-align-center hr-size-fl-xx-tn link d-block font-fd-xx-tn pd-bottom-fd-xx-tn">
                        Job Details
                    </Link>
                </Router>

                <div className="grid-row">
                    <section className="grid-col-4 pos-rel">
                        <div className="bg-light left-offset-fl-bt pd-bottom-fd-sm font-fd-xx-tn">
                            <div className="fg-dark">
                                <span className="d-inline-block bx-shadow-dark pd-fd-xxx-tn bd-rad-x-bt pd-right-fd-xx-tn font-fd-x-tn bd-right-fd-primary-xx-tn">
                                    Description
                                </span>
                                <p className="pd-left-fd-xx-tn pd-right-fd-xx-tn pd-top-fd-md">
                                    {this.props.post.details.description}
                                </p>
                                <p className="pd-left-fd-xx-tn pd-right-fd-xx-tn pd-top-fd-md">
                                    {this.props.post.details.description}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="grid-col-4 pos-rel">
                        <div className="bg-light left-offset-fl-bt pd-bottom-fd-sm font-fd-xx-tn">
                            <div className="fg-dark">
                                <span className="d-inline-block mg-bottom-fd-md bx-shadow-dark pd-fd-xxx-tn bd-rad-x-bt pd-right-fd-xx-tn font-fd-x-tn bd-right-fd-primary-xx-tn">
                                   Requirements
                                </span>
                                <ol className="list list__hr">
                                    {this.props.post.details.requirements.map((r,i)=>{

                                        return(

                                            <li className="list__item mg-bottom-fd-xxx-tn" key={i}>{r}</li>
                                        )
                                    })}

                                </ol>
                               
                            </div>
                        </div>
                    </section>

                    <section className="grid-col-4 pos-rel">
                        <div className="bx-shadow-dark vt-size-fd-xxx-sm bg-light left-offset-fl-bt pd-bottom-fd-sm font-fd-xx-tn">
                           <p className="pd-left-fl-tn font-fd-tn pd-right-fd-xx-tn pd-top-fl-md">
                               Interested?
                           </p>
                           <span className="d-inline-block bx-shadow-dark pd-fd-xxx-tn bd-rad-x-bt pd-right-fd-xx-tn hr-size-fl-sm mg-left-fl-tn mg-top-fd-md text-align-center font-fd-x-tn fg-primary">
                               Apply
                           </span>
                        </div>
                    </section>
                </div>
            </section>


        )
    }




}

export default Presenter