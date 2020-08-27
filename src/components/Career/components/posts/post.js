
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'


// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Post extends  Component{


    constructor(props){

        super(props)
        this.state = {

            posts: 10
        }
    }

   

    render(){

        return(

            <article className="grid-row pd-bottom-fd-3">
                
                   <div className="grid-col-12">
                       <li className="mg-bottom-fd-xx-tn hr-size-fl-xx-tn top-offset-vh-xxx-sm mg-left-fl-xxx-tn d-block bd-bottom-fd-primary-xx-bt">
                       </li>
                       <li className="fg-dark mg-bottom-fd-xxx-bg font-fd-xx-tn pd-bottom-fd-xx-tn mg-top-fd-x-tn hr-size-fl-xx-tn mg-left-fl-bt d-block  pd-bottom-fd-xxx-tn text-align-center bd-bottom-fd-primary-xx-bt">
                           Workplace Culture
                       </li>
                   </div> 

                   <div className="grid-row">

                       <section className="grid-col-6 pd-left-fl-bt">

                            <div className="bx-shadow-dark mg-left-fl-xxx-tn hr-size-fl-xxx-lg font-fd-xx-tn pd-fl-xxx-tn">

                                <p className="mg-bottom-fd-xx-tn">
                                    Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go
                                </p>

                                <p className="mg-bottom-fd-xx-tn">
                                    Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go
                                </p>


                            </div>
                       </section>

                       <section className="grid-col-6">

                            <h2 className="mg-bottom-fd-xx-bg d-none pos-rel mg-left-fl-xxx-sm font-fd-x-tn">
                                Better Interactions

                                 <span className="d-block top-offset-fl-xxx-tn mg-top-fd-xx-tn left-offset-fl-xxx-tn hr-size-fd-xx-md bd-bottom-fd-primary-xx-bt pos-rel">

                                 </span>

                            </h2>

                            <div className="mg-top-fd-xx-bg mg-left-fl-xxx-tn hr-size-fl-lg font-fd-xx-tn pd-fl-bt">

                               <p className="mg-bottom-fd-xx-tn">
                                    Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go
                                </p>

                                <p className="mg-bottom-fd-xx-tn">
                                    Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go
                                </p>

                            </div>

                            <strong className="clearfix"></strong>
                            <div className="clearfix pos-abs top-offset-vh-xxx-sm right-offset-0 half-circle-lt bg-ligt bx-shadow-dark" />
                       </section>

                   </div>

            </article>
        )
    }




}

export default Post