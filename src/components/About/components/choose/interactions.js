
import React, {Component} from 'react' 
import {BrowserRouter as Router, Link} from 'react-router-dom'



// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Interactions extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

        return(

            <section className="grid-col-6">
                
                <h2 className="mg-bottom-fd-xx-bg pos-rel mg-left-fl-xxx-sm font-fd-x-tn">
                    Better Interactions
                    <span className="d-block top-offset-fl-xxx-tn mg-top-fd-xx-tn left-offset-fl-xxx-tn hr-size-fd-xx-md bd-bottom-fd-primary-xx-bt pos-rel">

                    </span>
                </h2>

                <div className="bx-shadow-dark mg-left-fl-xxx-tn hr-size-fl-lg font-fd-xx-tn pd-fl-bt">

                    <p className="mg-bottom-fd-xx-tn">
                        Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go.
                    </p> 
                    <p>
                        Most definitely, yes, our pictures are completely free to use for any purpose All you have to do to use kokapix images is simply just hit the Download button, and you are good to go.
                    </p>
                </div>

            </section>
        )
    }




}

export default Interactions