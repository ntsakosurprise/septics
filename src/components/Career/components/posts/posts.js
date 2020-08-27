
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'



import Slider from './slider'


// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Posts extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

        return(

            <article className="hr-size-fl-xx-bg pos-rel pd-bottom-fd-3">
                
                  <div className="pos-rel bg-red">

                     <Router>
                        <Link to="/opennings" className="bd-bottom-fd-primary-xx-bt pos-abs top-offset-fl-tn right-offset-0 hr-size-fl-x-tn link d-block font-fd-x-tn pd-bottom-fd-xxx-tn" >
                            Currently Advertised Posts
                        </Link>
                      </Router>
                  </div>

                  <div className="top-offset-vh-xxx-sm pos-rel">

                   
                    <Slider />
                  </div>

           
            </article>
        )
    }




}

export default Posts