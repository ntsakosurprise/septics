
import React,{Component} from 'react'
import QuoteForm from './quoteform/quoteform' 



class Quote extends Component{
    
    
    render(){

        return(

            <div className="home__quote">

                <section className="home__quote--box">

                    <div className="home__quote--form">

                        <h2 className="home__quote--title">Join a list of clients that love our services</h2> 
                        <QuoteForm />



                    </div>

                </section>
                
               
            </div>
        )
    }

}


export default Quote