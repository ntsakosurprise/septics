
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Chatbubble from './chatbubble'







class Chatbox extends  Component{


    constructor(props){

        super(props)
        this.state = {
            messages:[
                {
                    message: "Hi there,Toukie",
                    to: true
                   
                },
                {
                    message: "Hey Jouey,how are you",
                    from: true
                   
                },
                {
                    message: "I'm tagging along darling,how have you been?",
                    to: true
                   
                },
                {
                    message: "Have you written your assignments,I haven't written mine,I'll make sure that I get it done today",
                    from: true
                   
                },
                {
                    message: "I feel a bit nauseous today",
                    from: true
                   
                },
                {
                    message: "isn't,what have you ate today? It must be something you might have ate",
                    to: true
                   
                }
            ]
        }
    }

   

   

   

    render(){


        return(

            
                
                    <div className="grid-col-12 vt-size-vh-xx-md mg-top-fd-tn mg-bottom-fd-bt pd-left-fl-bt">


                     {
                         this.state.messages.map((m,i)=>{

                            return(<Chatbubble message={m} key={i}  />)
                         })
                     }
                      
                        
                        
                    </div>


            
        )
    }




}

export default Chatbox