
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Profile from '../profile/profile'



// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Detailshow extends  Component{


    constructor(props){

        super(props)
    }


   

    render(){


        return(

            
                
                    <div className="grid-col-12 pd-top-fd-tn">

                       <Profile />
                       
                    </div>


            
        )
    }




}

export default Detailshow