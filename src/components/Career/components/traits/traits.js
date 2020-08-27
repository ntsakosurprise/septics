
import React, {Component} from 'react' 
import {BrowserRouter as Router, Link} from 'react-router-dom'
import TraitBox from './traitbox'
import boxes from './boxes'


// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Traits extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

        return(

            <article className="hr-size-fl-x-bg pd-bottom-fd-md mg-bottom-fd-hg">
                
                   <div className="hr-size-fl-bg pos-rel font-fd-xx-tn">

                        <div className="hr-size-fl-x-lg pos-rel font-fd-xx-tn">
                            <img src="img/smile.jpg" className="mg-bottom-fd-xx-tn hr-size-fl-bg" />

                        </div>
                        <div className="pos-abs top-offset-fl-xx-sm right-offset-fl-x-tn bg-light-lt pd-fd-tn">
                            <p className="fg-dark font-fd-tn">The traits we cherish</p>
                        </div>
                       
                   </div> 

                    <div className="grid-row">

                        
                        <TraitBox options={boxes.box1} />
                        <TraitBox options={boxes.box2} />
                        <TraitBox options={boxes.box3} />
                        <TraitBox options={boxes.box4} />
                       
                        <strong className="clearfix" />

                    </div>
                    <div className="pd-bottom-fd-xxx-lg  pd-top-fd-md mg-top-fd-xx-bg pos-rel">

                        <div className="mg-left-fl-x-sm  pos-abs top-offset-fl-tn ">

                            
                            <Router >
                                <Link className="fg-primary btn--animated link left-offset-fl-xx-tn pos-abs top-offset-fl-bt hr-size-fl-xx-bg mg-left-fd-tn font-fd-tn pd-bottom-fd-xx-tn mg-top-fd-x-tn bx-shadow-dark d-inline-block  pd-bottom-fd-xxx-tn text-align-center">
                                    Join Fledja
                                </Link>
                            </Router>

                            <span className="d-inline-block hr-size-fd-xxxxx-bg bd-rad-bt bd-fd-primary-xx-bt vt-size-fd-bt"></span>
                        </div>

                    </div>

                       

            </article>
        )
    }




}

export default Traits