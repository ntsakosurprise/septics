
import React,{Component} from 'react'
import QuoteForm from './quoteform/quoteform' 



class Quote extends Component{
    
    constructor(props){

        super(props)

    }

    componentWillUpdate(){

        const {actions,home} = this.props 
        const {currentSender} = home 

        if(currentSender.trim() !== ''){

            if(currentSender.trim() === 'modalForm') return false
        }

    }

    


    render(){

        const {actions,home} = this.props 
      
        return(

            <div className="home__quote">

                <section className="home__quote--box">

                    <div className="home__quote--form">

                        <h2 className="home__quote--title">Join a list of clients that love our services</h2> 
                        <QuoteForm actions={actions} home={home} />



                    </div>

                </section>
                
               
            </div>
        )
    }

}


export default Quote