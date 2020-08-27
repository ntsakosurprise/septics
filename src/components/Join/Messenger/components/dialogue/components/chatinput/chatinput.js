
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Inputform from './inputform'



// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Chatinput extends  Component{


    constructor(props){

        super(props)
    }


   

    render(){


        return(

            
                
                    <div className="grid-col-12">

                       <Inputform />
                       
                    </div>


            
        )
    }




}

export default Chatinput