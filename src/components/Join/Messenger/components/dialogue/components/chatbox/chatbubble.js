
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'







class Chatbubble extends  Component{


    constructor(props){

        super(props)
    }

   

   

   

    render(){


        return(

            
                
                    <div className="chatbubble">

                        {
                            this.props.message.to 
                        ? <section style={{width: "max-content",fontSize: 1.3+"rem",maxWidth: 60+"%"}} className="bx-raised-red pd-fd-xxx-tn bd-rad-xxx-tn mg-bottom-fd-tn">
                            {this.props.message.message}
                         </section>
                        : <section style={{width: "max-content",fontSize: 1.3+"rem",maxWidth: 60+"%"}} className="bx-raised left-offset-fl-tn pd-fd-xxx-tn bd-rad-xxx-tn pos-rel mg-bottom-fd-tn right-offset-0">
                            {this.props.message.message}
                         </section>
                        }


                     
                        
                        
                    </div>


            
        )
    }




}

export default Chatbubble