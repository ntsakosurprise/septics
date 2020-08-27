
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'


// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class FledjaWork extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

        return(

            <article className="hr-size-fl-xx-bg pd-bottom-fd-3 mg-bottom-fd-hg top-offset-vh-x-tn pos-rel">
                
                    <div className="hr-size-fl-xx-bg">
                        <section className="pd-left-fl-bt">

                            <h2 className="mg-bottom-fd-xx-bg pos-rel font-fd-tn">
                                Working for  
                                <span className="fg-primary mg-left-fd-bt d-inline-block font-fd-x-tn"> US</span>
                            </h2>
                            <div className="bx-shadow-dark hr-size-fl-sm mg-bottom-fd-hg font-fd-xx-tn pd-fl-bt">

                                <p className="mg-bottom-fd-xx-tn">
                                    Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go
                                </p>

                                <p className="mg-bottom-fd-xx-tn">
                                    Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go
                                </p>

                            </div>

                        </section>

                        <section className="grid-row">

                            <div className="grid-col-4 pd-none">
                                <span className="d-block bx-shadow-dark half-circle bg-red mg-bottom-fd-lg">
                                </span>
                                <Router>
                                    <Link to="/opennings" className="bd-bottom-fd-primary-xx-bt link d-block font-fd-x-tn pd-bottom-fd-xxx-tn text-align-center">
                                        Current Opennings
                                    </Link>
                                </Router>
                            </div>

                            <div className="grid-col-8 pos-rel">

                                <div className="bx-shadow-dark about__video  hr-size-fl-x-lg font-fd-xx-tn pd-fl-bt">

                                </div>
                                <div className="top-offset-fl-bt mg-left-fl-xx-tn hr-size-fl-x-lg pos-abs font-fd-xx-tn">

                                    <img src="img/worker.jpg" className="mg-bottom-fd-xx-tn hr-size-fl-bg" />

                                </div>

                            </div>
                            <strong className="clearfix"></strong>



                        </section>
                    </div>


            </article>
        )
    }




}

export default FledjaWork