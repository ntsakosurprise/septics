
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom' 
import circles from './circles'
import PlatformCircles from './platformcircles'


// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Core extends  Component{


    constructor(props){

        super(props) 
        
    }

   

    render(){

        return(

            <article className="top-offset-vh-bt vt-size-vh-xx-bg mg-bottom-fd-x-sm mg-left-fl-bt pos-rel pd-top-fd-xx-tn  pd-left-fl-x-bt">
                
                <li className="fg-primary about__declare-1 righ-offset-fl-x-tn d-block  pd-bottom-fd-xxx-tn text-align-center bd-bottom-dk-green-xx-bt">
                    We
                </li>
                <li className="fg-dark  about__declare-2 d-block  pd-bottom-fd-xxx-tn text-align-center bd-bottom-dk-green-xx-bt">
                    Are
                </li>

                <li className="fg-dark font-fd-tn hr-size-fd-sm pos-abs top-offset-vh-xxx-sm mg-left-fl-bt d-block  pd-bottom-fd-xxx-tn text-align-center bd-bottom-fd-primary-xx-bt bd-top-fd-primary-xx-bt bx-raised">
                    A
                </li>

                <li className="fg-light d-none bg-primary right-offset-fl-x-bt font-fd-xx-tn hr-size-fl-xxx-tn pos-abs top-offset-vh-xxx-sm mg-left-fl-bt d-block  text-align-center bd-bottom-fd-primary-xx-bt bd-top-fd-primary-xx-bt bx-raised">
                    About
                </li>

                <section className="platform pos-rel top-offset-vh-bt">

                    <div className="pos-rel hr-size-fl-xxx-md">

                        {circles.circles.map((c,i)=>{

                            return (
                                <PlatformCircles ck={c} key={i} />
                            )
                            

                        })}
                        <span className="pos-abs font-fd-xx-tn about__platform-text d-inline-block">
                            Platform
                        </span>
                        
                    </div>
                </section>
                 
            </article>
        )
    }




}

export default Core