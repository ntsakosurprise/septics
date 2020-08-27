
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'






class Card extends  Component{


    constructor(props){

        super(props)
       
    }


   

    render(){

     

            
              return(  


                      
                        <div className="card">

                    
                            <section className="card__avatar">
                                   
                                    
                                    <span className="card__avatar__fig" >

                                        <img src={`img/users/${this.props.card.avatar}.jpg`} className="card__avatar__pik" />
                                    </span>
                            </section>
                            <section className="card__text">

                                <div className="card__text__info">

                                    <section className="card__text__info__title">
                                        <h3>{`${this.props.card.name.first} ${this.props.card.name.lastcap.toUpperCase()}`} </h3>
                                    </section>
                                    <section className="card__text__info__message">
                                        <p> {
                                            this.props.card.lastmessage.length > 15
                                                ? `${this.props.card.lastmessage.slice(0,16)}...`
                                                : this.props.card.lastmessage
                                            }</p>
                                    </section>

                                </div>
                                <div className="card__text__time">

                                    <p>Today {this.props.card.date}</p>

                                </div>

                            </section>
                                
                        </div>
                                
                                
                
              )


            
        
    }




}

export default Card