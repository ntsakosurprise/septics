import React, { Component } from 'react' 
import faqs from './faqs'
import Accordion from './accordion'
import Upload from './upload'






class Faqi extends Component{
    
    constructor(props){

        super(props)

    }

    


    render(){

        let styles = {display: `block`,
            marginBottom: `2rem`,
            fontSize: `3rem`}

        return(

           

            <section className="faqs__i">

               {faqs.map((f,i)=>{

                 if(f.content){

                    return(<a className="link" style={styles} href={f.url} key={i} >{f.content}</a>)


                 }else{
                     return null
                 }
                
               })}

              
           </section>
        )
    }

}


export default Faqi