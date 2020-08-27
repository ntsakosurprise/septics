
import React, {Component} from 'react' 
import {BrowserRouter as Router, Link} from 'react-router-dom'



 import Video from './video'
 import Note from './note'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Junior extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

        return(

            <article className="grid-row pd-bottom-fd-xx-bg">
                
                <li className="fg-dark mg-left-fl-xxx-sm hr-size-fl-xxx-sm slant-anti-5d mg-bottom-fd-xx-bg font-fd-tn pd-bottom-fd-xx-tn mg-top-fd-x-tn hr-size-fl-xx-tn mg-left-fl-bt d-block  pd-bottom-fd-xxx-tn text-align-center">
                   <span>Junior Is The Next Senior</span>
                    <span className="d-block top-offset-fl-xxx-tn mg-top-fd-xx-tn left-offset-fl-xx-sm hr-size-fd-xx-md bd-bottom-fd-primary-xx-bt pos-rel"></span>
                </li>
                <div className="grid-row">

                    <Note />
                    <Video />
                    <strong className="clearfix" />

                </div>
                  

            </article>
        )
    }




}

export default Junior