import React, { Component } from 'react' 
import faqs from './faqs'
import Accordion from './accordion'







class Faqi extends Component{
    
    constructor(props){

        super(props)

    }

    


    render(){

        return(

           

            <section className="faqs__i">

               {faqs.map((f,i)=>{

                 if(f.content){

                    return(<Accordion name={f.title} content={f.content} key={i} />)


                 }else{
                     return null
                 }
                
               })} 
            
           </section>
        )
    }

}


export default Faqi