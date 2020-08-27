
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import  Chatbar from './components/chatbar/chatbar' 
import  Chatbox from './components/chatbox/chatbox'
import  Chatinput from './components/chatinput/chatinput'




class Dialogue extends  Component{


    render(){

        

        return(

            
                
                    <div className="grid-col-6 pd-top-fd-xx-tn bx-raised-rt">

                       <Chatbar /> 
                       <Chatbox />
                       <Chatinput />
                        
                        
                    </div>


            
        )
    }




}




export default Dialogue