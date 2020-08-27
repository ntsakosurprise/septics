
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import  Detailshow from './components/detailshow/detailshow' 
import  Toolbox from './components/toolbox/toolbox'



class Detailpane extends  Component{


    render(){

        

        return(

            
                
                    <div className="hr-size-fl-x-tn right-offset-0 top-offset-vh-bt vt-size-vh-xx-lg bg-light pos-abs pd-top-fd-xx-tn pd-left-fd-tn bx-raised-lt">

                       <Toolbox />
                       <Detailshow /> 
                    </div>


            
        )
    }




}




export default Detailpane