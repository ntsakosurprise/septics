
import React, {Component} from 'react' 
import {BrowserRouter as Router, Link} from 'react-router-dom'



 import Reasons from './reasons'
 import Interactons from './interactions'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Choose extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

        return(

            <article className="grid-row pd-bottom-fd-xx-lg">
                
                <div className="grid-col-12">

                    <li className="mg-bottom-fd-xx-tn hr-size-fl-xx-tn top-offset-vh-xxx-sm mg-left-fl-xxx-tn d-block bd-bottom-fd-primary-xx-bt"></li>
                    <li className="fg-dark mg-bottom-fd-xxx-bg font-fd-xx-tn pd-bottom-fd-xx-tn mg-top-fd-x-tn hr-size-fl-xx-tn mg-left-fl-bt d-block  pd-bottom-fd-xxx-tn text-align-center bd-bottom-fd-primary-xx-bt">
                        <span className="d-inline-block mg-right-fd-bt"> Why</span>  
                        <span className="fg-dark d-inline-block font-fd-xx-tn">
                            Fl
                        </span>
                        <span className="fg-dk-green d-inline-block font-fd-x-tn">
                            e
                        </span>
                        <span className="fg-dark d-inline-block font-wt-bold font-fd-x-tn">
                            d
                        </span>
                        <span className="fg-primary d-inline-block font-fd-x-tn">
                            ja
                        </span>
                    </li>
                  
                </div>
                <div className="grid-row">

                    <Reasons />
                    <Interactons />
                    <strong className="clearfix" />

                </div>
                  

            </article>
        )
    }




}

export default Choose